import React from 'react'
import Link from 'next/link'

const navBar = () => {
  return (
    <div className="flex gap-2 mx-2 justify-end">
      <Link href={"/"}>home</Link>
      <div>about</div>
      <div>contact</div>
      <div>cart</div>
      <div>login</div>
    </div>
  )
}

export default navBar