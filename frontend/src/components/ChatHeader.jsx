import React from 'react';

const ChatHeader = ({ participants }) => {
  return (
    <div className="bg-gray-300 p-3 border-b">
      <h2 className="text-lg font-semibold">Group Chat</h2>
      <p>Participants: {participants.join(', ')}</p>
    </div>
  );
};

export default ChatHeader;
