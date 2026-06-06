import React from 'react';

function Premium() {
    const plans = [
        {
            name: "Basic",
            price: "$9.99/month",
            features: [
                "10 GB Storage",
                "5 Todo Lists",
                "Basic Support",
                "Ad-free Experience"
            ],
            color: "bg-emerald-500",
            hoverColor: "hover:border-emerald-500",
            textColor: "text-emerald-500",
            recommended: false
        },
        {
            name: "Pro",
            price: "$19.99/month",
            features: [
                "50 GB Storage",
                "Unlimited Lists",
                "Priority Support",
                "Ad-free Experience",
                "Advanced Statistics",
                "Custom Themes",
                "Cloud Backup"
            ],
            color: "bg-blue-500",
            hoverColor: "hover:border-blue-500",
            textColor: "text-blue-500",
            recommended: true
        },
        {
            name: "Enterprise",
            price: "$39.99/month",
            features: [
                "250 GB Storage",
                "Unlimited Lists",
                "24/7 Priority Support",
                "Ad-free Experience",
                "Advanced Analytics",
                "Custom Themes",
                "API Access",
                "Team Management",
                "Custom Integrations"
            ],
            color: "bg-purple-500",
            hoverColor: "hover:border-purple-500",
            textColor: "text-purple-500",
            recommended: false
        }
    ];

    return (
        <section id='premium' className='py-16 px-8 max-w-7xl mx-auto rounded-2xl' style={{ backgroundColor: 'var(--background-secondary)' }}>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Choose Your Plan</h1>
                <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Select the perfect plan for your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 items-center">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative rounded-2xl p-8 shadow-md transition-all duration-300 ease-in-out border-2 border-transparent ${plan.hoverColor} hover:-translate-y-2 hover:shadow-lg flex flex-col h-full
                            ${plan.recommended ? 'scale-105 md:scale-110 z-10 border-blue-500' : ''}`}
                        style={{ backgroundColor: 'var(--background-primary)' }}
                    >
                        {plan.recommended && (
                            <div className={`absolute -top-3 right-5 ${plan.color} text-white px-6 py-2 rounded-full text-sm font-bold shadow-sm`}>
                                Most Popular
                            </div>
                        )}
                        <h2 className={`text-2xl font-bold mb-4 ${plan.textColor}`}>{plan.name}</h2>
                        <div className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>{plan.price}</div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center text-lg" style={{ color: 'var(--text-secondary)' }}>
                                    <span className={`mr-3 ${plan.textColor} font-bold`}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-4 px-6 rounded-lg ${plan.color} text-white text-lg font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-1`}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Premium;