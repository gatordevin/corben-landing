#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

/**
 * Test deployment script to verify Vercel configuration
 */
class DeploymentTester {
  constructor() {
    this.projectDir = process.cwd();
    this.errors = [];
    this.warnings = [];
  }

  async runTests() {
    console.log(chalk.bold.blue('🧪 Running deployment tests...\n'));

    await this.testConfigurationFiles();
    await this.testBuildConfiguration();
    await this.testEnvironmentSetup();
    await this.testVercelConfiguration();
    await this.testPlatformIntegration();

    this.printResults();
    return this.errors.length === 0;
  }

  async testConfigurationFiles() {
    console.log(chalk.blue('📋 Testing configuration files...'));

    const requiredFiles = [
      'vercel.json',
      'package.json',
      'env-config.js',
      'platform-integration.js',
      'vercel-deploy.js'
    ];

    for (const file of requiredFiles) {
      const filePath = path.join(this.projectDir, file);
      if (await fs.pathExists(filePath)) {
        console.log(chalk.green(`✅ ${file} exists`));
      } else {
        console.log(chalk.red(`❌ ${file} missing`));
        this.errors.push(`Missing configuration file: ${file}`);
      }
    }

    // Test API directory
    const apiDir = path.join(this.projectDir, 'api');
    if (await fs.pathExists(apiDir)) {
      const apiIndex = path.join(apiDir, 'index.js');
      if (await fs.pathExists(apiIndex)) {
        console.log(chalk.green(`✅ API index exists`));
      } else {
        console.log(chalk.red(`❌ API index missing`));
        this.errors.push('Missing API index file');
      }
    } else {
      console.log(chalk.red(`❌ API directory missing`));
      this.errors.push('Missing API directory');
    }
  }

  async testBuildConfiguration() {
    console.log(chalk.blue('\n🔨 Testing build configuration...'));

    const packageJsonPath = path.join(this.projectDir, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);

    const requiredScripts = [
      'build',
      'build:all',
      'build:main',
      'build:blog',
      'build:app',
      'build:api',
      'vercel:deploy',
      'deploy'
    ];

    for (const script of requiredScripts) {
      if (packageJson.scripts && packageJson.scripts[script]) {
        console.log(chalk.green(`✅ Script ${script} configured`));
      } else {
        console.log(chalk.red(`❌ Script ${script} missing`));
        this.errors.push(`Missing script: ${script}`);
      }
    }

    // Check for vercel dependency
    if (packageJson.devDependencies && packageJson.devDependencies.vercel) {
      console.log(chalk.green(`✅ Vercel CLI dependency found`));
    } else {
      console.log(chalk.yellow(`⚠️  Vercel CLI dependency missing`));
      this.warnings.push('Vercel CLI not in dependencies');
    }
  }

  async testEnvironmentSetup() {
    console.log(chalk.blue('\n🔧 Testing environment setup...'));

    const envConfigPath = path.join(this.projectDir, 'env-config.js');
    if (await fs.pathExists(envConfigPath)) {
      try {
        const envConfig = require(envConfigPath);
        if (envConfig.envConfig && envConfig.validateEnv) {
          console.log(chalk.green(`✅ Environment configuration valid`));
          
          // Test validation function
          const isValid = envConfig.validateEnv();
          if (isValid) {
            console.log(chalk.green(`✅ Environment variables valid`));
          } else {
            console.log(chalk.yellow(`⚠️  Some environment variables missing`));
            this.warnings.push('Environment variables incomplete');
          }
        } else {
          console.log(chalk.red(`❌ Environment configuration invalid`));
          this.errors.push('Invalid environment configuration structure');
        }
      } catch (error) {
        console.log(chalk.red(`❌ Environment configuration error: ${error.message}`));
        this.errors.push(`Environment config error: ${error.message}`);
      }
    }
  }

  async testVercelConfiguration() {
    console.log(chalk.blue('\n🚀 Testing Vercel configuration...'));

    const vercelJsonPath = path.join(this.projectDir, 'vercel.json');
    if (await fs.pathExists(vercelJsonPath)) {
      try {
        const vercelConfig = await fs.readJson(vercelJsonPath);
        
        // Check required fields
        const requiredFields = ['version', 'name', 'builds', 'routes'];
        for (const field of requiredFields) {
          if (vercelConfig[field]) {
            console.log(chalk.green(`✅ Vercel ${field} configured`));
          } else {
            console.log(chalk.red(`❌ Vercel ${field} missing`));
            this.errors.push(`Missing Vercel config field: ${field}`);
          }
        }

        // Check build configuration
        if (vercelConfig.builds && vercelConfig.builds.length > 0) {
          console.log(chalk.green(`✅ Vercel builds configured`));
        } else {
          console.log(chalk.red(`❌ Vercel builds missing`));
          this.errors.push('Missing Vercel builds configuration');
        }

        // Check routes
        if (vercelConfig.routes && vercelConfig.routes.length > 0) {
          console.log(chalk.green(`✅ Vercel routes configured`));
        } else {
          console.log(chalk.red(`❌ Vercel routes missing`));
          this.errors.push('Missing Vercel routes configuration');
        }

      } catch (error) {
        console.log(chalk.red(`❌ Vercel configuration error: ${error.message}`));
        this.errors.push(`Vercel config error: ${error.message}`);
      }
    }
  }

  async testPlatformIntegration() {
    console.log(chalk.blue('\n🔗 Testing platform integration...'));

    const platformIntegrationPath = path.join(this.projectDir, 'platform-integration.js');
    if (await fs.pathExists(platformIntegrationPath)) {
      try {
        const PlatformIntegration = require(platformIntegrationPath);
        const integration = new PlatformIntegration();
        
        console.log(chalk.green(`✅ Platform integration module loads`));

        // Test initialization
        try {
          await integration.initialize();
          console.log(chalk.green(`✅ Platform integration initializes`));
        } catch (error) {
          console.log(chalk.yellow(`⚠️  Platform integration init warning: ${error.message}`));
          this.warnings.push(`Platform init: ${error.message}`);
        }

        // Test middleware creation
        const middleware = integration.createMiddleware();
        if (middleware && typeof middleware === 'function') {
          console.log(chalk.green(`✅ Platform middleware creates`));
        } else {
          console.log(chalk.red(`❌ Platform middleware invalid`));
          this.errors.push('Invalid platform middleware');
        }

      } catch (error) {
        console.log(chalk.red(`❌ Platform integration error: ${error.message}`));
        this.errors.push(`Platform integration error: ${error.message}`);
      }
    }
  }

  printResults() {
    console.log(chalk.bold.blue('\n📊 Test Results:\n'));

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log(chalk.bold.green('✅ All tests passed! Deployment ready.'));
    } else {
      if (this.errors.length > 0) {
        console.log(chalk.bold.red('❌ Errors:'));
        this.errors.forEach((error, index) => {
          console.log(chalk.red(`  ${index + 1}. ${error}`));
        });
      }

      if (this.warnings.length > 0) {
        console.log(chalk.bold.yellow('\n⚠️  Warnings:'));
        this.warnings.forEach((warning, index) => {
          console.log(chalk.yellow(`  ${index + 1}. ${warning}`));
        });
      }

      console.log(chalk.bold.red('\n🔧 Fix the errors above before deploying.'));
    }

    console.log(chalk.blue('\n💡 Next steps:'));
    console.log('1. Fix any errors listed above');
    console.log('2. Review warnings (optional fixes)');
    console.log('3. Run: npm run build:all');
    console.log('4. Run: npm run deploy');
    console.log('5. Or test locally first: npm start');
  }
}

// CLI interface
if (require.main === module) {
  const tester = new DeploymentTester();
  tester.runTests().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error(chalk.red('Test failed:'), error);
    process.exit(1);
  });
}

module.exports = DeploymentTester;