"use client"
import React from "react"
import Link from "next/link"

const navBar = () => {
  const userData = JSON.parse(localStorage.getItem("user"))


  return (
    <div className="flex gap-2 mx-2 justify-end blue">
      <Link href={"/"}>home</Link>
      <div>about</div>
      <div>contact</div>
      <div>cart</div>
      {userData ? <div>{userData.name}</div> : <div>  <Link href={"../registerUser"}>register</Link>
      <Link href={"../loginUser"}>login</Link> </div>}
    </div>
  )
}

export default navBar
