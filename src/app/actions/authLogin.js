import PocketBase from "pocketbase"

export async function login(formData) {
  const pb = new PocketBase("http://127.0.0.1:8090")

  const email = formData.get("email")
  const password = formData.get("password")

  try {
    // Autentica o usuário
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password)

    // Retorna os dados de autenticação
    return {
      success: true,
      user: authData.record,
      token: authData.token,
      message: "Login realizado com sucesso!",
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: "Erro ao fazer login. Verifique suas credenciais.",
    }
  }
}
