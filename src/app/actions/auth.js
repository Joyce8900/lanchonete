import PocketBase from "pocketbase"

export async function signup(state, formData) {
  const pb = new PocketBase("http://127.0.0.1:8090")

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("password"),
    emailVisibility: true,
    
  }

  try {
    const record = await pb.collection("users").create(data)
    return { success: true, user: record }
   
  } catch (error) {
    return { success: false, error: error.message }
  }
}
