import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8 ">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6 ">
          <i className="fab fa-font-awesome mr-2"></i>
          Font Awesome
        </h1>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              <i className="fas fa-eye"></i>
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center mb-6">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Option */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Signup
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition duration-300"
        >
          <i className="fab fa-google mr-2"></i>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
