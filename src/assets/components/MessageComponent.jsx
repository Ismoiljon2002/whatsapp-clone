import React, { useState, useEffect } from 'react';

function MessageComponent({ message, timestamp, isYours }) {
    
    return ( 
        <div className={`message-card ${isYours && 'by-self'}`}>
            <p  >{message}</p>

            <p className="muted-text">{`${new Date(timestamp).getHours() || 17}:${new Date(timestamp).getMinutes() || 29}`}</p>
        </div>
     );
}

export default MessageComponent;