import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContex/AuthContext";
import { toast } from "react-toastify";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/study.png";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  const {
    setUser,
    setLoading,
    signInWithEmailAndPassFunc,
    signInWithGoogleFunc,
    signInWithFacebookFunc,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithEmailAndPass = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassFunc(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully logged in! Explore StudyMate now 🚀");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message || "Login failed. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogleFunc()
      .then(() => {
        toast.success("Welcome");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message || "Google login failed.");
      })
      .finally(() => setLoading(false));
  };


  const handleFacebookSignIn = () => {
    signInWithFacebookFunc()
    .then(() => {
        toast.success('Welcome!')
        navigate(from , {replace:true})
    }).catch((err) => {
        toast.error(err.message||'Failed')
    })
    .finally(()=> setLoading(false))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-blue-950 flex items-center justify-center p-6 md:p-0">
      <div className="w-full md:w-9/12 grid md:grid-cols-2 gap-0 my-24 overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10">
        {/* Left: Login Form */}

        <div className="hidden md:flex bg-transparent items-center justify-center p-8 relative overflow-hidden">
          <div className="text-center text-white z-10 flex flex-col items-center max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Your Study Partner
            </h2>
            <p className="text-gray-300 mb-10 text-lg max-w-md">
              Login today! Discover your ideal study buddy, Unlock & upgrade
              your learning journey.
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

          {/* Floating subtle elements - background vibe */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Right: Dashboard Preview (Mockup) */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Welcome Back
            </h1>
          </div>

          <form onSubmit={handleSignInWithEmailAndPass} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full px-5 pt-8 pb-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                placeholder="Enter your email"
                required
              />
              <label className="absolute left-5 top-2 text-sm text-gray-400 peer-focus:text-purple-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none">
                Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-5 pt-8 pb-3 bg-transparent border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                placeholder="Enter password"
                required
              />
              <label className="absolute left-5 top-2 text-sm text-gray-400 peer-focus:text-purple-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none">
                Password
              </label>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" className="mr-2 accent-purple-500" />
                Remember me
              </label>
              <Link
                to="/forget"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn w-full pro-gradient-btn py-5">
              Log In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gray-600/40" />{" "}
                {/* thin gray line */}
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 py-1  text-sm rounded-full">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
              />
             Continue With Google
            </button>

            {/* facebook button */}

            <button
              onClick={handleFacebookSignIn}
              className="w-full my-2 flex items-center justify-center gap-3 py-4 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <FaFacebookSquare className="text-blue-600 text-2xl"/>
             Continue With Facebook
            </button>

            {/* twitter */}

            {/* <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
              />
              Twitter
            </button> */}
          </div>

          <p className="mt-8 text-center text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-purple-400 font-semibold hover:text-purple-300 transition"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
