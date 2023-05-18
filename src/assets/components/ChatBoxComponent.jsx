import React, { useState, useEffect, useContext } from 'react';
import { Container, TextField, Box, Button, Avatar } from '@mui/material';
import { Send } from '@mui/icons-material'
import MessageComponent from './MessageComponent';
import axios from 'axios';
import './styles/ChatBox.css';
import { UserContext } from '../context/userContext';

function ChatBoxComponent() {

    const [ message, setMessage ] = useState('');
    const { idInstance,apiTokenInstance, messageTo, messages, setMessages } = useContext(UserContext);
    let response;
    // useEffect(() => {
    //     axios.get(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
    //     .then(res => console.log("resp from receiving chats .......", res))
    //     .catch(err => console.error('erroor.....', err))
    // });

    const sendMessage = () => {
        axios.post(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
            chatId: `${messageTo}@c.us`,
            message,
        }).then(resp => {
            console.log("response", resp);
            document.getElementById('outlined-multiline-flexible').value = '';
            response = { message, messageId: resp.data.idMessage, timestamp: new Date()};
            // localStorage.setItem('messages', JSON.stringify(messages));
            setMessages([...messages, response ])
        })
        .catch(error => console.warn("error coming.....", error));
    }

    useEffect(() => {
        if (localStorage.getItem('messages')) 
            setMessages(JSON.parse(localStorage.getItem('messages')))
    })


    const inputStyle = {
        background: "#ffffff",
        color: "#000",
        borderRadius: 40,
        padding: 0
    }

    return (
        <div className='chat-box-component'
        >

            <div className="account-info">
                <Avatar alt={'John Smith'}
                    src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'
                    sx={{ width: 60, height: 60 }}
                    style={{ display: "inline-block" }}
                />
                {messageTo && <h3 style={{ marginLeft: 30 }}> +{messageTo} </h3>}
            </div>

            <div className='chat-container'>
                <MessageComponent message="This is the first message"/>
                <div className="clr"></div>
                {messages.map(m => <>
                    <MessageComponent key={m?.messageId} message={m?.message} timestamp={m?.timestamp} isYours={true} />
                    <div className="clr"></div>
                </>)}
            </div>


            <div className='chat-bottom-container'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '80%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        style={inputStyle}
                        id="outlined-multiline-flexible"
                        // label="Multiline"
                        multiline
                        maxRows={3}
                        onChange={e => setMessage(e.target.value)}

                    />
                    <Button
                        variant="contained"
                        color="success"
                        className='send-btn'
                        onClick={sendMessage}
                    >
                        Send
                        {/* Send Icon below */}
                        <Send style={{ marginLeft: '15px' }} />
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default ChatBoxComponent;