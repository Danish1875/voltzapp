import React, { useState } from 'react';
import styled from 'styled-components';


const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  max-height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  overflow-y: auto; 
`;

const ChatHeader = styled.div`
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
`;

const ChatMessage = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  border-top: 1px solid #ccc;
  outline: none;
`;

const ClearButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        // Your logic to handle the user's message and provide responses.
        // Here, you can check if the input matches any of the car names, and if it does, provide the specs for that car.
        // Otherwise, respond with a generic message like "Sorry, I don't have information about that car."

        // Example logic:
        const cars = ['car1', 'car2', 'car3', 'car4', 'car5'];
        if (cars.includes(inputValue.toLowerCase())) {
            // Respond with car specs (replace this with the actual specs for each car)
            setMessages([...messages, { type: 'bot', text: `Here are the specs for ${inputValue}: ...` }]);
        } else {
            // Respond with a generic message
            setMessages([...messages, { type: 'bot', text: "Sorry, I don't have information about that car." }]);
        }

        setInputValue('');
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <ChatbotContainer>
            <ChatHeader>Chatbot</ChatHeader>
            {messages.map((message, index) => (
                <ChatMessage key={index} className={message.type}>
                    {message.text}
                </ChatMessage>
            ))}
            <ChatInput
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(event) => event.key === 'Enter' && handleSendMessage()}
            />
            <ClearButton onClick={handleClearChat}>Clear</ClearButton>
        </ChatbotContainer>
    );
};

export default Chatbot;
