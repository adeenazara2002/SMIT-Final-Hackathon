import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, authFailure } from '../redux/authSlice';
import Notification from '../components/Notification';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy logic for successful login
    if (email === 'user@example.com' && password === 'password') {
      dispatch(loginSuccess({ email }));
      setNotificationMessage('Login successful!');
    } else {
      dispatch(authFailure('Invalid credentials'));
      setNotificationMessage('Login failed!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-blue-500 to-orange-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-orange-300 text-white rounded-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>

      {notificationMessage && <Notification message={notificationMessage} onClose={() => setNotificationMessage('')} />}
    </div>
  );
};

export default Login;
