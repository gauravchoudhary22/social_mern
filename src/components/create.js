import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState(localStorage.getItem('user'));

    let navigate = useNavigate()

    const postData = (e) => {
        // console.log(name);
        // console.log(email);
        // console.log(password);
        const post = {
            "title":title,
            "body":body,
            "user":user
        }
        axios.post(`/post`,post)
        .then(function (response) {
            console.log(response);
            navigate("/dashboard");
          })
        .catch(function (error) {
            console.log(error);
          }); 
          e.preventDefault();
}

if(user){
    return (
        <div>
            <h1>Create New Post</h1>
            <hr/>
        <form>
                <label>Title</label>
                <input placeholder='title' onChange={(e)=>setTitle(e.target.value)} /> <br/>
                
                <label>Body</label>
                <input type="textArea" placeholder='body' onChange={(e)=>setBody(e.target.value)} /><br/>
                
                
                <button type='submit' onClick={postData}>Submit</button>
        </form>
        </div>
    )
    
}
return(
    <div>
     <h2>Please login</h2>
     <Link to="/login">Login</Link>
     </div>
)
}
