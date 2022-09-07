import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState(()=>[]);
  const [filteredProducts, setFilteredProducts] = useState(()=>[]);
  console.log(filteredProducts);
 
console.log(process.env.REACT_APP_API)
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat 
        ? process.env.REACT_APP_API + `products?category=${cat}`
        : process.env.REACT_APP_API + "products");
        console.log(res.data);
        setProducts(res.data);
      }catch(err){

      }
    };
    getProducts()
  }, [cat]);



  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
        item[key].includes(value)
      ))
    );
  }, [products,cat,filters]);



useEffect(()=>{
  if((sort==="newest")){
    setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt)
  );
  }else if((sort==="asc")){
    setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> a.price - b.price)
  );
  } else{
    setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> b.price - a.price)
  );
  }
}, [sort]);

  return (
    <Container>
        {cat ? filteredProducts.length == 0 ? <div style={{textAlign:"center"}}><h3>Sorry no products avaible at this time...</h3></div>
        : filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )) : products.map((item)=>(
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products