import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-scroll p-4">
      {messages.map((message, index) => (
        <div key={index} className={`mb-4 ${message.sender === 'User 1' ? 'text-right' : 'text-left'}`}>
          <span className="bg-blue-500 text-white p-2 rounded-lg">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
