"use client"

import { useState } from "react"

export default function CreateForm() {
  const [state, setState] = useState({ errors: {}, message: "" })
  const [success, setSuccess] = useState(false)
  const [pending, setPending] = useState(false)
  const [formValues, setFormValues] = useState({
    preco: "",
    img: "",
    name: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPending(true)

    const token = localStorage.getItem("token")

    console.log("token", token)

    try {
      // Envia os dados para a rota de API
      const response = await fetch("http://127.0.0.1:8090/api/collections/produtos/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formValues),
      })

      if (response.status === 200) {
        setState({ ...state, message: "Produto criado com sucesso!" })
        setSuccess(true)
        setFormValues({ preco: "", img: "", name: "", field: "-" }) // Limpa o formulário
      } else {
        setState({ ...state, message: "Erro ao criar o produto." })
      }
    } catch (error) {
      
      setState({ ...state, message: "Erro ao criar o produto." })
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            placeholder="Nome"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
        </div>
        {state?.errors?.name && <p>{state.errors.name}</p>}

        <div>
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            name="preco"
            placeholder="Preço"
            value={formValues.preco}
            onChange={(e) =>
              setFormValues({ ...formValues, preco: e.target.value })
            }
          />
        </div>
        {state?.errors?.preco && <p>{state.errors.preco}</p>}

        <div>
          <label htmlFor="img">Imagem</label>
          <input
            id="img"
            name="img"
            placeholder="URL da Imagem"
            value={formValues.img}
            onChange={(e) =>
              setFormValues({ ...formValues, img: e.target.value })
            }
          />
        </div>

       

        <button disabled={pending} type="submit">
          {pending ? "Criando..." : "Criar Produto"}
        </button>
        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  )
}
