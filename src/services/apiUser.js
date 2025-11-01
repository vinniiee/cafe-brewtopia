export async function updateUserCart({ cart }) {
  try {
    localStorage.setItem("userCart", JSON.stringify(cart));

    return Promise.resolve({ success: true });
  } catch (error) {
    console.error("Error updating cart in localStorage:", error);
    throw new Error("Failed to update cart in localStorage");
  }
}



export async function uodateUserInfo(updatedInfo){

  

}