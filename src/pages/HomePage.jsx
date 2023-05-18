import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@mui/material';
import ContactListComponent from '../assets/components/ContactListComponent';
import ChatBoxComponent from '../assets/components/ChatBoxComponent';
import { UserContext } from '../assets/context/userContext';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const { isAuth } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if ( !isAuth ) navigate('/login');
    }, [])
    
    
    return (
        <div className='home-page'>
            <Grid container spacing={2} style={{height: '100%'}}>
                <Grid item xs={3} height='100vh'>
                    <ContactListComponent />
                </Grid>
                <Grid item xs={9} height='100vh'>
                    <ChatBoxComponent />
                </Grid>
            </Grid>

        </div>
    );
}

export default HomePage;