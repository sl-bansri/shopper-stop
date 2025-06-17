import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginForm } from "./typing";
import { toast } from "react-toastify";


const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const user = users.find((u: any) => u.email === formData.email);

  
    if (!user) {
      setError("User not found");
      setSuccess("");
      return;
    }

    if (user.password !== formData.password) {
      setError("Invalid password");
      setSuccess("");
      return;
    }

    // setError("");
    toast.success("You are logged in successfully! Welcome to shopper Stop",{
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
    
    localStorage.setItem("authEmail", formData.email);
    localStorage.removeItem("isLoggedOut");

      navigate("/");

  };

  return (
   
    
      <div className="  min-h-screen bg-[black] flex">
          <div className="container mx-auto px-4 ">
            <div  className="max-w-md mx-auto">
                <div className=" bg-[#f7f1f2] rounded-lg shadow-lg p-8 ">
            <h2 className="text-3xl font-bold text-center text-[black] mb-5">
              Login
            </h2>

            {success && (
              <p className="text-[#2fdd2f] mb-4 text-xl text-center">{success}</p>
            )}

            <form onSubmit={handleLogin} className="space-y-6">

              <div>
                <label htmlFor="email" className="block text-[black] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3  bg-transparent border-b-2 border-b-[#f060b9] text-[black] focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[black] font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full p-3  bg-transparent border-b-2 border-b-[#f060b9] text-[black] focus:outline-none"
                  placeholder="Enter Password"
                  required
                />
              </div>
              {error && (
              <p className="text-[#dd2f38] mb-4 text-xl text-center">{error}</p>
                )}
 
              <button
                type="submit"
                disabled={!!success}
                className={`w-full text-black  py-1 rounded-lg transition-colors font-medium text-lg ${
                  success
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[black] text-white hover:bg-[#cac7ca8e]"
                }`}
              >
                {success ? "Redirecting..." : "Login"}
              </button>
            </form>

            <div className="text-center text-black mt-4">
              Don't have an account?{" "}
              <span
                className="text-[black] underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </span>
            </div>

            <div className="w-full text-center text-black mt-2 cursor-pointer">
              <span
                className="text-center text-black mt-4 w-full  border-b-2 border-b-black hover:border-b-[pink]"
                onClick={() => navigate("/")}
              >
                Back to home
              </span>
            </div>
          </div>
            </div>
          </div>
        <div>
            <img src='/src/assets/Images/loginphoto.png' className='w-[1200px] h-full object-cover'/>
        </div>
        </div>
   
  );
};

export default Login;
