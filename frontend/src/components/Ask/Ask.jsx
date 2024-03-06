import React, { useState } from "react";

const Ask = () => {
  const [activeSession, setActiveSession] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleStartChat = (sessionId) => {
    setActiveSession(sessionId);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      handleSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleSendMessage = (sessionId, newMessage) => {
    setSessions((prevSessions) => {
      const updatedSessions = prevSessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              messages: [
                ...session.messages,
                { text: newMessage, sender: "user" },
              ],
            }
          : session
      );
      return updatedSessions;
    });
  };

  const handleSwitchSession = (sessionId) => {
    setActiveSession(sessionId);
  };

  const createNewSession = () => {
    const newSession = {
      id: sessions.length + 1,
      messages: [],
    };
    setSessions((prevSessions) => [...prevSessions, newSession]);
    setActiveSession(newSession.id);
  };

  const getCurrentSession = () => {
    return sessions.find((session) => session.id === activeSession);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-[#001e2b] p-4">
        <h2 className="text-lg text-white font-semibold mb-4">Ask Questions</h2>
        <ul>
          {sessions.map((session) => (
            <li key={session.id} className="mb-2">
              <button
                onClick={() => handleSwitchSession(session.id)}
                className="text-[#27ff82]"
              >
                Question {session.id}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={createNewSession}
          className="mt-4 bg-[#097034] text-white py-2 px-4 rounded"
        >
          Start New Question
        </button>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-x-hidden overflow-y-scroll bg-[#222c30]">
          {activeSession &&
            getCurrentSession().messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`bg-[#097034] mr-3 mt-3 rounded-lg p-3 max-w-xs ${
                    message.sender === "user" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
        </div>

        {activeSession && (
          <div className="flex-shrink-0 p-4 bg-[#222c30]">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border rounded-full py-2 px-4"
              />
              <button
                onClick={() => handleSendMessage(activeSession, newMessage)}
                className="ml-4 bg-[#097034] text-white font-semibold py-2 px-6 rounded-full"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ask;
