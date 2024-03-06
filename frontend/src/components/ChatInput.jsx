import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-l-full p-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white rounded-r-full p-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
