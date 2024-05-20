import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    const botMessage = { text: getBotResponse(input), sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotResponse = (message) => {
    // Simulate bot responses with predefined Tibetan Buddhism phrases
    const responses = ["བདེ་སྐྱིད་གནང་གོ", "བདེ་སྐྱིད་གནང་གོ", "བདེ་སྐྱིད་གནང་གོ", "བདེ་སྐྱིད་གནང་གོ", "བདེ་སྐྱིད་གནང་གོ"];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" border="1px solid #ccc" borderRadius="md" overflowY="auto" padding={4}>
          {messages.map((msg, index) => (
            <Text key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"} bg={msg.sender === "user" ? "blue.100" : "green.100"} borderRadius="md" padding={2} marginY={1}>
              {msg.text}
            </Text>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
