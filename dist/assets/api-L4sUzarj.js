import{c as i,j as e,m as s,Z as m,r as h,b as p,R as g}from"./index-Dh7Y0r_0.js";import{C as b,E as j,T as o}from"./terminal-CBy90GCU.js";import{K as c}from"./key-iben_fAp.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),N=()=>e.jsx("nav",{className:"fixed top-0 w-full z-50 bg-dark-950/95 backdrop-blur-md border-b border-dark-800",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16 lg:h-20",children:[e.jsxs("a",{href:"/",className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-9 h-9 bg-white rounded-lg flex items-center justify-center",children:e.jsx(m,{className:"w-5 h-5 text-dark-950"})}),e.jsx("span",{className:"text-xl font-bold text-white",children:"Corben AI"}),e.jsx("span",{className:"text-gray-500 text-sm font-medium",children:"/"}),e.jsx("span",{className:"text-gray-300 text-sm font-medium",children:"API"})]}),e.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[e.jsx("a",{href:"/",className:"text-gray-400 hover:text-white transition-colors text-sm",children:"Home"}),e.jsx("a",{href:"/app.html",className:"text-gray-400 hover:text-white transition-colors text-sm",children:"Dashboard"}),e.jsx("a",{href:"/blog.html",className:"text-gray-400 hover:text-white transition-colors text-sm",children:"Blog"}),e.jsx("a",{href:"/#demo",className:"bg-white text-dark-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors",children:"Get API Key"})]})]})})}),r=({code:t,language:a,title:d})=>{const[n,l]=h.useState(!1),x=()=>{navigator.clipboard.writeText(t),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsxs("div",{className:"bg-dark-900 border border-dark-800 rounded-xl overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-dark-800",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(o,{className:"w-4 h-4 text-gray-500"}),e.jsx("span",{className:"text-sm text-gray-400",children:d||a})]}),e.jsxs("button",{onClick:x,className:"flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm",children:[n?e.jsx(u,{className:"w-4 h-4 text-green-400"}):e.jsx(f,{className:"w-4 h-4"}),e.jsx("span",{children:n?"Copied!":"Copy"})]})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm",children:e.jsx("code",{className:"text-gray-300 font-mono",children:t})})]})},v=[{method:"GET",path:"/v1/agents",description:"List all agents",color:"bg-green-500/10 text-green-400"},{method:"POST",path:"/v1/agents",description:"Create a new agent",color:"bg-yellow-500/10 text-yellow-400"},{method:"GET",path:"/v1/agents/{id}",description:"Get agent details",color:"bg-green-500/10 text-green-400"},{method:"POST",path:"/v1/tasks",description:"Execute a task",color:"bg-yellow-500/10 text-yellow-400"},{method:"GET",path:"/v1/tasks/{id}",description:"Get task status",color:"bg-green-500/10 text-green-400"},{method:"DELETE",path:"/v1/agents/{id}",description:"Delete an agent",color:"bg-red-500/10 text-red-400"}],w=[{name:"JavaScript / Node.js",icon:"JS",status:"Stable"},{name:"Python",icon:"PY",status:"Stable"},{name:"Go",icon:"GO",status:"Beta"},{name:"Ruby",icon:"RB",status:"Coming Soon"}];function k(){return e.jsxs("div",{className:"min-h-screen bg-dark-950 text-white",children:[e.jsx(N,{}),e.jsx("main",{className:"pt-24 pb-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-16",children:[e.jsx("p",{className:"text-primary-400 text-sm font-medium uppercase tracking-wider mb-4",children:"Developer Documentation"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Corben AI API"}),e.jsx("p",{className:"text-lg text-gray-400 max-w-2xl mx-auto mb-8",children:"Integrate AI automation into your applications with our powerful REST API. Build intelligent workflows programmatically."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("a",{href:"#quickstart",className:"inline-flex items-center space-x-2 bg-white text-dark-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{children:"Quick Start"})]}),e.jsxs("a",{href:"#",className:"inline-flex items-center space-x-2 border border-dark-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-900 transition-colors",children:[e.jsx(y,{className:"w-5 h-5"}),e.jsx("span",{children:"Full Documentation"}),e.jsx(j,{className:"w-4 h-4"})]})]})]}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},id:"quickstart",className:"mb-16",children:[e.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Quick Start"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-dark-900/50 border border-dark-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center",children:e.jsx(c,{className:"w-5 h-5 text-gray-400"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Authentication"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Secure API access"})]})]}),e.jsx("p",{className:"text-gray-400 mb-4 text-sm leading-relaxed",children:"All API requests require authentication using your API key in the Authorization header."}),e.jsx(r,{code:"Authorization: Bearer YOUR_API_KEY",language:"HTTP Header",title:"HTTP Header"})]}),e.jsxs("div",{className:"bg-dark-900/50 border border-dark-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center",children:e.jsx(o,{className:"w-5 h-5 text-gray-400"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Base URL"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"API endpoint"})]})]}),e.jsx("p",{className:"text-gray-400 mb-4 text-sm leading-relaxed",children:"All API requests should be made to our secure production endpoint."}),e.jsx(r,{code:"https://api.corbenai.com",language:"URL",title:"Base URL"})]})]})]}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"mb-16",children:[e.jsx("h2",{className:"text-2xl font-bold mb-8",children:"API Endpoints"}),e.jsx("div",{className:"bg-dark-900/50 border border-dark-800 rounded-xl overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("th",{className:"text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Method"}),e.jsx("th",{className:"text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Endpoint"}),e.jsx("th",{className:"text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell",children:"Description"})]})}),e.jsx("tbody",{children:v.map((t,a)=>e.jsxs("tr",{className:"border-b border-dark-800 last:border-0 hover:bg-dark-800/30 transition-colors cursor-pointer",children:[e.jsx("td",{className:"py-4 px-6",children:e.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${t.color}`,children:t.method})}),e.jsx("td",{className:"py-4 px-6",children:e.jsx("code",{className:"text-primary-400 font-mono text-sm",children:t.path})}),e.jsx("td",{className:"py-4 px-6 text-gray-400 text-sm hidden md:table-cell",children:t.description})]},a))})]})})]}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"mb-16",children:[e.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center space-x-2",children:[e.jsx("span",{className:"w-8 h-8 bg-yellow-500/10 rounded flex items-center justify-center text-yellow-400 text-xs font-bold",children:"JS"}),e.jsx("span",{children:"JavaScript / Node.js"})]}),e.jsx(r,{code:`import { CorbenAI } from '@corben-ai/sdk';

const client = new CorbenAI({
  apiKey: process.env.CORBEN_API_KEY
});

// Create an agent
const agent = await client.agents.create({
  name: 'Email Assistant',
  type: 'automation',
  tools: ['browser', 'email', 'file']
});

// Execute a task
const task = await client.tasks.create({
  agentId: agent.id,
  instructions: 'Check my inbox and summarize unread emails'
});

console.log(task.result);`,language:"javascript",title:"JavaScript"})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center space-x-2",children:[e.jsx("span",{className:"w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-400 text-xs font-bold",children:"PY"}),e.jsx("span",{children:"Python"})]}),e.jsx(r,{code:`from corben_ai import CorbenAI
import os

client = CorbenAI(api_key=os.environ['CORBEN_API_KEY'])

# Create an agent
agent = client.agents.create(
    name='Email Assistant',
    type='automation',
    tools=['browser', 'email', 'file']
)

# Execute a task
task = client.tasks.create(
    agent_id=agent.id,
    instructions='Check my inbox and summarize unread emails'
)

print(task.result)`,language:"python",title:"Python"})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center space-x-2",children:[e.jsx("span",{className:"w-8 h-8 bg-green-500/10 rounded flex items-center justify-center text-green-400 text-xs font-bold",children:"cURL"}),e.jsx("span",{children:"cURL"})]}),e.jsx(r,{code:`# Create an agent
curl -X POST https://api.corbenai.com/v1/agents \\
  -H "Authorization: Bearer $CORBEN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Email Assistant",
    "type": "automation",
    "tools": ["browser", "email", "file"]
  }'

# Execute a task
curl -X POST https://api.corbenai.com/v1/tasks \\
  -H "Authorization: Bearer $CORBEN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "agent_123",
    "instructions": "Check my inbox and summarize unread emails"
  }'`,language:"bash",title:"cURL"})]})]})]}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"mb-16",children:[e.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Official SDKs"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:w.map((t,a)=>e.jsxs("div",{className:"bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-dark-700 transition-colors cursor-pointer",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-sm font-bold text-gray-300",children:t.icon}),e.jsx("span",{className:`text-xs font-medium px-2 py-1 rounded ${t.status==="Stable"?"bg-green-500/10 text-green-400":t.status==="Beta"?"bg-yellow-500/10 text-yellow-400":"bg-gray-500/10 text-gray-400"}`,children:t.status})]}),e.jsx("h3",{className:"font-semibold text-white",children:t.name})]},a))})]}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Get Started?"}),e.jsx("p",{className:"text-gray-400 mb-8 max-w-xl mx-auto",children:"Create your free account and get your API key to start building with Corben AI."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("a",{href:"/#demo",className:"inline-flex items-center justify-center space-x-2 bg-white text-dark-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:[e.jsx(c,{className:"w-5 h-5"}),e.jsx("span",{children:"Get API Key"})]}),e.jsx("a",{href:"#",className:"inline-flex items-center justify-center space-x-2 border border-dark-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-900 transition-colors",children:e.jsx("span",{children:"Contact Sales"})})]})]})]})}),e.jsx("footer",{className:"border-t border-dark-800 py-8",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[e.jsxs("div",{className:"text-gray-500 text-sm",children:[new Date().getFullYear()," Corben AI Agent. All rights reserved."]}),e.jsxs("div",{className:"flex items-center space-x-6 text-sm",children:[e.jsx("a",{href:"/#privacy",className:"text-gray-400 hover:text-white transition-colors",children:"Privacy"}),e.jsx("a",{href:"/#terms",className:"text-gray-400 hover:text-white transition-colors",children:"Terms"}),e.jsx("a",{href:"/#contact",className:"text-gray-400 hover:text-white transition-colors",children:"Contact"})]})]})})})]})}p.createRoot(document.getElementById("root")).render(e.jsx(g.StrictMode,{children:e.jsx(k,{})}));
//# sourceMappingURL=api-L4sUzarj.js.map
