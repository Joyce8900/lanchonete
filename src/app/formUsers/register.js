"use client"
import Form from "next/form"
import { useState } from "react"
export default function UserForm({onSubmit}) {
  const [mensagem, setMensagem] = useState("")


  return (
    <Form  action="/registerUser" className="flex flex-col direction-col gap-2 items-center m">
      <label htmlFor="idEmail">Email</label>
      <input id="idEmail" name="EmailKey" />
      <label htmlFor="idSenha">Senha</label>
      <input id="idSenha" name="senhaKey" />
      {/* <label htmlFor="idSenhaConfirme">Confirma senha</label>
      <input id="idSenhaConfirme" name="senhaConfirmeKey" /> */}
      <button type="submit">Registrar</button>
    </Form>
  )

   
}

