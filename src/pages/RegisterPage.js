import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage  = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('Password:', password);
    // On successful sign-up, navigate to the desired page
    navigate('/login'); // Example route after sign-up
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">certCrypt</h1>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-md p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Create an account</h2>
          <p className="mb-6 text-gray-600">Please fill in the details to sign up</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Mobile Field */}
            <div>
              <label className="block text-lg font-semibold mb-2">Mobile No.</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-lg font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-center">
            Already have an account?{' '}
            <a href="/LoginPage" className="text-black font-bold">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
