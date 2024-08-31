import React from 'react';
import { FaHome, FaUser, FaStar, FaBoxOpen, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path:'/Profile',
    icon: <FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path:'http://localhost:5173/',
    icon: <FaUser />,
    cName: 'nav-text',
    
  },
  {
    title: 'ResumeEditor',
    icon: <FaEnvelope />,
    path:'http://localhost:5174/dashboard', // Updated icon for "Contact us"
    cName: 'nav-text',
    
  },
  {
    title: 'Community Tab',
    icon: <FaInfoCircle />,
    path:'http://localhost:3001/',
    cName: 'nav-text'
  },
  {
    title: 'Certifications',
    icon: <FaEnvelope />,
    path:'/Certifications', // Updated icon for "Contact us"
    cName: 'nav-text'
  }
];