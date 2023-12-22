import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth){
          navigate('/');
        }
    })
    const collectData = async()=>{
        const obj= {name,email,password};
       
        const result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/register`,{
        method:"post",
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
      });
      const data = await result.json();
      console.log("Yeh raha me",data);
     
      localStorage.setItem('user',JSON.stringify(data.result));
      localStorage.setItem('token',JSON.stringify(data.auth));
      navigate('/');
      
      
    };
    return (
        <div className='signup'>
            <h1>Register</h1>
            <input className="input-box" value={name} type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
            <input className="input-box" value={email} type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <input className="input-box" value={password} type="passout" placeholder='Enter pssword' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='signup-button' onClick={collectData} type="button">SignUp</button>
        </div>
    )

}
export default SignUp;