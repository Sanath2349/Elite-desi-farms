import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/productService";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    type: "cut",
    price: "",
    stock: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createProduct({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      navigate("/admin/products");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-xl font-semibold">Add New Product</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-sm"
      >
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Product Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 text-sm mt-1"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm text-gray-600">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 text-sm mt-1"
          >
            <option value="">Select Category</option>
            <option value="desi-chicken">Desi Chicken</option>
            <option value="broiler-chicken">Broiler Chicken</option>
            <option value="desi-eggs">Desi Eggs</option>
            <option value="broiler-eggs">Broiler Eggs</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="text-sm text-gray-600">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 text-sm mt-1"
          >
            <option value="cut">Cut</option>
            <option value="live">Live</option>
            <option value="eggs">Eggs</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="text-sm text-gray-600">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 text-sm mt-1"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="text-sm text-gray-600">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 text-sm mt-1"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="text-sm text-gray-600">Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 text-sm mt-1"
          />
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className="bg-primary text-white px-6 py-3 rounded-lg text-sm"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
