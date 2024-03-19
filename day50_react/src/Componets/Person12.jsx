import React from 'react'

const Person12 = (props) => {

    const person = {
        name:"superman",
        age:"400",
        salary:"1000$",
        car:"BMW"
    }


  return (
    <div className='person'>
      <h2>This is your person12 component in the folder component</h2>
        <h1>{props.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.salary}</h1>
        <h1>{person.car}</h1>
    </div>
  )
}

export default Person12