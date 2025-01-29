import React from 'react'
import NavBar from './components/navBar'
import Produtos from './view/home'

const page = () => {
  return (
    <div>
      <NavBar />
      <Produtos />
    </div>
  )
}

export default page