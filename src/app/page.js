import React from 'react'
import NavBar from './components/navBar'
import Produtos from './view/produtos'
import CreateForm from './ui/create-form'

const page = () => {
  return (
    <div>
      <NavBar />
      <Produtos />
     
    </div>
  )
}

export default page