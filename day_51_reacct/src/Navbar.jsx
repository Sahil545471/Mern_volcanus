import React from 'react'
import { items } from './data'

const Navbar = ({setproduct}) => {
    const filterByCategory = (cat) => {
        const filteredData = items.filter((data)=>data.category === cat)
        // console.log(filteredData)
        setproduct(filteredData)
    }
    const filterByPrice = (pri) => {
      const filteredprice = items.filter((data)=>data.price >= pri)
      // console.log(filteredData)
      setproduct(filteredprice)
  }
  return (
    <div className='Nav p-3 my-3 d-flex justify-content-center'>
        <div className='btn btn-primary'onClick={()=>setproduct(items)}>NO filter</div>
        <div className='btn btn-primary' onClick={()=>filterByCategory("mobiles")}>Mobiles</div>
        <div className='btn btn-warning' onClick={()=>filterByCategory("laptops")}>Laptop</div>
        <div className='btn btn-secondary'onClick={()=>filterByCategory("tablets")} >Tablets</div>
        <div className='btn btn-info mx-3'onClick={()=>filterByPrice("30000")}>{">"}30000</div>
        <div className='btn btn-light mx-3'onClick={()=>filterByPrice("60000")}>{">"}60000</div>
        <div className='btn btn-danger mx-3'onClick={()=>filterByPrice("80000")}>{">"}80000</div>

    </div>
  )
}

export default Navbar