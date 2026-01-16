import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContex/AuthContext";
import { toast } from "react-toastify";


const Register = () => {

const { user, setLoading,  logoutFunction, updateProfileFunction, registerEmailAndPassFunc, signInWithGoogleFunc} = useContext(AuthContext);
const navigate = useNavigate()
console.log(user)


const handleRegister = (e) => {
    e.preventDefault()
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/ ;
    console.log(displayName,photoURL,email,password);

    if(password.length < 6) {
        return toast.info('Your Password Must Be 6 digit')
    } else if (!passwordRegex.test(password)) {
        return toast.info("Password must contain at least one uppercase and one lowercase letter!");
    };

    registerEmailAndPassFunc(email,password)
    .then(() => {
        updateProfileFunction (displayName,photoURL) 
        .then(()=> {
               setLoading(false);
            logoutFunction()
            .then(() => { 
             toast.success('Registration successful! Please login.');
             navigate('/login');


            })
        })

    })
    .catch((err) => {
        return toast.error('Registration Failed!' ,err)
    })


}

const handleGoogleSignin = () => {
    signInWithGoogleFunc()
    .then(() => {
      setLoading(false);
        // setUser(result.user)
        toast.success('Login successful');
        navigate('/')
        

    })
}


  return (
    <div className="hero bg-linear-to-br from-slate-900 to-blue-950 min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col my-16">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold">Register Now</h1>
        </div>
        <div className="card border-2 my-3 border-white w-full max-w-sm shrink-0">
          <div className="card-body">
            <form onSubmit={handleRegister} className="">
              <fieldset className="fieldset">
                {/* name */}

                <label className="label text-[#f55a00]">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input border border-[#2563EB] text-[#f55a00] placeholder-gray-500"
                  placeholder="Name"
                />

                {/* photo  url*/}

                <label className="label text-[#f55a00]">PhotoURL</label>
                <input
                  name="photo"
                  type="text"
                  className="input border border-[#2563EB] text-[#f55a00] placeholder-gray-500"
                  placeholder="PhotoURL"
                />

                {/* email  url*/}

                <label className="label text-[#f55a00]">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input border border-[#2563EB] text-[#f55a00] placeholder-gray-500"
                  placeholder="Email"
                />

                {/* password */}

                <label className="label text-[#f55a00]">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input border border-[#2563EB] text-[#f55a00] placeholder-gray-500"
                  placeholder="Password"
                />

                {/* register button*/}

                <button className="btn my-5 w-full pro-gradient-btn">
                  Register
                </button>

                {/* google signin */}

                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="flex items-center justify-center gap-3 w-full border border-white cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-white/10 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5 "
                  />
                  Continue with Google
                </button>
                <p className="text-center text-sm text-white/80 mt-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#f55a00] hover:text-white underline"
                  >
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
