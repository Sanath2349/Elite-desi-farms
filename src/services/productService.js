import { apiRequest } from "./apiClient";

export const getProducts = () => apiRequest("/api/products");

export const createProduct = (data) =>
  apiRequest("/api/products", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateProduct = (id, data) =>
  apiRequest(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteProduct = (id) =>
  apiRequest(`/api/products/${id}`, {
    method: "DELETE",
  });
