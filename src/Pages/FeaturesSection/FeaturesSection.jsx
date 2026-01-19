// FeaturesSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import AOS styles!

// Your features array (same as before)
const features = [
  {
    title: "Smart Partner Matching",
    description: "Find your perfect study buddy instantly based on subjects, learning style, availability, location & experience level.",
    icon: "🔍",
    gradient: "from-[#f55a00] to-[#ff8c00]"
  },
  {
    title: "Real-time Connections",
    description: "Send partner requests, track your connections, and grow your study circle with just one click.",
    icon: "🤝",
    gradient: "from-[#ff8c00] to-[#f55a00]"
  },
  {
    title: "Personalized Profiles",
    description: "Showcase your skills, preferred study mode, timing, and goals — make yourself discoverable to the right people.",
    icon: "👤",
    gradient: "from-[#f55a00] to-[#e04e00]"
  },
  {
    title: "Dark/Light Mode",
    description: "Study comfortably day or night with automatic theme switching that respects your system preference.",
    icon: "🌗",
    gradient: "from-[#ff8c00] to-[#f55a00]"
  },
  {
    title: "Progress Tracking",
    description: "Watch your partner count grow and see how your study network expands over time.",
    icon: "📈",
    gradient: "from-[#f55a00] to-[#ff8c00]"
  },
  {
    title: "Secure & Private",
    description: "Your data stays protected. Control who sees your profile and when. Built with modern authentication.",
    icon: "🔒",
    gradient: "from-[#e04e00] to-[#f55a00]"
  }
];

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,        // smooth & fast enough
      easing: 'ease-out',   // natural feel
      once: true,           // animate only once (looks cleaner)
      offset: 120,          // start animation a bit earlier
      // mirror: false,     // no reverse animation on scroll up (optional)
    });
  }, []);

  return (
    <section className="py-20 md:py-24 bg-base-200/50 relative overflow-hidden min-h-screen">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-base-200/30 to-transparent pointer-events-none"></div>

      <div className="container px-6 mx-auto relative z-10">
        {/* Section Header - also with AOS */}
        <div className="text-center mb-16 md:mb-16" data-aos="fade-down" data-aos-duration="900">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-base-content">Everything you need to </span>
            <span className="bg-linear-to-r from-[#f55a00] to-[#ff8c00] bg-clip-text text-transparent">
              level up your studies
            </span>
          </h2>
          <p className="mt-6 text-xl text-base-content/70 max-w-3xl mx-auto">
            Powerful features designed to help you find, connect, and grow with the right study partners — faster and smarter.
          </p>
        </div>

        {/* Features Grid with staggered AOS animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"                    
              data-aos-delay={`${index * 100}`}     
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
              className="group relative h-84 bg-base-100 rounded-md shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-base-200/60 hover:border-[#f55a00]/30 cursor-pointer"
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-linear-to-r ${feature.gradient} transition-all duration-200 group-hover:h-4`}></div>

              <div className="p-8 md:p-10">
                {/* Icon with extra hover lift */}
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center text-3xl text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-[#f55a00] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle hover overlay (your original) */}
              <div className="absolute inset-0 bg-linear-to-br from-[#f55a00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with light animation */}
        <div className="text-center mt-16 md:mt-24" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg md:text-xl text-base-content/80 italic">
            Ready to transform the way you study?  
            <span className="text-[#f55a00] font-semibold not-italic"> Join thousands of students already leveling up together.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;