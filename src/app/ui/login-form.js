"use client"

import { useState } from "react"
import { useRouter } from "next/navigation" // Importe o useRouter
import { login } from "@/app/actions/authLogin"

export default function LoginForm() {
  const [state, setState] = useState({ errors: {}, message: "" })
  const [pending, setPending] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const router = useRouter() // Inicialize o useRouter

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPending(true)

    const formData = new FormData(event.target)
    const result = await login(formData)

    if (result.success) {
      // Armazene os dados do usuário no localStorage
      localStorage.setItem("user", JSON.stringify(result.user))

      // Redirecione o usuário para a página de dashboard
      router.push("/dashboard")
    } else {
      setState({ ...state, message: result.message })
    }

    setPending(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
        </div>
        {state?.errors?.password && <p>{state.errors.password}</p>}

        <button disabled={pending} type="submit">
          {pending ? "Entrando..." : "Login"}
        </button>
        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  )
}
