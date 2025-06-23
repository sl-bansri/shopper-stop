import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormData } from "./typing";
import { toastNotification } from "../../../utils/toastNotification";
import InputField from "../../InputField";

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toastNotification({
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
        type: "error",
      });
      return;
    }

    if (password !== confirmPassword) {
      toastNotification({ message: "Password not matched", type: "error" });
      return;
    }

    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const userExists = users.find((u: any) => u.email === email);

    if (userExists) {
      toastNotification({
        message: "User with this email already exists!",
        type: "error",
      });
      return;
    }

    const { confirmPassword: string, ...userData } = formData;
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="min-h-screen max-w-full bg-[black] flex">
      <div className="container mx-auto px-4 ">
        <div className="max-w-md mx-auto">
          <div className="bg-[#f7f1f2] rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-[black] mb-8">
              Create Account
            </h2>
            <form onSubmit={handleSignUp} className="space-y-6">
              <InputField
              variant="secondary"
                label = "Full Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              <InputField
              variant="secondary"
                label ='Email Address'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              <InputField
              label="Password"
                  variant="secondary"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  minLength={8}
                  
                />
              <InputField
              variant="secondary"
                label="Confirm Password"         
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  minLength={8}
                />
              <button
                type="submit"
                className="w-full bg-[black] text-white py-1 rounded-lg hover:bg-[#68666767] transition-colors font-medium text-lg"
              >
                Create Account
              </button>
              <div className="text-center mt-4">
                Already have an account?
                <span
                  className="text-[black] underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/src/assets/Images/loginphoto.png"
          className="hidden md:block h-full lg:w-[1200px] w-[1200px] object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
