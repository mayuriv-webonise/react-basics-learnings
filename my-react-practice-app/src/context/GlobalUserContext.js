import { parse, stringify, toJSON, fromJSON } from 'flatted';

import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

let initialState = {
    isLoggedIn: false,
    username: '',
    role: ''
};

const saveUser = (payload) => {
    console.log(payload);
    initialState = { ...payload, isLoggedIn: true };
    sessionStorage.setItem('loggedInuser', JSON.stringify(initialState));

}
const clearStorage = () => {
    
    sessionStorage.removeItem('loggedInuser');

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return saveUser(action.payload);

        case 'LOGOUT':
            return clearStorage();
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
