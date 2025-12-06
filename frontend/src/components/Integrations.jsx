import React from 'react';

const integrations = [
  { name: 'Stripe', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg', bgColor: 'bg-[#635BFF]' },
  { name: 'Google Calendar', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecalendar.svg', bgColor: 'bg-[#4285F4]' },
  { name: 'Mailchimp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg', bgColor: 'bg-[#FFE01B]' },
  { name: 'Slack', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg', bgColor: 'bg-[#4A154B]' },
  { name: 'Zoom', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg', bgColor: 'bg-[#2D8CFF]' },
  { name: 'QuickBooks', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg', bgColor: 'bg-[#2CA01C]' },
  { name: 'Zapier', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg', bgColor: 'bg-[#FF4A00]' },
  { name: 'HubSpot', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg', bgColor: 'bg-[#FF7A59]' },
];

const Integrations = () => {
  return (
    <section id="integrations" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Pattern - Grid with overlay */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-dark border border-white/20 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm font-medium text-white">Integrations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Connect With Your{' '}
            <span className="text-gradient\">Favorite Tools</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
            Seamlessly integrate with the tools you already use every day
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="glass-strong border border-white/10 p-8 hover:border-[#14B8A6]/50 transition-all duration-500 hover-scale group relative animate-slide-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              {/* Coming Soon Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#A4D23E] to-[#8BC234] text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                Coming Soon to Pro
              </div>
              
              <div className={`w-20 h-20 rounded-lg ${integration.bgColor} mb-4 mx-auto group-hover:scale-110 transition-transform flex items-center justify-center p-4 shadow-lg`}>
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-center font-semibold text-white">{integration.name}</p>
              <div className="mt-2 flex items-center justify-center opacity-50">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-500 ml-1">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Integration Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="glass-strong border border-white/10 p-6 rounded-lg hover-scale">
            <div className="text-3xl font-bold text-gradient mb-2">8</div>
            <div className="text-sm text-gray-400">Active Integrations</div>
          </div>
          <div className="glass-strong border border-white/10 p-6 rounded-lg hover-scale">
            <div className="text-3xl font-bold text-gradient mb-2">12K+</div>
            <div className="text-sm text-gray-400">Synced Events</div>
          </div>
          <div className="glass-strong border border-white/10 p-6 rounded-lg hover-scale">
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">And 50+ more integrations</p>
          <button className="glass-strong border border-white/20 text-white font-semibold px-8 py-4 hover:border-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all rounded-lg shadow-lg">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;