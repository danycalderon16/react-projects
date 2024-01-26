import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("/");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages(state => [newMessage, ...state]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  useEffect(() => {
    socket.on("message", reciveMessage);

    return () => {
      socket.off("message", reciveMessage);
    };
  }, []);

  const reciveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form onSubmit={handleSumbit} className="bg-zinc-900 p-10">
        <h1 className="text-2xl font-bold my-2">Chat react</h1>
        <input
          type="text"
          placeholder="write yout message..."
          className="border-2 border-zinc-500 p-2 w-full text-black"
          onChange={(e) => setMessage(e.target.value)}
        />
        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
                }`}
            >
              <b>{message.from}</b>:{message.body}
            </li>
          ))}
        </ul>
          </form>
    </div>
  );
}

export default App;
