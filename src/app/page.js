import React from 'react'
import NavBar from './components/navBar'
import Produtos from './view/produtos'
import CreateForm from './ui/create-form'
import Page from "./createProduct/page"
const page = () => {
  return (
    <div>
      <NavBar />
      <Produtos />
      <CreateForm />
      <Page/>
    </div>
  )
}

export default page