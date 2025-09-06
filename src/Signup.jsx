import React, { useState } from "react";

function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signing up with:", { fullName, email, password });
    alert(`Account created for ${fullName}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-300">Join us and start your journey</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-purple-400 hover:text-purple-300"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
