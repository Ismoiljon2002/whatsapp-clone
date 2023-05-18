import { Create } from '@mui/icons-material';
import { Avatar, Button, TextField, Autocomplete, Tooltip, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import './styles/ContactList.css';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function ContactListHeaderComponent() {

    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);
    const [open, setOpen] = useState(false);
    const { messageTo, setMessageTo } = useContext(UserContext);

    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    useEffect(() => {
        if (!messageTo) {
            setOpenDialog(true);
        }
    }, [])


    return (
        <div className='contact-list-header'>
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClick={logout}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Logout"
            >
                <Avatar alt="Ismoiljon Mirabdullayev"
                    src='https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg'
                    sx={{ width: 60, height: 60 }}
                    onClick={ () => setOpen(!open) }
                />
            </Tooltip>

            <div className="contact-list-header--content">

                <Autocomplete
                    sx={{ width: 200 }}
                    size='small'
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    onClick={() => setOpenDialog(!openDialog)}

                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
                <Button onClick={() => setOpenDialog(true)}> <Create /> </Button>

                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Enter the phone number</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a phone number with country code and Your message will be delivered very fast!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Phone number"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setMessageTo(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                        <Button onClick={() => { setOpenDialog(false); }}>Continue</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
]

export default ContactListHeaderComponent;