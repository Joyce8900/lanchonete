import PocketBase from "pocketbase"

export async function POST(request) {
  const pb = new PocketBase("http://127.0.0.1:8090")

  try {
    // Extrai os dados do corpo da requisição
    const { preco, img, name, field } = await request.json()

    // Cria o produto no PocketBase
    const data = {
      preco: Number(preco), // Converte para número
      img,
      name,
      field,
    }

    const record = await pb.collection("produtos").create(data)

    // Retorna uma resposta de sucesso
    return new Response(JSON.stringify({ success: true, record }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    // Retorna uma resposta de erro
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
