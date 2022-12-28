import React from 'react'
import { useState,useEffect } from 'react'
import Card from './CardDesign'
import './Components.css'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
      const fetchProducts= async()=>{
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json(); 
          // console.log(data)
          setProducts(data)
      };
      fetchProducts()
  },[])


  return (
    <>
      
        <div className='products-grid'>
          {
            products.map(({id,title,price,category,description,image})=>(
                <Card key={id} id={id} title={title} price={price}
                category={category} description={description} image={image}
                />
            ))
          }
        </div>
    </>
  )
}

export default Products;