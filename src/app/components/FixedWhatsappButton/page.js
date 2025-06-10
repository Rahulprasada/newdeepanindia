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

// --- Import your assets ---
import Image from 'next/image';
import whatsappIcon from "../../../assets/whatsapp-removebg-preview.png";
import deepanLogo from "../../../assets/EditedLogo-removebg-preview.png"; // Your company logo
import agentPhoto from "../../../assets/robot-or-chatbot-logo-template-chat-bot-icon-vector-35064959.jpg"; // A placeholder agent photo

// --- Import MUI Icons ---
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // For the 'Online' dot

// This is the background pattern for the chat body, similar to WhatsApp
const chatBgPattern = "https://i.pinimg.com/originals/a0/a3/1b/a0a31b3293233f274a445439443e4939.jpg";

export default function FixedWhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return; // Don't send empty messages

    // --- CONFIGURE YOUR WHATSAPP DETAILS HERE ---
    const phoneNumber = "9884411611"; // Your full number with country code (e.g., "919884411611")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset after sending
    setMessage("");
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, sm: 24 }, // Adjust bottom margin for smaller screens
        left: { xs: 16, sm: 24 }, // Adjust left margin for smaller screens
        zIndex: 1100, // Ensure it's above most content
      }}
    >
      {/* The Chat Window, which appears when 'isOpen' is true */}
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper
          elevation={8}
          sx={{
            // Responsive width and height for the chat window
            width: { xs: '90vw', sm: 350 }, // 90% of viewport width on small screens, fixed 350px on larger
            maxWidth: 350, // Ensures it doesn't get too wide on very large screens
            height: { xs: '70vh', sm: 500 }, // 70% of viewport height on small screens, fixed 500px on larger
            maxHeight: 500, // Ensures it doesn't get too tall
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* --- Chat Header --- */}
          <Box
            sx={{
              backgroundColor: '#49326b', // Your brand's dark purple color
              color: 'white',
              padding: { xs: '12px', sm: '16px' }, // Responsive padding
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1 }, // Responsive gap
            }}
          >
            <Avatar sx={{ bgcolor: 'white', width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 } }}>
              <Image src={deepanLogo} alt="Deepan India Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              Deepan India
            </Typography>
          </Box>

          {/* --- Sub Header (Agent Info) --- */}
          <Box sx={{ p: { xs: '10px 12px', sm: '12px 16px' }, display: 'flex', alignItems: 'center', backgroundColor: '#f9f3fe' }}>
            <Avatar src={agentPhoto.src} sx={{ width: { xs: 36, sm: 40 }, height: { xs: 36, sm: 40 }, mr: { xs: 1, sm: 1.5 } }} />
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

          {/* --- Chat Body --- */}
          <Box
            sx={{
              flexGrow: 1,
              p: { xs: 1.5, sm: 2 }, // Responsive padding
              backgroundImage: `url(${chatBgPattern})`,
              backgroundSize: 'cover',
              overflowY: 'auto',
            }}
          >
            {/* Initial welcome message */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> {/* Ensure message is aligned left */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  p: { xs: 1, sm: 1.5 }, // Responsive padding
                  maxWidth: '80%', // Keeps message within reasonable width
                  boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#49326b', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>Helpdesk</Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                  Hello! How can we help you today?
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* --- Message Input Footer --- */}
          <Box sx={{ p: { xs: 0.75, sm: 1 }, display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              inputProps={{ sx: { fontSize: { xs: '0.85rem', sm: '0.9rem' } } }} // Responsive font size for input
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ccc',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#49326b',
                  },
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              sx={{
                ml: { xs: 0.5, sm: 1 }, // Responsive margin left
                backgroundColor: '#49326b',
                color: 'white',
                '&:hover': { backgroundColor: '#3a2651' },
                // Adjust size for icon button itself
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
              }}
            >
              <SendIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }} />
            </IconButton>
          </Box>
        </Paper>
      </Slide>

      {/* The Main Floating Button */}
      <Fab
        aria-label="toggle chat"
        onClick={handleToggleChat}
        sx={{
          backgroundColor: isOpen ? '#8e44ad' : '#25D366', // Purple when open, Green when closed
          '&:hover': {
            backgroundColor: isOpen ? '#732d91' : '#128C7E',
          },
          transition: 'background-color 0.3s ease',
          // Adjust Fab size for smaller screens
          width: { xs: 50, sm: 56 },
          height: { xs: 50, sm: 56 },
          minHeight: { xs: 50, sm: 56 }, // Prevent min-height override
        }}
      >
        {/* Shows a Close icon when open, and WhatsApp icon when closed */}
        {isOpen ? <CloseIcon sx={{ color: 'white', fontSize: { xs: '1.75rem', sm: '2rem' } }} /> : <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} style={{ objectFit: 'contain' }} />}
      </Fab>
    </Box>
  );
}
