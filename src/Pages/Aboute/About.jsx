import React from "react";

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-base-100 to-base-200">
      <div className="w-10/12 mx-auto px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-base-content">Discover the Power of </span>
            <span className="bg-linear-to-r from-[#f55a00] to-[#ff8c00] bg-clip-text text-transparent">
              Collaborative Learning
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#f55a00] to-[#ff8c00] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-base-content/80">
              StudyMate is more than just a platform — it's a movement to make
              learning together more meaningful, enjoyable, and effective.
            </p>

            <p className="text-base-content/70 leading-relaxed">
              We believe that the right study partner can transform confusion
              into clarity, procrastination into progress, and solitary struggle
              into shared success. That's why we created a space where students
              from all backgrounds can find someone who matches their vibe,
              schedule, and learning goals.
            </p>

            <div className="pt-4">
              <p className="font-medium text-[#f55a00] text-lg">
                Because great things happen when minds come together.
              </p>
            </div>
          </div>

          {/* Right - Visual / Quote Style Block */}
          <div className="relative">
            <div className="card bg-linear-to-br from-[#f55a00]/10 to-[#ff8c00]/5 border border-[#f55a00]/20 shadow-2xl rounded-2xl p-10 backdrop-blur-sm">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#f55a00]/10 rounded-full blur-3xl"></div>

              <blockquote className="text-2xl md:text-3xl font-medium italic text-base-content leading-relaxed">
                "Alone we can do so little; together we can do so much."
              </blockquote>

              <p className="mt-6 text-right text-base-content/60 font-medium">
                — Helen Keller
              </p>
            </div>
          </div>
        </div>

        {/* Small mission statement at bottom */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold text-base-content/90 max-w-3xl mx-auto">
            StudyMate — Where every connection sparks progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
