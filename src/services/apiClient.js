const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).token : null;
};

export const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
};
