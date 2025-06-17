import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormData } from './typing';
import { toast } from 'react-toastify';



const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password not matched",{
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
      return;
    }

  
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const userExists = users.find((u: any) => u.email === formData.email);
    if (userExists) {
toast.error("User with this email already exists!",{
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });      return;
    }

  
    const { confirmPassword, ...userData } = formData;
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[black] flex">
      <div className="container mx-auto px-4 ">
        <div className="max-w-md mx-auto">
          <div className="bg-[#f7f1f2] rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-[black] mb-8">Create Account</h2>
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[black] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3   bg-transparent border-b-2 border-b-[#f060b9] text-[black] focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[black] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3  bg-transparent border-b-2 border-b-[#f060b9] text-[black] focus:outline-none"
                  placeholder="Create a password"
                  minLength={8}
                  required
                />
              
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-[black] font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3  bg-transparent border-b-2 border-b-[#f060b9] text-[black] focus:outline-none"
                  placeholder="Confirm your password"
                  minLength={8}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[black] text-white py-1 rounded-lg hover:bg-[#68666767] transition-colors font-medium text-lg"
              >
                Create Account
              </button>
              <div className="text-center mt-4">
                Already have an account?{' '}
                <span
                  className="text-[black] underline cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img src='/src/assets/Images/loginphoto.png' className='h-full w-[1200px] object-cover'/>
      </div>
    </div>
  );
};

export default SignUp;