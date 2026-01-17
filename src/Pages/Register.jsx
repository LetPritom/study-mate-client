import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router"; // useNavigate-এর জন্য -dom add করো
import { AuthContext } from "../AuthContex/AuthContext";
import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../assets/study.png";

const Register = () => {
  const {
    setLoading,
    updateProfileFunction,
    registerEmailAndPassFunc,
    signInWithGoogleFunc,
    // signInWithFacebookFunc যদি add করে থাকিস, import করো
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    //setValue,  demo fill-এর জন্য
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const { name, photoURL, email, password } = data;

    try {
      // Register with email/password
     await registerEmailAndPassFunc(email, password);

      // Update profile (name + photo)
      await updateProfileFunction(name, photoURL);


      toast.success("Registration successful! Please login.");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Registration Failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    setLoading(true);
    try {
      await signInWithGoogleFunc();
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Google login failed.");
    } finally {
      setLoading(false);
    }
  };

  // Demo User Auto Fill + Submit
  
  // const handleDemoUser = () => {
  //   // Predefined demo data
  //   const demoData = {
  //     name: "Demo Student",
  //     photoURL: "https://media.gettyimages.com/id/1997233757/photo/user-icon-in-flat-style-group-of-erson-icon-user-icon-for-web-site-user-icon-vector.jpg?s=2048x2048&w=gi&k=20&c=FQrVxjgWNlalS0YnaWv3_vLlq3q6F1XtuRfqHJ6X1lw=", // তোর preferred avatar URL
  //     email: "demo@studymate.com",
  //     password: "Demo@123", // strong password
  //   };

  //   // Auto fill form fields
  //   setValue("name", demoData.name);
  //   setValue("photoURL", demoData.photoURL);
  //   setValue("email", demoData.email);
  //   setValue("password", demoData.password);

  //   // Auto submit form
  //   handleSubmit(onSubmit)(); // This triggers the form submission
  // };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-blue-950 flex items-center justify-center p-6 md:p-0">
      <div className="w-full md:w-9/12 grid md:grid-cols-2 gap-0 my-24 overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10">
        {/* Left: Illustration Section */}
        <div className="hidden md:flex bg-transparent items-center justify-center p-8 relative overflow-hidden">
          <div className="text-center text-white z-10 flex flex-col items-center max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Study Partner</h2>
            <p className="text-gray-300 mb-10 text-lg max-w-md">
              Login today! Discover your ideal study buddy, Unlock & upgrade your learning journey.
            </p>

            <div className="search-icon mb-10">
              <CiSearch className="text-8xl text-purple-400 animate-pulse drop-shadow-lg" />
            </div>

            <div className="relative w-full max-w-sm mx-auto">
              <img
                src={logo}
                alt="Study Partner Illustration"
                className="w-full h-auto object-contain rounded-xl opacity-70 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              />
            </div>
          </div>

          {/* Floating blobs */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Right: Register Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Sign Up for StudyMate</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="peer w-full px-5 pt-8 pb-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                  placeholder="Name"
                />
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-focus:text-purple-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none">
                  Name
                </label>
              </div>
              {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>}
            </div>

            {/* Photo URL */}
            <div>
              <div className="relative">
                <input
                  type="url"
                  {...register("photoURL", { required: "Photo URL is required" })}
                  className="peer w-full px-5 pt-8 pb-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                  placeholder="Photo URL"
                />
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-focus:text-purple-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none">
                  Photo URL
                </label>
              </div>
              {errors.photoURL && <p className="mt-1 text-red-400 text-sm">{errors.photoURL.message}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="peer w-full px-5 pt-8 pb-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                  placeholder="Enter your email"
                />
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-focus:text-purple-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none">
                  Email
                </label>
              </div>
              {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "At least 6 characters" },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                      message: "Must contain uppercase & lowercase",
                    },
                  })}
                  className="peer w-full px-5 pt-8 pb-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                  placeholder="Enter password"
                />
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-focus:text-purple-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none">
                  Password
                </label>
              </div>
              {errors.password && <p className="mt-1 text-red-400 text-sm">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-full pro-gradient-btn py-5"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Demo User Button */}
            {/* <button
              type="button"
              onClick={handleDemoUser}
              disabled={isSubmitting}
              className="w-full py-5 bg-linear-to-r from-green-600 to-teal-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50"
            >
              Use Demo Account
            </button> */}
          </form>

          {/*other user which is google and facebook */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gray-600/40" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 py-1 text-white text-sm rounded-full bg-linear-to-br from-indigo-950 via-purple-950 to-blue-950">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
            Continue with Google
          </button>

          {/* Facebook Button (fix onClick) */}
          <button
            onClick={() => toast.info("Facebook login coming soon!")} // replace with real handler
            className="w-full my-2 flex items-center justify-center gap-3 py-4 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            <FaFacebookSquare className="text-blue-600 text-2xl" />
            Continue with Facebook
          </button>

          <p className="mt-8 text-center text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 font-semibold hover:text-purple-300 transition">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;