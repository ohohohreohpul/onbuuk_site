import React from 'react';

const integrations = [
  { name: 'Stripe', color: 'bg-[#635BFF]' },
  { name: 'Google Cal', color: 'bg-[#4285F4]' },
  { name: 'Mailchimp', color: 'bg-[#FFE01B]' },
  { name: 'Slack', color: 'bg-[#4A154B]' },
  { name: 'Zoom', color: 'bg-[#2D8CFF]' },
  { name: 'QuickBooks', color: 'bg-[#2CA01C]' },
  { name: 'Zapier', color: 'bg-[#FF4A00]' },
  { name: 'HubSpot', color: 'bg-[#FF7A59]' },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-sm font-medium text-white">Integrations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Connect With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seamlessly integrate with the tools you already use every day
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 ${integration.color} mb-4 mx-auto group-hover:scale-110 transition-transform`}></div>
              <p className="text-center font-semibold text-gray-900">{integration.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">And 50+ more integrations</p>
          <button className="bg-white text-gray-900 font-medium px-8 py-4 hover:bg-gray-100 transition-colors">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;