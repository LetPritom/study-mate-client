import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 w-11/12  mx-auto my-10">
      <div className="">
        <h1 className="text-4xl font-bold text-[#f55a00] mb-8 text-center">Privacy Policy</h1>
        
        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">Introduction</h2>
            <p>
              At StudyMate, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">Information We Collect</h2>
            <ul className="list-disc pl-6">
              <li>Personal Information: Name, email, profile photo, and other details you provide during registration or profile creation.</li>
              <li>Usage Data: Information on how you interact with the platform, such as search queries, partner requests, and connections.</li>
              <li>Technical Data: IP address, browser type, and device information for security and analytics.</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">How We Use Your Information</h2>
            <p>
              We use your data to provide and improve our services, such as matching you with study partners, processing requests, and personalizing your experience. We may also use it for communication, security, and compliance purposes.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">Sharing Your Information</h2>
            <p>
              We do not sell your personal data. We may share it with trusted service providers for hosting, analytics, or authentication (e.g., Firebase, Google). We may also disclose data if required by law.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">Security</h2>
            <p>
              We implement reasonable security measures to protect your data, but no system is completely secure. Please use strong passwords and report any suspicious activity.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">Your Rights</h2>
            <p>
              You can access, update, or delete your information through your profile. Contact us for any privacy concerns.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#f55a00]">Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Continued use of the platform constitutes acceptance of changes.
            </p>
          </div>
        </div>

        <p className="text-center text-sm mt-8">
          Last updated: January 18, 2026. For questions, contact letpritom.skr@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;