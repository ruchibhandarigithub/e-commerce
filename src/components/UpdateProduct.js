import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
const UpdateProduct = ()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const params = useParams();
    const navigate = useNavigate();
    console.log(params.id);
    useEffect(()=>{
        getProductDetails();
    },[]);
    const getProductDetails = async ()=>{
        const result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/product/${params.id}`,{
            headers:{
                 authorization:JSON.parse(localStorage.getItem('token'))
            },
        });
        const data = await result.json();
        console.log(data);
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setCompany(data.company);
    }
    
    const updateProduct = async()=>{
        const obj = {name,price,category,company}
        const result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/product/${params.id}`,{
            method:"PUT",
            body:JSON.stringify(obj),
            headers:{
                'Content-Type':"application/json",
                 authorization:JSON.parse(localStorage.getItem('token'))
            },
           
        });
        const data = await result.json();
        if(data){
            navigate("/");
        }
       
       

    }
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input className="input-box" value={name} type="text" placeholder="enter Product name " onChange={(e)=>setName(e.target.value)}/>
        
           <input className="input-box" value={price} type="text" placeholder="enter Product price " onChange={(e)=>setPrice(e.target.value)} />
          
            <input className="input-box" value={category} type="text" placeholder="enter Product category " onChange={(e)=>setCategory(e.target.value)} />
           
            <input className="input-box" value={company} type="text" placeholder="enter Product company " onChange={(e)=>setCompany(e.target.value)} />
          
            <button class="signup-button" onClick={updateProduct}>Update</button>
        </div>
    );
}
export default UpdateProduct;
