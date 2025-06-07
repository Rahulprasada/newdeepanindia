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
    const phoneNumber = "911234567890"; // Your full number with country code
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset after sending
    setMessage("");
    setIsOpen(false);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1100 }}>
      {/* The Chat Window, which appears when 'isOpen' is true */}
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper
          elevation={8}
          sx={{
            width: 350,
            height: 500,
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
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }}>
              <Image src={deepanLogo} alt="Deepan India Logo" width={40} height={40} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Deepan India
            </Typography>
          </Box>

          {/* --- Sub Header --- */}
          <Box sx={{ p: '12px 16px', display: 'flex', alignItems: 'center', backgroundColor: '#f9f3fe' }}>
            <Avatar src={agentPhoto.src} sx={{ width: 40, height: 40, mr: 1.5 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Live Chat</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#49326b' }}>Helpdesk</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FiberManualRecordIcon sx={{ color: 'green', fontSize: 12 }} />
                <Typography variant="caption" sx={{ color: 'green' }}>Online</Typography>
              </Box>
            </Box>
            <IconButton size="small" onClick={handleToggleChat}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* --- Chat Body --- */}
          <Box
            sx={{
              flexGrow: 1,
              p: 2,
              backgroundImage: `url(${chatBgPattern})`,
              backgroundSize: 'cover',
              overflowY: 'auto',
            }}
          >
            {/* Initial welcome message */}
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  p: 1.5,
                  maxWidth: '80%',
                  boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#49326b' }}>Helpdesk</Typography>
                <Typography variant="body1">
                  Hello! How can we help you today?
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* --- Message Input Footer --- */}
          <Box sx={{ p: 1, display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
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
              sx={{ ml: 1, backgroundColor: '#49326b', color: 'white', '&:hover': {backgroundColor: '#3a2651'} }}
            >
              <SendIcon />
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
        }}
      >
        {/* Shows a Close icon when open, and WhatsApp icon when closed */}
        {isOpen ? <CloseIcon sx={{color: 'white'}}/> : <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32}/>}
      </Fab>
    </Box>
  );
}