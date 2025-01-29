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
          <h3>Erro: Nenhum filme encontrado.</h3>
          <p>Por favor, consulte os filmes cadastrados.</p>
        </div>
      )}
      {produtos.length === 1 ? (
        <div>
          <h1>{movies[0].title}</h1>
          <h2>{movies[0].year}</h2>
          <Image
            src={movies[0].poster}
            alt={movies[0].title}
            className="movie-poster"
          />
        </div>
      ) : (
        produtos.map((produto) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <h2>{movie.year}</h2>
            <Image
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />
          </div>
        ))
      )}
    </div>
  )
}

export default Produtos
