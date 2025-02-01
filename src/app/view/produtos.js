import React from "react"
import Image from "next/image"

const Produtos = async () => {
  

  let produtos = []
  let error = null

  try {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/produtos/records?`
    )
    if (!res.ok) {
      throw new Error("Erro ao buscar produtos")
    }

    const data = await res.json()
    produtos = data.items || []
  } catch (err) {
    error = err.message
  }

  return (
    <div>
      <h1>Produtos</h1>
      {/* <a href="http://127.0.0.1:8090/api/collections/produtos/records">
        Dados da api
      </a> */}
      {error && <div>Erro: {error}</div>}
      {produtos.length === 0 && (
        <div>
          <h3>Erro: Nenhum produto encontrado.</h3>
        </div>
      )}
      {produtos.length === 1 ? (
        <div>
          <h1>{produtos[0].name}</h1>
          <h2>{produtos[0].preco}</h2>
          <img src={produtos[0].img} width={300} height={300} />
        </div>
      ) : (
        produtos.map(({ produto }) => (
          <div key={produto.id}>
            <h1>{produto.name}</h1>
            <h2>{produto.preco}</h2>
            <img
              src={produto.img}
              alt={produto.name}
              width={300}
              height={300}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default Produtos
