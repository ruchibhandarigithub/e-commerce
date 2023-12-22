import React, { useState } from 'react';
const AddProduct = ()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);
    const addProduct = async()=>{
        if(!name | !price || !category || !company){
          setError(true);
          return false;
        }
       
        const userId= JSON.parse(localStorage.getItem('user'))._id;
        const obj = {name,price,category,userId,company};
        const result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/add-product`,{
        method:"post",
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json',
            authorization:JSON.parse(localStorage.getItem('token')),
        }
        
      });
      const data = await result.json();
      console.log(data);

    }
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input className="input-box" value={name} type="text" placeholder="enter Product name " onChange={(e)=>setName(e.target.value)}/>
           {error && !name && <span className='invalid-input'>Enter valid name</span>}
           <input className="input-box" value={price} type="text" placeholder="enter Product price " onChange={(e)=>setPrice(e.target.value)} />
           {error && !price && <span className='invalid-input'>Enter valid name</span>}
            <input className="input-box" value={category} type="text" placeholder="enter Product category " onChange={(e)=>setCategory(e.target.value)} />
            {error && !category && <span className='invalid-input'>Enter valid name</span>}
            <input className="input-box" value={company} type="text" placeholder="enter Product company " onChange={(e)=>setCompany(e.target.value)} />
            {error && !company && <span className='invalid-input'>Enter valid name</span>}
            <button class="signup-button" onClick={addProduct}>Add</button>
        </div>
    )

}
export default AddProduct;