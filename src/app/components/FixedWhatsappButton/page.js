"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Slide from '@mui/material/Slide';

import Image from 'next/image';
import whatsappIcon from "../../../assets/pngwing.com.png";
import deepanLogo from "../../../assets/EditedLogo-removebg-preview.png";
import agentPhoto from "../../../assets/robot-or-chatbot-logo-template-chat-bot-icon-vector-35064959.jpg";

import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const chatBgPattern = "https://i.pinimg.com/originals/a0/a3/1b/a0a31b3293233f274a445439443e4939.jpg";

export default function FixedWhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  // Conversation stores objects with { sender: "Helpdesk" | "User", text: string }
  const [conversation, setConversation] = useState([]);
  const [stage, setStage] = useState("initial"); // initial, awaitingEmail, awaitingPhone

  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  // State for validation errors and helper texts
  const [inputError, setInputError] = useState(false);
  const [inputHelperText, setInputHelperText] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    // Reset chat state when opening or closing
    if (!isOpen) {
      setConversation([
        {
          sender: "Helpdesk",
          text: "Name",
        },
      ]);
      setStage("initial");
      setMessage("");
      setUserEmail("");
      setUserPhone("");
      setInputError(false);
      setInputHelperText("");
    }
  };

  // Helper function for email validation
  const isValidEmail = (email) => {
    // Basic regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Helper function for Indian phone number validation
  const isValidIndianPhoneNumber = (phone) => {
    // Regular expression for Indian mobile numbers (10 digits, starts with 6, 7, 8, or 9)
    // and allowing for optional +91 or 0 prefix
    const indianPhoneRegex = /^(?:(?:\+|0)?91(\s*-?\s*)?)?[6789]\d{9}$/;
    return indianPhoneRegex.test(phone);
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      // If message is empty, potentially show error or just do nothing
      // For now, we'll just return to prevent empty messages
      return;
    }

    // Add user's message to conversation immediately
    setConversation((prevConv) => [...prevConv, { sender: 'User', text: message }]);

    // Clear any previous error messages before processing new input
    setInputError(false);
    setInputHelperText("");

    if (stage === "initial") {
      // User has typed their initial query
      setStage("awaitingEmail");
      setConversation((prevConv) => [
        ...prevConv,
        {
          sender: "Helpdesk",
          text: "Thank you for your message! Could you please provide your email address?",
        },
      ]);
    } else if (stage === "awaitingEmail") {
      if (!isValidEmail(message)) {
        setInputError(true);
        setInputHelperText("");
        // Do not proceed or clear message if invalid
        return;
      }
      setUserEmail(message);
      setStage("awaitingPhone");
      setConversation((prevConv) => [
        ...prevConv,
        {
          sender: "Helpdesk",
          text: "Great! Now, please provide your 10-digit WhatsApp number.",
        },
      ]);
    } else if (stage === "awaitingPhone") {
      if (!isValidIndianPhoneNumber(message)) {
        setInputError(true);
        setInputHelperText("");
        // Do not proceed or clear message if invalid
        return;
      }
      setUserPhone(message);

      // Now prepare and open WhatsApp link
      const deepanIndiaPhoneNumber = "9884411611"; // Deepan India's WhatsApp number
      // Find the user's initial query from the conversation history
      const initialUserQuery = conversation.find(msg => msg.sender === 'User')?.text || "No initial query provided.";

      const fullMessage =
        `New Inquiry from Website Chat:\n` +
        `Initial Query: ${initialUserQuery}\n` +
        `User Email: ${userEmail}\n` + // Use the stored email
        `User WhatsApp Number: ${message}`; // Use the current valid phone message

      const whatsappUrl = `https://wa.me/${deepanIndiaPhoneNumber}?text=${encodeURIComponent(fullMessage)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Reset chat after opening WhatsApp
      setConversation([]); // Clear conversation
      setStage("initial"); // Reset stage
      setUserEmail(""); // Clear stored email
      setUserPhone(""); // Clear stored phone
      setIsOpen(false); // Close the chat widget
    }

    // Always clear the input field after a successful message or stage progression
    setMessage("");
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 106, sm: 124 },
        right: { xs: 26, sm: 24 },
        zIndex: 100,
      }}
    >
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper
          elevation={8}
          sx={{
            width: { xs: '90vw', sm: 350 },
            maxWidth: 350,
            height: { xs: '70vh', sm: 500 },
            maxHeight: 500,
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#49326b',
              color: 'white',
              padding: { xs: '12px', sm: '16px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            <Avatar sx={{ bgcolor: 'white', width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 } }}>
              <Image src={deepanLogo} alt="Deepan India Logo" width="40" height="40" style={{ objectFit: 'contain' }} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              Deepan India
            </Typography>
          </Box>

          <Box sx={{ p: { xs: '10px 12px', sm: '12px 16px' }, display: 'flex', alignItems: 'center', backgroundColor: '#f9f3fe' }}>
            <Avatar src={agentPhoto} sx={{ width: { xs: 36, sm: 40 }, height: { xs: 36, sm: 40 }, mr: { xs: 1, sm: 1.5 } }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Live Chat</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#49326b', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Helpdesk</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FiberManualRecordIcon sx={{ color: 'green', fontSize: { xs: 10, sm: 12 } }} />
                <Typography variant="caption" sx={{ color: 'green', fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>Online</Typography>
              </Box>
            </Box>
            <IconButton size="small" onClick={handleToggleChat} sx={{ color: '#49326b' }}>
              <CloseIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              p: { xs: 1.5, sm: 2 },
              backgroundImage: `url(${chatBgPattern})`,
              backgroundSize: 'cover',
              overflowY: 'auto',
            }}
          >
            {conversation.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: msg.sender === 'User' ? 'flex-end' : 'flex-start',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: msg.sender === 'User' ? '#d1e7dd' : 'white',
                    borderRadius: '10px',
                    p: { xs: 1, sm: 1.5 },
                    maxWidth: '80%',
                    boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Only display sender if explicitly defined for the message (e.g., 'User' or 'Helpdesk') */}
                  {(msg.sender === 'User' || msg.sender === 'Helpdesk') && (
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#49326b', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                      {msg.sender}
                    </Typography>
                  )}
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                    {msg.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ p: { xs: 0.75, sm: 1 }, display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={
                stage === 'awaitingEmail' ? 'Enter your email' :
                stage === 'awaitingPhone' ? 'Enter your 10-digit WhatsApp number' : // Updated placeholder
                'Type your message'
              }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              error={inputError} // Apply error state
              helperText={inputHelperText} // Apply helper text
              type={stage === 'awaitingEmail' ? 'email' : (stage === 'awaitingPhone' ? 'tel' : 'text')}
              inputProps={{ sx: { fontSize: { xs: '0.85rem', sm: '0.9rem' } } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  '& fieldset': { borderColor: 'transparent' },
                  '&:hover fieldset': { borderColor: '#ccc' },
                  '&.Mui-focused fieldset': { borderColor: '#49326b' },
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              sx={{
                ml: { xs: 0.5, sm: 1 },
                backgroundColor: '#49326b',
                color: 'white',
                '&:hover': { backgroundColor: '#3a2651' },
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
              }}
            >
              <SendIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }} />
            </IconButton>
          </Box>
        </Paper>
      </Slide>

      <Fab
        aria-label="toggle chat"
        onClick={handleToggleChat}
        sx={{
          backgroundColor: isOpen ? '#8e44ad' : '#25D366',
          '&:hover': {
            backgroundColor: isOpen ? '#732d91' : '#128C7E',
          },
          transition: 'background-color 0.3s ease',
          width: { xs: 50, sm: 56 },
          height: { xs: 50, sm: 56 },
          minHeight: { xs: 50, sm: 56 },
        }}
      >
        {isOpen ? (
          <CloseIcon sx={{ color: 'white', fontSize: { xs: '1.75rem', sm: '2rem' } }} />
        ) : (
          <Image src={whatsappIcon} alt="WhatsApp" width="32" height="32" style={{ objectFit: 'contain' }} />
        )}
      </Fab>
    </Box>
  );
}