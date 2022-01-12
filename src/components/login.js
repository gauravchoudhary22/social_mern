import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()

    const postData = (e) => {
       
        const user = {
            "email":email,
            "password":password
        }
        axios.post(`/user/login`,user)
        .then(function (response) {
            console.log(response);
            localStorage.setItem('user',response.data.user)
            navigate("/dashboard");
          })
        .catch(function (error) {
            console.log(error);
          }); 
          e.preventDefault();
}

return (
    <div style={{marginRight:"50px"}}>
        <h1>Login</h1>
        <hr/>
    <form>
            
            <label>Email</label>
            <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /><br/>
            
            <label>Password</label>
            <input placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        
            <button type='submit' onClick={postData}>Submit</button>
    </form>
    </div>
)
}