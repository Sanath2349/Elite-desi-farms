import { Link } from "react-router-dom";
import { useFeaturedProducts } from "../features/products/useFeaturedProducts";
import FeaturedProductCard from "../components/product/FeaturedProductCard";
import { ShoppingCart, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  const featuredProducts = useFeaturedProducts();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-start md:items-center justify-center text-center overflow-hidden pt-20 md:pt-0">
        {/* Background Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1703417465970-e1b71f697cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeSUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D"
          alt="Farm background"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 space-y-8 text-white ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Fresh Poultry
            <span className="block text-accent">Straight From Farm</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Ethical, hygienic, and locally sourced chicken & eggs delivered
            directly to your doorstep with care.
          </p>

          <div className="flex flex-row md:flex-row justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="bg-primary text-white py-3 px-5 md:px-8 md:py-3 rounded-xl text-sm font-medium hover:opacity-90 active:scale-[0.98] transition"
            >
              Shop Fresh
            </Link>

            <Link
              to="/about"
              className="border border-white py-3 px-5 md:px-8 md:py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-black active:scale-[0.98] transition"
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

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        {/* Subtle premium background texture - very light */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 space-y-14 relative">
          {/* Enhanced Section Header - premium badge + better spacing */}
          <div className="text-center space-y-5">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase">
              <span className="mr-2 relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
              </span>
              Fresh in 3 Steps
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Fresh poultry delivered straight from farm to your kitchen in
              three simple, hygienic steps
            </p>
          </div>

          {/* Steps with connecting line + premium card enhancements */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 relative pt-8 md:pt-12">
            {/* Horizontal connecting line - desktop only, subtle gradient */}
            <div className="hidden md:block absolute top-[6.5rem] lg:top-[7rem] left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 via-50% to-transparent pointer-events-none" />

            {/* Step 1 */}
            <div
              className="
        group relative text-center space-y-6 
        p-8 md:p-10 rounded-2xl md:rounded-3xl 
        bg-white border border-gray-100/80 
        transition-all duration-400 
        hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 
        hover:-translate-y-3 hover:border-[var(--color-primary)]/30
      "
            >
              <div className="flex  items-center  gap-4 justify-center">
                <div
                  className="
          relative  w-10 h-10 flex items-center justify-center 
          rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#134d2a]
          text-white text-2xl font-bold 
          shadow-xl shadow-[var(--color-primary)]/25 
          ring-1 ring-[var(--color-primary)]/40 ring-offset-4 ring-offset-white
          transition-transform duration-400 group-hover:scale-110
        "
                >
                  1
                </div>

                <div
                  className="
           w-16 h-16 flex items-center justify-center 
          rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]
          transition-all duration-400 group-hover:bg-[var(--color-primary)]/20 group-hover:scale-110
        "
                >
                  <ShoppingCart size={32} strokeWidth={1.6} />
                </div>
              </div>
              {/* Upgraded number - gradient + shadow + ring */}

              <h3 className="font-bold text-xl md:text-2xl text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                Choose Fresh
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                Select premium desi or broiler poultry from our daily fresh
                stock.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="
        group relative text-center space-y-6 
        p-8 md:p-10 rounded-2xl md:rounded-3xl 
        bg-white border border-gray-100/80 
        transition-all duration-400 
        hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 
        hover:-translate-y-3 hover:border-[var(--color-primary)]/30
      "
            >
              <div className="flex  items-center  gap-4 justify-center">
                <div
                  className="
          relative  w-10 h-10 flex items-center justify-center 
          rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#134d2a]
          text-white text-2xl font-bold 
          shadow-xl shadow-[var(--color-primary)]/25 
          ring-1 ring-[var(--color-primary)]/40 ring-offset-4 ring-offset-white
          transition-transform duration-400 group-hover:scale-110
        "
                >
                  2
                </div>

                <div
                  className="
           w-16 h-16 flex items-center justify-center 
          rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]
          transition-all duration-400 group-hover:bg-[var(--color-primary)]/20 group-hover:scale-110
        "
                >
                  <ShieldCheck size={32} strokeWidth={1.6} />
                </div>
              </div>

              <h3 className="font-bold text-xl md:text-2xl text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                Hygienic Processing
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                Cleanly processed under strict hygiene standards.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="
        group relative text-center space-y-6 
        p-8 md:p-10 rounded-2xl md:rounded-3xl 
        bg-white border border-gray-100/80 
        transition-all duration-400 
        hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 
        hover:-translate-y-3 hover:border-[var(--color-primary)]/30
      "
            >
              <div className="flex  items-center  gap-4 justify-center">
                <div
                  className="
          relative  w-10 h-10 flex items-center justify-center 
          rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#134d2a]
          text-white text-2xl font-bold 
          shadow-xl shadow-[var(--color-primary)]/25 
          ring-1 ring-[var(--color-primary)]/40 ring-offset-4 ring-offset-white
          transition-transform duration-400 group-hover:scale-110
        "
                >
                  3
                </div>

                <div
                  className="
           w-16 h-16 flex items-center justify-center 
          rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]
          transition-all duration-400 group-hover:bg-[var(--color-primary)]/20 group-hover:scale-110
        "
                >
                  <Truck size={32} strokeWidth={1.6} />
                </div>
              </div>

              <h3 className="font-bold text-xl md:text-2xl text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                Delivered to Your Door
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                Freshly packed and delivered safely to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Farm Promise Section */}
      <section className="relative bg-gradient-to-b from-[var(--color-primary)]/5 to-white py-16 md:py-24 overflow-hidden">
        {/* Subtle organic texture for authenticity */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,#4ade80_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#22c55e_0%,transparent_50%)] [background-size:200%_200%] animate-[gentle-wave_15s_ease-in-out_infinite]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 md:space-y-12">
          {/* Eyebrow Text */}
          <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[var(--color-primary)] text-sm font-medium tracking-wide uppercase border border-[var(--color-primary)]/20">
            Our Promise
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Raised Naturally. Delivered Fresh.
          </h2>

          {/* Body Story */}
          <div className="max-w-2xl mx-auto space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              We partner directly with trusted local farms to ensure hygienic
              processing and same-day delivery.
            </p>
            <p className="font-medium">
              No storage. No middlemen. Just clean, fresh poultry.
            </p>
          </div>

          {/* Rounded Farm Image */}
          <div className="relative mx-auto w-full max-w-md md:max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10 ring-1 ring-[var(--color-primary)]/10 transition-all duration-500 hover:shadow-3xl hover:shadow-[var(--color-primary)]/20 hover:scale-[1.02]">
            {/* Placeholder farm image - replace with your asset */}
            <img
              src="https://images.unsplash.com/photo-1517419800355-7ea1a4b1f68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG91bHRyeSUyMGZhcm18ZW58MHx8MHx8fDA%3D"
              alt="Local farm with free-range poultry under natural sunlight"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Optional overlay for premium depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Optional CTA Button for emotional conversion */}
          <a
            href="#order"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-semibold text-base transition-all duration-300 hover:bg-[var(--color-primary-600)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transform hover:-translate-y-1"
          >
            Start Your Order
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          {/* Top section - Brand + quick links + newsletter (minimal) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 md:pb-16 border-b border-[var(--color-border)]">
            {/* Brand / Logo area */}
            <div className="md:col-span-4 text-center md:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                {/* Replace with your actual logo or simple leaf icon */}
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <span className="text-xl font-bold">F</span>{" "}
                  {/* or your icon */}
                </div>
                <span className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
                  FreshFarm
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
                Premium desi & broiler poultry — raised naturally, delivered
                fresh.
              </p>
            </div>

            {/* Quick links - minimal, 2-3 columns on desktop */}
            <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
              <div>
                <h4 className="text-gray-900 font-medium mb-4 text-sm uppercase tracking-wider">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/farms"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      Our Farms
                    </a>
                  </li>
                  <li>
                    <a
                      href="/process"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 font-medium mb-4 text-sm uppercase tracking-wider">
                  Support
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="/faq"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/track"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      Track Order
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 font-medium mb-4 text-sm uppercase tracking-wider">
                  Legal
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refund"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Small newsletter CTA - optional but trendy for retention */}
            {/* <div className="md:col-span-3 text-center md:text-left">
              <h4 className="text-gray-900 font-medium mb-4 text-sm uppercase tracking-wider">
                Stay Fresh
              </h4>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)]/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary)]/90 transition-all"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-gray-500">
                Get updates on fresh stock & offers.
              </p>
            </div> */}
          </div>
          <div className="mt-5 border-t border-gray-100/50 text-center text-xs text-gray-500">
            <p>
              Developed with ❤️ by{" "}
              <a
                href="https://github.com/Sanath2349"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline font-medium transition-all"
              >
                Sanath Reddy
              </a>
            </p>
          </div>

          {/* Bottom bar - super minimal */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} FreshFarm. All rights reserved.</p>

            <div className="flex items-center gap-6">
              {/* Social icons - use lucide-react or heroicons */}
              <a
                href="#"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.92 3.97 2.96-1.47 1.15-3.32 1.84-5.33 1.84-.35 0-.69-.02-1.03-.06 1.92 1.23 4.2 1.95 6.65 1.95 7.98 0 12.34-6.61 12.34-12.34 0-.19 0-.37-.01-.56A8.82 8.82 0 0022.46 6z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.225.273 2.679.116 7.036.057 8.316.044 8.725.044 12c0 3.275.013 3.684.072 4.964.157 4.357 2.579 6.811 6.936 6.964C8.332 23.986 8.741 24 12 24s3.659-.014 4.939-.072c4.357-.157 6.779-2.611 6.936-6.964.059-1.28.072-1.689.072-4.964 0-3.275-.013-3.684-.072-4.964-.157-4.357-2.579-6.811-6.936-6.964C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
