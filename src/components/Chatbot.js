import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Configuration, OpenAIApi } from 'openai';

// Initialize the OpenAI API with your API key and organization ID
const configuration = new Configuration({
    organization: 'org-wEpafSfteEnh60A3ARvZoZVL',
    apiKey: 'YourAPIKey',
});

const openai = new OpenAIApi(configuration);
const ChatbotIcon = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
width: 60px;
height: 60px;
background-color: #007bff;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 24px;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover {
    background-color: #0056b3;
  }
`;


const ChatbotContainer = styled.div`
position: fixed;
bottom: 90px;
right: 20px;
background-color: #fff;
border-radius: 10px;
padding: 10px;
width: 300px;
max-height: 400px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
z-index: 9999;
overflow-y: auto;
display: ${props => (props.expanded ? 'block' : 'none')};
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
    const [expanded, setExpanded] = useState(false);
    const chatbotRef = useRef(null);

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

    const toggleChatbot = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    useEffect(() => {
        // Close the chat window when user clicks outside
        const handleClickOutside = (event) => {
            if (
                expanded &&
                chatbotRef.current &&
                !chatbotRef.current.contains(event.target) &&
                !event.target.classList.contains('chatbot-icon')
            ) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [expanded]);

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <>
        <ChatbotIcon className="chatbot-icon" onClick={toggleChatbot}>
          💬
        </ChatbotIcon>
        <ChatbotContainer expanded={expanded} ref={chatbotRef}>
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
      </>
    );
  };
export default Chatbot;
