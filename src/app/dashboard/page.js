"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Recupere os dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem("user"))

    if (!userData) {
      // Se não houver dados do usuário, redirecione para a página de login
      router.push("/login")
    } else {
      setUser(userData)
    }
  }, [router])

  if (!user) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>Bem-vindo, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("user") // Limpe os dados do usuário
          router.push("/login") // Redirecione para a página de login
        }}
      >
        Sair
      </button>
    </div>
  )
}
