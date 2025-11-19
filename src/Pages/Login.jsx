import React, { useContext } from 'react';
import { Link } from 'react-router';  
import { AuthContext } from '../AuthContex/AuthContext';

const Login = () => {

     const {user , signInWithEmailAndPassFunc, signInWithGoogleFunc } = useContext(AuthContext);

     const handleSignUpWithEmailAndPass = (e) => {
         e.preventDefault() 
         const email = e.target.email?.value ;
         const password = e.target.password?.value ;
         console.log (email , password);
         
     }

    return (
        <div className="hero bg-linear-to-br from-slate-900 to-blue-950 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white">Welcome To StudyMate!</h1>
                </div>

                <div className="card border-2 border-white w-full max-w-sm shadow-2xl">
                    <div className="card-body p-8">
                        <form onSubmit={handleSignUpWithEmailAndPass} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="label text-[#f55a00] font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input border border-[#2563EB] text-[#f55a00] placeholder-gray-400 w-full"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password */}

                            <div>
                                <label className="label text-[#f55a00] font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input  border-[#2563EB] text-[#f55a00] placeholder-gray-400 w-full"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>

                            {/* Forget Password */}

                            <div className="text-right">
                                <Link to="/forget" className="text-[#f55a00] hover:text-white text-sm underline">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Login Button */}

                            <button type="submit" className="btn w-full pro-gradient-btn ">
                                Login
                            </button>

                            {/* Google Login */}

                            <button
                                type="button"
                                className="flex items-center justify-center gap-3 w-full border border-white cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-white/10 transition"
                            >
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                                Continue with Google
                            </button>

                            {/* Register Link */}
                            
                            <p className="text-center text-white/80">
                                Don’t have an account?{" "}
                                <Link to="/register" className="text-[#f55a00] font-semibold hover:text-white underline">
                                    Register Now
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;