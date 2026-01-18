// Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 my-10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64  rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96  rounded-full blur-3xl"></div>

      <div className="container mx-auto lg:px-8 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          
          <p className="text-xl md:text-2xl text-base-content/80 mb-10 max-w-2xl mx-auto">
            Get exclusive study tips, new partner matching features, and early access updates straight to your inbox.
          </p>

          {/* Form */}
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col bg-[#ff8c00]/30 p-5 rounded-full sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-lg flex-1 bg-base-200 border border-base-300 focus:border-[#f55a00] focus:ring-[#f55a00]/30 rounded-full px-8"
                required
              />
              
              <button
                type="submit"
                className="btn btn-lg bg-linear-to-r from-[#f55a00] to-[#ff8c00] hover:from-[#e04e00] hover:to-[#f57c00] text-white font-bold px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-none"
              >
                Subscribe Now
              </button>
            </div>
            
            <p className="text-sm text-base-content/60 mt-6">
              We respect your privacy. Unsubscribe anytime with one click.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;