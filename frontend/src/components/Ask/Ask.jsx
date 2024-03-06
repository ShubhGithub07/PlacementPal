import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader.jsx";
import ChatMessages from "./components/ChatMessages.jsx";
import ChatInput from "./components/ChatInput.jsx";

const Ask = () => {
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([
    "User 1",
    "User 2",
    "User 3",
  ]);

  const handleSendMessage = (newMessage) => {
    const newMessageObj = { text: newMessage, sender: "User 1" }; // For simplicity, assuming messages are sent by 'User 1'
    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200">
        {/* Participants List */}
        <ChatHeader participants={participants} />

        {/* Chat Messages */}
        <ChatMessages messages={messages} />
      </div>

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Ask;
