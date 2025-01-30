import Form from "next/form"

export default async function UserFormApi() {
  return (
    <Form action="/registerUser/page">
      <label htmlFor="idTitleSearchKey">Título</label>

      <input id="idTitleSearchKey" name="titleSearchKey" />
      {/* <label htmlFor="idYearSearchKey">Ano</label>
      <input id="idYearSearchKey" name="yearSearchKey" /> */}
      <button type="submit">Pesquisar</button>
    </Form>
  )
}
