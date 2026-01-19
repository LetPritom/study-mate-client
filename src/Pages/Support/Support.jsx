// Support.jsx
import React, { useState } from 'react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send to backend
    console.log('Support request:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds (demo)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-base-200/30 my-16 to-base-100 py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How can we <span className="bg-linear-to-r from-[#f55a00] to-[#ff8c00] bg-clip-text text-transparent">help you</span> today?
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Our support team is here for you. Whether you have questions about finding study partners, profile issues, or suggestions — we're listening!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Information & FAQ */}
          <div className="space-y-10">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200/60">
                <div className="card-body items-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-[#f55a00]/10 flex items-center justify-center text-4xl mb-4">
                    ✉️
                  </div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-base-content/70">support@studymate.com</p>
                  <p className="text-sm text-base-content/60 mt-2">Usually reply within 24 hours</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200/60">
                <div className="card-body items-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-[#ff8c00]/10 flex items-center justify-center text-4xl mb-4">
                    ⏰
                  </div>
                  <h3 className="text-xl font-bold">Support Hours</h3>
                  <p className="text-base-content/70">9 AM – 10 PM</p>
                  <p className="text-sm text-base-content/60 mt-2">Every day (Bangladesh Time)</p>
                </div>
              </div>
            </div>

            {/* FAQ Snippet */}
            <div className="card bg-base-100 shadow-xl border border-base-200/60">
              <div className="card-body p-8">
                <h2 className="card-title text-2xl mb-6 flex items-center gap-3">
                  <span className="text-[#f55a00] text-3xl">❓</span> Common Questions
                </h2>
                
                <div className="space-y-4">
                  {[
                    "How do I find the right study partner?",
                    "Can I change my availability later?",
                    "What if someone is not responding?"
                  ].map((q, i) => (
                    <div key={i} className="collapse collapse-plus bg-base-200 rounded-xl">
                      <input type="radio" name="faq" />
                      <div className="collapse-title text-base font-medium">
                        {q}
                      </div>
                      <div className="collapse-content">
                        <p className="text-base-content/80">
                          {i === 0 && "Use the 'Find Partners' page with filters for subject, mode, time, and location. The algorithm shows the best matches first!"}
                          {i === 1 && "Yes! Go to 'My Connections' → your profile → edit anytime. Changes reflect immediately."}
                          {i === 2 && "Send a friendly reminder or connect with another partner. We monitor inactive profiles."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="card bg-base-100 shadow-2xl border border-base-200/60 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r from-[#f55a00] to-[#ff8c00]`}></div>
            
            <div className="card-body p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#f55a00]">Thank you!</h3>
                  <p className="text-lg text-base-content/80">
                    Your message has been received.<br />
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">
                        <span className="label-text font-medium">Your Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text font-medium">Email Address</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Issue with partner request"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Your Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your issue or question in detail..."
                      className="textarea textarea-bordered h-36 w-full"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-full bg-gradient-to-r from-[#f55a00] to-[#ff8c00] hover:from-[#e04e00] hover:to-[#f57c00] text-white border-none"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 text-base-content/60">
          <p>StudyMate Team • Jessore, Bangladesh • 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Support;