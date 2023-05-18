import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';

function ContactComponent({ notification }) {

    const phoneNum = notification?.body?.instanceData.wid.split('@')[0];
    const time = new Date(notification?.body?.timestamp);

    return ( 
        <div className='contact-component'>
            <Avatar alt="Ismoiljon Mirabdullayev" 
                src='https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg' 
                sx={{ width: 50, height: 50 }}
            />

            <div className="contact-component--content">
                <h4>{ `+${phoneNum}`}</h4>
                <p className='text-muted'>Lorem ipsum dolor sit amet...</p>
                
            </div>

            <div className="time">
                <p> {`${time.getHours()}:${time.getMinutes()}`} </p>
            </div>
        </div>
     );
}

export default ContactComponent;