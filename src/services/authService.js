const BASE_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Registration failed");
  }

  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Login failed");
  }

  const userData = await res.json();

  // Store it so getToken() can find it later
  localStorage.setItem("user", JSON.stringify(userData));

  // Optional: one-time debug log (remove later if you want)
  console.log("Logged in & saved:", {
    id: userData._id,
    name: userData.name,
    email: userData.email,
    token: userData.token.substring(0, 20) + "...", // don't log full token in prod
  });

  return userData;
};
