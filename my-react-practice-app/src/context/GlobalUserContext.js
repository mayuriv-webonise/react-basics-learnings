import { parse, stringify, toJSON, fromJSON } from 'flatted';
import Header from '../components/Header';
import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

let initialState = {
    isLoggedIn: false,
    username: '',
    role: ''
};

const saveUser = (payload) => {

    initialState = { ...payload, isLoggedIn: true };
    sessionStorage.setItem('loggedInuser', JSON.stringify(initialState));

}
const clearStorage = () => {
    initialState = { isLoggedIn: false,
        username: '',
        role: ''};
    sessionStorage.removeItem('loggedInuser');

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return  Object.assign({}, state, {
                isLoggedIn: false,
                username: action.payload.username,
                role: action.payload.role
             })

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
            {/* <Header/> */}
        </AuthContext.Provider>
    );
};
