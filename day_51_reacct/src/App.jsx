import React, { useEffect, useState } from 'react'
import Product from './Product'
import Navbar from './Navbar'
import { items } from './data';
import FormHandling from './FormHandling';


const App = () => {
  const[product, setproduct] = useState(items)

  useEffect(()=>{
   document.title = product[0].category
   document.title = product[0].price
  },[product]) 

  

  return (
    <>
  <Navbar setproduct={setproduct}/>
  {/* <Product product={product}/> */}
  <FormHandling/>
  </>
  )
}

export default App