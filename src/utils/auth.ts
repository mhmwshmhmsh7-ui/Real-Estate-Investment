export function loginUser(email: string, password: string) {
  if (email && password) {
    localStorage.setItem("user", JSON.stringify({ email }));
    return true;
  }
  return false;
}

export function isLoggedIn() {
  return !!localStorage.getItem("user");
}

export function logout() {
  localStorage.removeItem("user");
}
