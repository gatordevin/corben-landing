#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { envConfig, validateEnv } = require('./env-config');

class VercelDeployer {
  constructor() {
    this.projectDir = process.cwd();
    this.distDir = path.join(this.projectDir, 'dist');
    this.apiDir = path.join(this.projectDir, 'api');
  }

  async validateSetup() {
    console.log(chalk.blue('🔍 Validating Vercel setup...'));

    // Check if vercel.json exists
    if (!await fs.pathExists(path.join(this.projectDir, 'vercel.json'))) {
      throw new Error('vercel.json not found. Please run setup first.');
    }

    // Check if API directory exists
    if (!await fs.pathExists(this.apiDir)) {
      throw new Error('api directory not found. Please create API routes.');
    }

    // Validate environment
    if (!validateEnv()) {
      console.log(chalk.yellow('⚠️  Some environment variables are missing. Deployment may fail.'));
    }

    console.log(chalk.green('✅ Setup validation passed'));
  }

  async buildApplications() {
    console.log(chalk.blue('🔨 Building all applications...'));

    try {
      // Build main application
      console.log(chalk.blue('Building main application...'));
      execSync('npm run build:main', { stdio: 'inherit' });

      // Build blog application
      console.log(chalk.blue('Building blog application...'));
      execSync('npm run build:blog', { stdio: 'inherit' });

      // Build app application
      console.log(chalk.blue('Building app application...'));
      execSync('npm run build:app', { stdio: 'inherit' });

      // Build API application
      console.log(chalk.blue('Building API application...'));
      execSync('npm run build:api', { stdio: 'inherit' });

      console.log(chalk.green('✅ All applications built successfully'));
    } catch (error) {
      console.error(chalk.red('❌ Build failed:'), error.message);
      throw error;
    }
  }

  async deployToVercel(preview = false) {
    console.log(chalk.blue(`🚀 Deploying to Vercel (${preview ? 'preview' : 'production'})...`));

    try {
      const command = preview 
        ? 'npx vercel deploy --yes'
        : 'npx vercel deploy --prod --yes';

      const output = execSync(command, { 
        stdio: 'pipe',
        encoding: 'utf8'
      });

      console.log(chalk.green('✅ Deployment successful!'));
      console.log(chalk.blue('📋 Deployment output:'));
      console.log(output);

      // Extract deployment URL
      const urlMatch = output.match(/https?:\/\/[^\s]+/);
      if (urlMatch) {
        console.log(chalk.green(`🌐 Deployment URL: ${urlMatch[0]}`));
        return urlMatch[0];
      }

      return output;
    } catch (error) {
      console.error(chalk.red('❌ Deployment failed:'), error.message);
      throw error;
    }
  }

  async setupProject() {
    console.log(chalk.blue('⚙️  Setting up Vercel project...'));

    try {
      // Check if already linked to Vercel
      const vercelDir = path.join(this.projectDir, '.vercel');
      if (await fs.pathExists(vercelDir)) {
        console.log(chalk.yellow('Project already linked to Vercel'));
        return;
      }

      // Link project to Vercel
      console.log(chalk.blue('Linking project to Vercel...'));
      execSync('npx vercel link --yes', { stdio: 'inherit' });

      console.log(chalk.green('✅ Project linked to Vercel'));
    } catch (error) {
      console.error(chalk.red('❌ Project setup failed:'), error.message);
      throw error;
    }
  }

  async runHealthCheck(deploymentUrl) {
    console.log(chalk.blue('🏥 Running health check...'));

    try {
      const response = await fetch(`${deploymentUrl}/api/health`);
      const data = await response.json();

      if (response.ok && data.status === 'healthy') {
        console.log(chalk.green('✅ Health check passed'));
        return true;
      } else {
        console.log(chalk.red('❌ Health check failed'));
        return false;
      }
    } catch (error) {
      console.log(chalk.red('❌ Health check failed:'), error.message);
      return false;
    }
  }

  async deploy(preview = false) {
    try {
      console.log(chalk.bold.blue(`\n🚀 Starting Vercel deployment (${preview ? 'preview' : 'production'})...\n`));

      // Step 1: Validate setup
      await this.validateSetup();

      // Step 2: Setup project if needed
      await this.setupProject();

      // Step 3: Build applications
      await this.buildApplications();

      // Step 4: Deploy to Vercel
      const deploymentUrl = await this.deployToVercel(preview);

      // Step 5: Health check (wait a bit for deployment to settle)
      console.log(chalk.blue('⏳ Waiting for deployment to settle...'));
      await new Promise(resolve => setTimeout(resolve, 10000));

      const healthCheck = await this.runHealthCheck(deploymentUrl);

      console.log(chalk.bold.green('\n✅ Deployment completed successfully!'));
      console.log(chalk.blue(`🌐 Deployment URL: ${deploymentUrl}`));
      
      if (healthCheck) {
        console.log(chalk.green('🏥 Health check: PASSED'));
      } else {
        console.log(chalk.yellow('⚠️  Health check: FAILED - Please check deployment manually'));
      }

      return deploymentUrl;
    } catch (error) {
      console.error(chalk.bold.red('\n❌ Deployment failed:'), error.message);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const preview = process.argv.includes('--preview') || process.argv.includes('-p');
  
  const deployer = new VercelDeployer();
  deployer.deploy(preview).catch(error => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = VercelDeployer;