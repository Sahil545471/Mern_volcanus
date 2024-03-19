import React from 'react'

const phone = () => {
    let phone = {
        name:"oneplus",
        price:40000,
        ram:"6gb",
        rom:"128gb"
    }
  return (
   <>
   <div className="Container">
   <h1>This data is coming from phone component </h1>
   <h3>{phone.name}</h3>
   <h3>{phone.price}</h3>
   <h3>{phone.ram}</h3>
   <h3>{phone.rom}</h3>
   </div>
   </>
  )
}

export default phone