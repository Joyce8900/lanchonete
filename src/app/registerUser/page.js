"use client"
import React from 'react'
import UserForm from '../formUsers/register'
import NavBar from '../components/navBar'
const Register = () => {
  const registerUsers = async ({IdEmail, IdSenha}) => {
    const res = await fetch("../api/users",{
      method: "POST",
      body: JSON.stringify({IdEmail, IdSenha})
    })
    const result = await res.json()
    return result.success
  }
  return (
    <div>
      <NavBar />
      <UserForm onSubmit={registerUsers} />
    </div>
  )
}

export default Register