export async function GET() {
  

  // URL da API PocketBase
  const baseUrl = "http://127.0.0.1:8090/api/collections/produtos/records"

  try {
    // Busca dados na API PocketBase
    const httpRes = await fetch(`${baseUrl}`)
    

    const jsonRes = await httpRes.json()
    return Response.json(jsonRes)
  } catch (error) {
    return Response.json(error)
  }
}
