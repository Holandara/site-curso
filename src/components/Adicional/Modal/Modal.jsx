import React from 'react';
import './Modal.css';

export default function Modal({isOpen}) {

  if (isOpen) {
    return <div>Modal</div>
  }

  return null
}