import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])
    const handleLogin = async()=>{
      const obj = {email,password};
       let result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/login`,{
        method:'post',
        body:JSON.stringify(obj),
        headers:{
           'Content-Type':'application/json'
        }
       });
       result  = await result.json();
       console.log(result);
       if(result.auth){
        localStorage.setItem('user',JSON.stringify(result.userObject))
        localStorage.setItem('token',JSON.stringify(result.auth))
       
        navigate("/");
       }
       else{
        alert('please enter correct details');
       }
       
    }
    return(
        <div className='login'>
            <h2>Login</h2>
            <input type="email" value={email} className="input-box" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} className="input-box" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='signup-button' onClick={handleLogin} type="button">Login</button>
        </div>
    );
}
export default Login;