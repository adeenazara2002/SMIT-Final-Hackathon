import React, { useState } from 'react';
import TaskBoard from './components/TaskBoard/TaskBoard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [activePage, setActivePage] = useState('taskboard');

  const renderPage = () => {
    switch (activePage) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return <TaskBoard />;
    }
  };

  return (
    <div className="App min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Mini Task Tracker
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setActivePage('login')}
            className="px-4 py-2 rounded-md bg-white text-purple-600 font-semibold hover:bg-gray-100 transition"
          >
            Login
          </button>
          <button
            onClick={() => setActivePage('register')}
            className="px-4 py-2 rounded-md bg-white text-purple-600 font-semibold hover:bg-gray-100 transition"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-1">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
