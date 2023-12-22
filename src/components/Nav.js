import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
const Nav = ()=>{
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup');
    }
    console.log(user);
     return (
        <div>
           { auth ? <ul className="nav-ul">
                <li ><Link to="/" >Products</Link></li>
                <li ><Link to="/add" >Add Products</Link></li>
                <li ><Link to="/update/:id" >Update Product</Link></li>
               
               
                
                <li><Link onClick={logout} to="/signup">{user.name.toUpperCase()}</Link></li> 
                    
            </ul>
            :
            <ul className='nav-ul nav-right'>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        }
        </div>
     )
}
export default Nav;