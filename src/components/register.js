import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()

    const postData = (e) => {
        // console.log(name);
        // console.log(email);
        // console.log(password);
        const user = {
            "name":name,
            "email":email,
            "password":password
        }
        axios.post(`/user`,user)
        .then(function (response) {
            console.log(response);
            navigate("/");
          })
        .catch(function (error) {
            console.log(error);
          }); 
          e.preventDefault();
}

return (
    <div>
        <h1>Register</h1>
        <hr/>
    <form>
            <label>Name</label>
            <input placeholder='Name' onChange={(e)=>setName(e.target.value)} /> <br/>
            
            <label>Email</label>
            <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /><br/>
            
            <label>Password</label>
            <input placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        
            <button type='submit' onClick={postData}>Submit</button>
    </form>
    </div>
)
}