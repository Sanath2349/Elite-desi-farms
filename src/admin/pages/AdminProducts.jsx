import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../../services/productService";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        console.log("get produts",data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await deleteProduct(id);

      // Remove from UI without refetch
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Products</h2>

        <Link
          to="/admin/products/create"
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          Add Product
        </Link>
      </div>

      {/* Loading */}
      {loading && <p className="text-sm text-gray-500">Loading products...</p>}

      {/* Error */}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Table */}
      {!loading && !error && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Type</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-500">
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium">{product.name}</td>

                    <td className="p-4 capitalize">{product.category}</td>

                    <td className="p-4 capitalize">{product.type}</td>

                    <td className="p-4">₹{product.price}</td>

                    <td className="p-4">{product.stock}</td>

                    <td className="p-4 text-right space-x-3">
                      <Link
                        to={`/admin/products/edit/${product._id}`}
                        className="text-blue-600 text-xs hover:underline"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        disabled={deletingId === product._id}
                        className="text-red-500 text-xs hover:underline"
                      >
                        {deletingId === product._id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
