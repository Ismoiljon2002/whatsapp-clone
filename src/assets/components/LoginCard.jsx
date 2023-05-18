import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, FormControlLabel, Checkbox, TextField } from '@mui/material';
import CountrySelect from './CountrySelect';

import { Save } from '@mui/icons-material';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';


    function LoginCard() {
        const navigate = useNavigate();

        const [loading, setLoading] = useState(false);
        const { setIsAuth, idInstance, setIdInstance, apiTokenInstance, setApiTokenInstance } = useContext(UserContext);
        const [save, setSave] = useState(false);

        const checkAuth = () => {
            if (save) {
                localStorage.setItem('idInstance', idInstance )
                localStorage.setItem('apiTokenInstance', apiTokenInstance )
            }
            if (idInstance && apiTokenInstance) {
                setIsAuth(true);
                navigate('/');
            };

        }

        
        const inputStyles = {
            border: '2px solid rgb(0, 255, 0)',
            background: '#fff',
            borderRadius: 10,
            margin: 10,
            outline: "none"
        }

        // const style = <style>
        //     font-size: 20px;

        // </style>
        // document.head.appendChild(style)
        


        // const [dialCode, setDialCode] = useState('');
        // const [phoneNumber, setPhoneNumber] = useState({
        //     phone: '',
        //     isNumber: true,

        // });

        // const onSelect = (innerText) => {

        //     let code = innerText.split('');
        //     code.splice(0, code.findIndex(char => char === "+") + 1);
        //     code = code.filter(char => char !== "-").join('');

        //     setDialCode(code);
        // }

        // const validateNumber = (e) => {

        //     e.target.value

        //     setPhoneNumber({...phoneNumber, phone: e.target.value})

        // }


        return (

            <Card className='login-card'>

                <h3>Fill in the required fields*</h3>

                <TextField
                    style={inputStyles}
                    required
                    id="outlined-required"
                    label="idInstance"
                    sx={{ with: '100%' }}
                    onChange={e => setIdInstance(e.target.value)}
                />
                <TextField
                    required
                    style={inputStyles}
                    id="outlined-required"
                    label="apiTokenInstance"
                    sx={{ with: '100%' }}
                    size='big'
                    onChange={e => setApiTokenInstance(e.target.value)}
                />

                <FormControlLabel 
                    label="Remember Me" 
                    onClick={() => setSave(!save)}
                    control={<Checkbox color="success" checked={save} />} 
                />

                <Button variant="contained" color="success" onClick={checkAuth} >
                    Continue {loading && <Save />}
                </Button>

            </Card>
        );
    }

export default LoginCard;