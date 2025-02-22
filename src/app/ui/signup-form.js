"use client"

import { useState } from "react"
import { signup } from "@/app/actions/auth"

export default function SignupForm() {
  const [state, setState] = useState({ errors: {}, message: "" })
  const [success, setSuccess] = useState(false)
  const [pending, setPending] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPending(true)
    
    const formData = new FormData(event.target)
    const result = await signup(state, formData)

    if (result.errors) {
      setState({ ...state, errors: result.errors })
      setFormValues({ name: "", email: "", password: "" })
    } else if (result.message) {
      setState({ ...state, message: result.message })
      setFormValues({ name: "", email: "", password: "" })
      
      
    }

    setPending(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
        </div>
        {state?.errors?.name && <p>{state.errors.name}</p>}

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
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button disabled={pending} type="submit">
          {pending ? "Cadastrando..." : "Sign Up"}
        </button>
        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  )
}
