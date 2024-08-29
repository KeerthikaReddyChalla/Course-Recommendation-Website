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
    path:'/History',
    icon: <FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'ResumeEditor',
    icon: <FaEnvelope />,
    path:'/Contact', // Updated icon for "Contact us"
    cName: 'nav-text'
  },
  {
    title: 'Community Tab',
    icon: <FaInfoCircle />,
    path:'/JoinPage',
    cName: 'nav-text'
  },
  {
    title: 'Certifications',
    icon: <FaEnvelope />,
    path:'/Certifications', // Updated icon for "Contact us"
    cName: 'nav-text'
  }
];