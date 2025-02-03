// app/page.js (Server Component)
import NavBar from "./components/navBar"
import Produtos from "./view/produtos"
import Dashboard from "./dashboard/page"

export default async function Page() {
  // Exemplo de busca de dados assíncrona
  const userData = await fetchUserData() // Substitua pela sua lógica de busca de dados

  return (
    <div>
      {userData ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <p>Bem-vindo</p>
      )}
    </div>
  )
}

// Função de exemplo para buscar dados do usuário
async function fetchUserData() {
  // Simula uma requisição assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ email: "usuario@example.com" })
    }, 1000)
  })
}
