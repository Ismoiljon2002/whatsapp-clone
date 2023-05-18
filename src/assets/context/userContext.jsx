import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {

    const [ isAuth, setIsAuth ] = useState((localStorage.getItem('idInstance') && localStorage.getItem('apiTokenInstance')) ? true : false);
    const [ idInstance, setIdInstance ] = useState(localStorage.getItem('idInstance'));
    const [ apiTokenInstance, setApiTokenInstance ] = useState(localStorage.getItem('apiTokenInstance'));
    const [ messageTo, setMessageTo ] = useState('');
    const [ messages, setMessages ] = useState([])

    return <UserContext.Provider value={{ 
        isAuth, setIsAuth, 
        idInstance, setIdInstance, 
        apiTokenInstance, setApiTokenInstance,
        messageTo, setMessageTo,
        messages, setMessages
    }}>
        {children}
    </UserContext.Provider>
}