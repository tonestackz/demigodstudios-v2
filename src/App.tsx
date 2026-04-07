import { ArrowRight, Code, Film, Megaphone, Shirt, Zap, DollarSign } from 'lucide-react';

function App() {
  const services = [
    { title: "Creator Monetization", icon: <DollarSign className="w-6 h-6"/>, desc: "Custom revenue architecture for independent artists and creators." },
    { title: "Digital Infrastructure", icon: <Code className="w-6 h-6"/>, desc: "End-to-end custom platform architecture and web ecosystems." },
    { title: "Marketing & Social", icon: <Megaphone className="w-6 h-6"/>, desc: "Comprehensive campaign management and social architecture." },
    { title: "High-End Production", icon: <Film className="w-6 h-6"/>, desc: "Cinematic video and studio-grade audio production." },
    { title: "Luxury Apparel", icon: <Shirt className="w-6 h-6"/>, desc: "Premium custom streetwear and brand merchandise." },
    { title: "MenuLift Productized", icon: <Zap className="w-6 h-6"/>, desc: "AI-driven digital remastering for restaurant menus and storefronts." }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gray-800">
      <header className="px-8 py-12 border-b border-gray-900">
        <h1 className="text-4xl font-black tracking-tighter uppercase">Demigod Studios</h1>
        <p className="text-gray-400 mt-2 tracking-widest text-sm uppercase">End-to-End Creative Architecture</p>
      </header>
      
      <main className="px-8 py-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Enterprise Capabilities</h2>
          <p className="text-gray-400 max-w-2xl">We engineer premium digital ecosystems, scale creator revenue, and execute cinema-grade production. Select your required architecture below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-8 border border-gray-900 hover:border-gray-700 transition-colors bg-gray-950/50 group cursor-pointer flex flex-col justify-between h-64">
              <div>
                <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 border border-gray-900 bg-gray-900/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Initialize Triage</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Connect with our systems to begin project scoping. Automated lead triage is active.</p>
          <button className="bg-white text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-200 transition-colors">
            Commence Workflow
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
