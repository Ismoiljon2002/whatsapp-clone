import React, { useState, useEffect, useContext } from 'react';
import ContactComponent from './ContactComponent';
import ContactListHeaderComponent from './ContactListHeaderComponent';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import './styles/ContactList.css';

function ContactListComponent() {

    const { idInstance,apiTokenInstance } = useContext(UserContext);
    const [ notification, setNotification ] = useState({})
    
    useEffect(() => {
        axios.get(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        .then(res => {
            console.log("resp from receiving chats .......", res)
            setNotification(res.data);
        })
        .catch(err => console.error('erroor.....', err))
    }, []);

    const readNotification = (id) => {
        console.log(id)
        axios.delete(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${id}`)
        .then(res => console.log(res, 'delete res'))
    }

    return ( 
        <div className='contact-list-component'>
            <ContactListHeaderComponent />
        
            {notification?.body && <ContactComponent 
                notification={notification} 
                onClick={() => readNotification(notification.data.receiptId)} />}
        </div>
     );
}

export default ContactListComponent;