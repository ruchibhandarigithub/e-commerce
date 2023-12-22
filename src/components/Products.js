
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Products = ()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
       getProducts();
    },[]);
    const getProducts = async ()=>{
        let result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/products`,{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token')),
            },
        });
        result = await result.json();
        console.log(result);
        setProducts(result);
    };
    const deleteProduct = async (id)=>{
        let result = await fetch(`https://e-commerce-dashboard-qpqh.vercel.app/product/${id}`,{
            method:"Delete",
            headers:{
                authorization:JSON.parse(localStorage.getItem('token')),
            },

        });

        result = await result.json();
        if(result){
            alert("delete");
            getProducts();
        }
        

    };
    const searchHandle = async (e)=>{
        let key= e.target.value;
        if(key){

    
        let result = await fetch(`https://e-commerce-dashboard-lac.vercel.app/search/${key}`,{
        headers:{
            authorization:JSON.parse(localStorage.getItem('token')),
        }}
        )
        result = await result.json();
        if(result){
          setProducts(result);
        }
       }
       else{
          getProducts();
       }
    } 

    return (
        <div className='product-list'>
            <h3>Products list</h3>
            <input type="text" className='search-input' placeholder="search product"  
             onChange={searchHandle}/>           <ul>
                <li>S No</li>
                <li>Product name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
             {
                products.length>0 ? (products.map((item,index)=>(
                    <ul>
                        <li>{index+1}</li>
                         <li>{item.name}</li>
                         <li>${item.price}</li>
                         <li>{item.category}</li>
                         <li>{item.company}</li>
                         <li><button className="del-btn"  onClick={()=>deleteProduct(item._id)}>Delete</button>
                           <button className="del-btn"><Link to={`/update/${item._id}`}>Update</Link></button> 
                        </li>
                    </ul>
                  
                ))):<h1>No Data found</h1>
            } 


        </div>
    )

}
export default Products;