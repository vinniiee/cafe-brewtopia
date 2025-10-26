const API_URL = 
// import.meta.env.VITE_API_URL || 
"http://localhost:8080/api";

async function handleResponse(response) {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Something went wrong");
  }
  return response.json();
}

export async function signup({ name, email, password }) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return handleResponse(res);
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await handleResponse(res);

  // Save token locally (since JWT is stateless)
  localStorage.setItem("token", data.token);
  return data;
}

export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await fetch(`${API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return handleResponse(res);
}

export function logout() {
  localStorage.removeItem("token");
}

export async function updateCurrentUser({ fullName, password }) {
  const token = localStorage.getItem("token");
  const body = {};

  if (fullName) body.fullName = fullName;
  if (password) body.password = password;

  const res = await fetch(`${API_URL}/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return handleResponse(res);
}
