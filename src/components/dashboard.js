import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const [data, setData] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    let user = localStorage.getItem('user')

    const handleClick=()=>{
        localStorage.setItem('user',null)
        navigate('/')
    }

    const handleDelete= (id)=>{
        console.log("del")
     axios.delete(`/post/${id}`)
    .then((response) => {
        // console.log(id)
        let data2 = data.filter(d=>d._id!=id)
        setData(data2)
    })
    .catch((error)=>{
        console.log(error)
    }) 
    }

    // const handleUpdate = (id)=>{
    //     navigate(`/update/${id}`)
    // }


   const fetchData = async()=>{
    await axios.get(`/post`)
    .then((response) => {
        console.log(response)
        setData(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
   }

if(user){
    return (
    
        <div style={{marginLeft:"50px"}}>
        <button onClick={handleClick} >Logout</button> <br/>
            <Link to="/create">Create New</Link>{"          "}
                    {data.map((d,index)=>{
                        return(
                            <div key={index}>
                                <h3>{d.title}</h3>
                                <p>{d.body}</p>
                                <p>-{d.user}</p>
                                {user==d.user &&
                                    <p>
                                    <Link to={`/update/${d._id}`}> Edit </Link> <br/>
                                    <button onClick={()=>handleDelete(d._id)}>Delete</button>
                                    </p>
                                }

                                <p>
                                   
                                
                                        
                                    
                                   
                                </p>
                            </div>
                        )
                    })}
                
            </div>
            
            
        )
}return(
    <div>
     <h2>Please login</h2>
     <Link to="/login">Login</Link>
     </div>
)

}
