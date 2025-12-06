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
    <section id="integrations" className="py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm text-gray-700">Integrations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Connect With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use every day
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 relative rounded-xl"
            >
              {/* Coming Soon Badge */}
              <div className="absolute -top-3 -right-3 bg-[#A4D23E] text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md z-10">
                Coming Soon to Pro
              </div>
              
              <div className={`w-20 h-20 rounded-lg ${integration.bgColor} mb-4 mx-auto transition-transform flex items-center justify-center p-4 shadow-md`}>
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-center font-semibold text-gray-900">{integration.name}</p>
              <div className="mt-2 flex items-center justify-center opacity-50">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-600 ml-1">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Integration Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl hover:border-[#14B8A6] hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-[#14B8A6] mb-2">8</div>
            <div className="text-sm text-gray-600">Active Integrations</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl hover:border-[#14B8A6] hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-[#14B8A6] mb-2">12K+</div>
            <div className="text-sm text-gray-600">Synced Events</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl hover:border-[#14B8A6] hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-[#14B8A6] mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600">And 50+ more integrations coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;