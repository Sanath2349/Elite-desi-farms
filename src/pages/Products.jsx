import React, { useState } from "react";
import { useSelector } from "react-redux";
import FeaturedProductCard from "../components/product/FeaturedProductCard";

const Products = () => {
  const products = useSelector((state) => state.products.items);

  const categories = ["All", "Desi Chicken", "Broiler Chicken", "Eggs"];

  const [activeCategory, setActiveCategory] = useState("All");

  // Optional: filter products client-side (uncomment if you want real filtering)
  // const filteredProducts = activeCategory === "All"
  //   ? products
  //   : products.filter(p => p.category === activeCategory);

  // For now we show all – you can switch to filteredProducts later

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-14">
        {/* Header */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Fresh Products
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Daily fresh selection – choose premium quality poultry & eggs
            delivered to your door
          </p>
        </div>

        {/* Category Filters – horizontal scroll + active state */}
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  flex-shrink-0 px-6 py-2.5 text-sm md:text-base font-medium rounded-full
                  transition-all duration-300 snap-start
                  border-2
                  ${
                    activeCategory === cat
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                      : "border-gray-200 text-gray-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-sm"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Optional fade edges on scroll – premium touch */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Product Grid – improved responsive + gap */}
        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products available at the moment. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Optional: Load more / pagination stub */}
        {/* <div className="pt-10 text-center">
          <button className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary)]/90 transition">
            Load More Fresh Items
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
