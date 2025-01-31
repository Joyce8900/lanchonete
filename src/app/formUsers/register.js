import Form from "next/form"

export default async function UserForm() {
  return (
    <Form action="/registerUser/page" className="flex flex-col direction-col gap-2 items-center mt-2">
      <label htmlFor="idEmail">Email</label>
      <input id="idEmail" name="EmailKey" />
      <label htmlFor="idSenha">Senha</label>
      <input id="idSenha" name="senhaKey" />
      <label htmlFor="idSenhaConfirme">Confirma senha</label>
      <input id="idSenhaConfirme" name="senhaConfirmeKey" />
      <button type="submit">Registrar</button>
    </Form>
  )
}
