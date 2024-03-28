import React, { useState } from 'react'

const FormHandling = () => {
    const [name, setName] = useState()
    const [gmail, setGmail] = useState()
    const [password, setPassword] = useState()
  return (
    <>
    <div className="container text-center">
        <h1>Form Handling</h1>
        Name :- <input type="text" />
        <br /><br />
        G-mail :- <input type="email" />
        <br /><br />
        Password :- <input type="password" />
    </div>
    </>
  )
}

export default FormHandling