import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CheckOutProps } from "./typing";
import { getCart, getCartKeyForUser } from "../../utils/cart";
import { toastNotification } from "../../utils/toastNotification";
import InputField from "../../components/InputField";

const CheckOut = ({ totalPrice }: CheckOutProps) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "cash",
    specialInstructions: "",
    YourOrders: getCart().map((item) => item.name),
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("authEmail");
    if (!userEmail) {
      toastNotification({ message: "User Not found Login first", type: "error" });
      return;
    }
    const checkoutDataKey = `checkOut_${userEmail}`;
    const existing = localStorage.getItem(checkoutDataKey);

    const userData = existing ? JSON.parse(existing) : [];

    const order = {
      ...formData,
      totalPrice,
      date: new Date(),
    };

    localStorage.setItem(checkoutDataKey, JSON.stringify([...userData, order]));
    toastNotification({
      message: "Congratulations! Order Placed successfully",
      type: "success",
    });

    navigate("/");
    const email = getCartKeyForUser();
    localStorage.setItem(`${email}`, JSON.stringify([]));
  };

  return (
    <div className="min-h-screen w-full  bg-[#ffffff]">
      <div className="container flex justify-center ">
        <div className="max-w-2xl  w-full bg-[#ffffff]  rounded-md border-2 ">
          <h2 className="text-2xl font-medium text-[#000000] mb-6 text-center pt-2 italic font-serif">
            CHECKOUT
          </h2>

          <form className="space-y-6 p-3 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <InputField
                label="Full Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                   
                  
                />
              

              <InputField
                label= "Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
          
                />

              <InputField 
                label="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                />

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-[#000000] mb-1"
                >
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <InputField
                label ='City'
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              <InputField
                label= 'ZIP Code'              
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  
                />
             
            </div>

            <div>
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium text-[#000000] mb-1"
              >
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="specialInstructions"
                className="block text-sm font-medium text-[#000000] mb-1"
              >
                Special Instructions (Optional)
              </label>
              <textarea
                id="specialInstructions"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows={3}
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                placeholder="Any special instructions for delivery?"
              ></textarea>
            </div>

            <div className="border-t pt-4">
              
              <div className="flex justify-between text-[#000000] text-lg font-medium">
                <span className="font-bold">Total:</span>
                <span>₹ {totalPrice}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#a8a098] text-white py-3 rounded-md hover:bg-[#000000] transition-colors font-medium"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
