import React, { useEffect, useState } from 'react';

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        onClose(); 
      }, 3000); 
    }
  }, [message, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg">
      {message}
    </div>
  );
};

export default Notification;
