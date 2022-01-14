import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Update() {
    // let userid = match.params.id;
    // console.log(userid);

    const {id} = useParams();
    // console.log(id)


    useEffect(() => {
        fetchData()
    }, [])
    let navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState(localStorage.getItem('user'));

    

    const fetchData = async ()=>{
        console.log(id)
        await axios.get(`/post/${id}`)
        .then((response) => {
            console.log(response.data)
            setTitle(response.data.title)
            setBody(response.data.body)
        })
        .catch((error)=>{
            console.log(error)
        })
       }
    


    const postData = (e) => {
        // console.log(name);
        // console.log(email);
        // console.log(password);
        const post = {
            "title":title,
            "body":body,
            "user":user
        }
        axios.put(`/post/${id}`,post)
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
            <h1>Edit Post</h1>
            <hr/>
        <form>
                <label>Title</label>
                <input placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} /> <br/>
                
                <label>Body</label>
                <textArea placeholder='body'  onChange={(e)=>setBody(e.target.value)} >{body}</textArea><br/>
                
                
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
