"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import NavBar from "../components/navBar"


export default function Dashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Recupere os dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem("user"))

    if (!userData) {
      // Se não houver dados do usuário, redirecione para a página de login
      router.push("../loginUser")
    } else {
      setUser(userData)
    }
  }, [router])

  if (!user) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <NavBar />
      <h1>Bem-vindo! {user.name}</h1>
      
      <button
        onClick={() => {
          localStorage.removeItem("user") // Limpe os dados do usuário
        }}
      >
        Sair
      </button>
      <br></br>
      <button onClick={() => router.push("/createProduct")}>
        Criar produto
      </button>
    </div>
  )
}
