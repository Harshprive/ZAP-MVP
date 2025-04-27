import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './style.css';

const MessageScreen = () => {
  const [username] = useState('JohnDoe');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hey, how are you doing today?' },
    { id: 2, sender: 'JohnDoe', text: "Hi Alice! I'm doing great, thanks for asking." },
    { id: 3, sender: 'Alice', text: 'Want to grab coffee later?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: username,
        text: newMessage,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col  min-h-[78vh] bg-white ">
      <div className="p-4 bg-gray-100 border-b text-center font-bold text-xl ">
        {username}
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-3 h-[50vh] bg-gradient-to-br from-blue-100 via-white to-purple-100 ">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex  ${msg.sender === username ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[70%]  p-2 rounded-lg ${
                msg.sender === username ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex items-center justify-around">


      <input
    type="text"
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
    placeholder="Type a message..."
    className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
  />
  <button
    onClick={handleSendMessage}
    className="bg-blue-500 ml-4 text-white p-2 rounded-full hover:bg-blue-600 transition"
  >
    <SendIcon />
  </button>
  
  </div>


    </div>
  );
};

export default MessageScreen;
