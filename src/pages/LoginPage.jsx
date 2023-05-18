import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import LoginCard from '../assets/components/LoginCard';

import './style/loginPage.css';
import iphoneImg from '../assets/images/whatsapp-phone.png';

function LoginPage() {
    return ( 
        <div className='login-page'>
            <Container>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={iphoneImg} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <LoginCard />
                    </Grid>
                </Grid>
                

            </Container>
        </div>
     );
}

export default LoginPage;