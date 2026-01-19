// StudentHelp.jsx
import React from 'react';

const StudentHelp = () => {
  const helps = [
    {
      title: "Can't Find a Study Partner?",
      desc: "Make sure your profile is 100% complete (subjects, availability, location, mode) — we'll show you to more people and suggest better matches!",
      icon: "🔍",
      color: "from-[#f55a00] to-[#ff8c00]"
    },
    {
      title: "No One is Accepting Requests?",
      desc: "Try sending a friendly, personal message like: 'Hey! I'm in HSC 2025 batch too — wanna study Physics together? I’m free evenings.' It works wonders!",
      icon: "💬",
      color: "from-[#ff8c00] to-[#f55a00]"
    },
    {
      title: "Can't Focus While Studying Alone?",
      desc: "Find one partner → share Zoom/Google Meet link → study together. After just 7 days, it becomes a habit and way more fun!",
      icon: "⏰",
      color: "from-[#f55a00] to-[#e04e00]"
    },
    {
      title: "Feeling Shy to Speak in English?",
      desc: "Everyone here is learning just like you. Mistakes are normal — no one will laugh. Start small, practice daily, and you'll gain confidence fast!",
      icon: "🗣️",
      color: "from-[#ff8c00] to-[#f55a00]"
    },
    {
      title: "Profile Not Getting Views?",
      desc: "Add a clear profile picture, write a short bio about your goals, and update your availability regularly. Active profiles get 3× more connections!",
      icon: "👀",
      color: "from-[#f55a00] to-[#e04e00]"
    },
    {
      title: "Need Help with Anything Else?",
      desc: "Just message support or check the FAQ. We're always here to help you succeed with your studies!",
      icon: "🤝",
      color: "from-[#ff8c00] to-[#f55a00]"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-base-100 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-linear-to-b from-base-200/30 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-base-content">Student Help Center</span>
          </h2>
          <p className="mt-5 text-xl text-base-content/70 max-w-3xl mx-auto">
            Quick tips & solutions for the most common challenges students face on StudyMate
          </p>
        </div>

        {/* Help Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helps.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 h-110 shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-200/60 hover:border-[#f55a00]/30 group rounded-2xl overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-linear-to-r ${item.color} group-hover:h-3 transition-all duration-300`}></div>

              <div className="card-body p-8">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-4xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-[#f55a00] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-base-content/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg md:text-xl text-base-content/80 mb-6">
            Still stuck? Don't worry — we're here for you!
          </p>
          <button className="btn btn-lg bg-linear-to-r from-[#f55a00] to-[#ff8c00] hover:from-[#e04e00] hover:to-[#f57c00] text-white px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-none">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentHelp;