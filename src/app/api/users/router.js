import PocketBase from "pocketbase"

export async function POST(req) {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const { email, senha } = await req.json()
    
    // Criar usuário no PocketBase
    const data = {
      email,
      password: senha,
      passwordConfirm: senha,
      emailVisibility: true,
    }
    console.log(data)
    const record = await pb.collection("users").create(data)

 

    return Response.json({ success: true, user: record }, { status: 201 })
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 400 }
    )
  }
}
