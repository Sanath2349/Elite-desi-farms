import { Link } from "react-router-dom";
import { useFeaturedProducts } from "../features/products/useFeaturedProducts";
import FeaturedProductCard from "../components/product/FeaturedProductCard";

export default function Home() {
  const featuredProducts = useFeaturedProducts();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1920&auto=format&fit=crop"
          alt="Farm background"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 space-y-8 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Fresh Poultry
            <span className="block text-accent">Straight From Farm</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Ethical, hygienic, and locally sourced chicken & eggs delivered
            directly to your doorstep with care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-medium hover:opacity-90 active:scale-[0.98] transition"
            >
              Shop Fresh
            </Link>

            <Link
              to="/about"
              className="border border-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-black active:scale-[0.98] transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-soft text-white text-xs tracking-wide">
          ↓ Scroll
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-6 border-t border-gray-100 relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-6 text-center text-sm">
          <div>
            <p className="font-semibold text-primary">100% Fresh</p>
            <p className="text-gray-500 text-xs">Daily Sourced</p>
          </div>

          <div>
            <p className="font-semibold text-primary">Hygienic</p>
            <p className="text-gray-500 text-xs">Clean Processing</p>
          </div>

          <div>
            <p className="font-semibold text-primary">Local Farms</p>
            <p className="text-gray-500 text-xs">Direct Partnership</p>
          </div>
        </div>
      </section>

      {/* FLOATING CATEGORY PILLS */}
      <section className="bg-white py-6 my-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 ">
            {[
              "Desi Chicken",
              "Broiler Chicken",
              "Desi Eggs",
              "Broiler Eggs",
            ].map((category) => (
              <Link
                key={category}
                to="/products"
                className="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Best Sellers
            </h2>
            <p className="text-gray-600 text-sm">
              Fresh picks loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
