import React from 'react'
import NavBar from './components/navBar'
import Produtos from './view/produtos'
import CreateForm from './ui/create-form'
const page = () => {
  return (
    <div>
      <NavBar />
      <Produtos />
      <CreateForm />
    </div>
  )
}

export default page