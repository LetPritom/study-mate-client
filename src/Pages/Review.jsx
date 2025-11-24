import React from "react";

const Review = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Students Are Loving StudyMate
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Review 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src={'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt="Rahim"
                  className="w-20 h-20 object-cover rounded-full ring-4 ring-[#f55a00]/20"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">Rahim Khan</h4>
                  <p className="text-sm text-gray-300">HSC 2025</p>
                </div>
              </div>
              <p className="text-gray-300">
                I never understood Physics at all. Thanks to StudyMate, I found an amazing study buddy — now I'm scoring 90+ in mock tests!
              </p>
              <div className="flex mt-4 text-[#f55a00]">★★★★★</div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border rder-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src={'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt="Ayesha"
                  className="w-20 h-20 object-cover rounded-full ring-4 ring-[#f55a00]/20"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">Ayesha Siddika</h4>
                  <p className="text-sm text-gray-300">Class 10</p>
                </div>
              </div>
              <p className="text-gray-300">
                StudyMate helped me so much with English speaking. I practice daily now — and I can finally speak with confidence!
              </p>
              <div className="flex mt-4 text-[#f55a00]">★★★★★</div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src={'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}
                  alt="Sabbir"
                  className="w-20 h-20 object-cover rounded-full ring-4 ring-[#f55a00]/20"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">Sabbir Ahmed</h4>
                  <p className="text-sm text-gray-300">University Admission</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                Solving one Math problem used to take me 2 days. Now it takes just 10 minutes — all thanks to StudyMate!
              </p>
              <div className="flex mt-4 text-[#f55a00]">★★★★★</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
