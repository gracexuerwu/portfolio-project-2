// ImageViewer.js
import React, { useState } from 'react';


import "../styles/ImageViewer.css";

export default function ImageViewer({ imageUrl }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <img
          src={imageUrl}
          alt="Click to enlarge"
          onClick={toggleModal}
          style={{ cursor: 'pointer' }}
        />
  
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>&times;</span>
              <img src={imageUrl} alt="Enlarged" />
            </div>
          </div>
        )}
      </div>
    );
  }