import React, { useState } from 'react';
import styled from 'styled-components';
import { Configuration, OpenAIApi } from 'openai';

// Initialize the OpenAI API with your API key and organization ID
const configuration = new Configuration({
    organization: 'org-wEpafSfteEnh60A3ARvZoZVL',
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);
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

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const cars = {
            car1: 'Car1 is a stylish sedan with excellent fuel efficiency.',
            car2: 'Car2 is a powerful SUV with advanced safety features.',
            car3: 'Car3 is a compact hatchback known for its agility.',
            car4: 'Car4 is a luxurious sedan with a comfortable interior.',
            car5: 'Car5 is a versatile crossover perfect for urban driving.',
          };
      
          const inputCar = inputValue.toLowerCase();
          if (cars.hasOwnProperty(inputCar)) {
            // If the input matches a car name, respond with the car's information
            const botResponse = cars[inputCar];
            setMessages([...messages, { type: 'bot', text: botResponse }]);
          } else {
            // If the input doesn't match a car name, use OpenAI to respond
            try {
              const response = await openai.completions.create({
                engine: 'text-davinci-002', // You can experiment with different engines
                prompt: inputValue,
                maxTokens: 100, // Limit the response length
                stop: ['\n'], // Stop the response after the first line to avoid long paragraphs
              });
      
              const botResponse = response.data.choices[0].text;
              setMessages([...messages, { type: 'bot', text: botResponse }]);
            } catch (error) {
              console.error('Error calling OpenAI API:', error);
              // Handle the error gracefully
            }
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
