import axios from 'axios';

const api=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
export const getAllUsers=()=>{
    return api.get('/users');
}
export const getUserById=(id)=>{    
    return api.get(`/users/${id}`);
}
export const createUser=(user)=>{
    return api.post('/users',user);
}
export const deleteUser=(id)=>{ 
    return api.delete(`/users/${id}`);
}
export const editUser=(id,data)=>{
    return api.put(`/users/${id}`,data);
}

// app.jsx code:-

import React,{useEffect, useState} from 'react';
import {createUser, getAllUsers, deleteUser, editUser} from './services/PostApi';
export default function App(){
    const [users,setUsers]=useState([]);