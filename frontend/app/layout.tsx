import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BitStickerz - Quality Stickers Online",
  description:
    "Choose from a wide selection of quality stickers for your business and personal use",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">
                BitStickerz
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shop
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Categories
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Cart (0)
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Premium Stickers for Every Need
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Browse hundreds of high-quality sticker designs. Perfect for
                laptops, water bottles, notebooks, and more.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Browse Stickers
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  View Categories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Waterproof, durable vinyl stickers that last
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">
                  Quick processing and delivery to your door
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Huge Selection</h3>
                <p className="text-gray-600">
                  Hundreds of unique designs to choose from
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Popular Categories
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Anime & Gaming",
                "Nature & Animals",
                "Pop Culture",
                "Typography",
              ].map((category) => (
                <div
                  key={category}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
                >
                  <div className="w-full h-32 bg from-blue-100 to-purple-100 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    View Collection →
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of happy customers who love our stickers
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Shopping Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-4">
                  BitStickerz
                </h3>
                <p className="text-sm">
                  Your go-to shop for premium quality stickers.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      All Stickers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Best Sellers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Shipping Info
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Returns
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 BitStickerz. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {children}
      </body>
    </html>
  );
}
