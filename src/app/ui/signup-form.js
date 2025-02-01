"use client"

import { useState } from "react"
import { signup } from "@/app/actions/auth"

export default function SignupForm() {
  const [state, setState] = useState({ errors: {}, message: "" })
  const [pending, setPending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPending(true)
    console.log(event)
    const formData = new FormData(event.target)
    const result = await signup(state, formData)

    if (result.errors) {
      setState({ ...state, errors: result.errors })
    } else if (result.message) {
      setState({ ...state, message: result.message })
    }

    setPending(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" />
        </div>
        {state?.errors?.name && <p>{state.errors.name}</p>}

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="Email" />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
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
          Sign Up
        </button>
        {state.message && <p>{state.message}</p>}
      </form>
      
    </div>
  )
}
