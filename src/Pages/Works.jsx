import React from "react";

const Works = () => {
  return (
    <div>
      <section className="py-20 bg-gray-800">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16">
            3 simple steps theke tor perfect study partner ready!
          </p>

          <div className="grid md:grid-cols-3 gap-8 w-full mx-auto justify-items-center">
            {/* Step 1 */}
            <div className="relative group max-w-80">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-orange-200 dark:border-orange-900">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#f55a00] rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Create Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Login required to create partner profile
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group max-w-80">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-orange-200 dark:border-orange-900">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#f55a00] rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Find & Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Search and connect with study partners just like you!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group max-w-80">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-orange-200 dark:border-orange-900">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#f55a00] rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Start Studying
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chat, make study plans, and start studying together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
