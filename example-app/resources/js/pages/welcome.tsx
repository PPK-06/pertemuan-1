import { Head, Link } from '@inertiajs/react';
import { ShoppingCart, Search, Menu, Star } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    rating: number;
    image_color: string;
}

export default function Welcome({ products }: { products: Product[] }) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Head title="E-Commerce Landing Page" />

            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                ShopFlow
                            </span>
                        </div>
                        
                        <div className="hidden md:flex flex-1 mx-8">
                            <div className="relative w-full max-w-xl">
                                <input 
                                    type="text" 
                                    placeholder="Search products..." 
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-blue-600 transition">
                                <ShoppingCart className="h-6 w-6" />
                            </button>
                            <button className="md:hidden text-gray-600 hover:text-blue-600 transition">
                                <Menu className="h-6 w-6" />
                            </button>
                            <a href="/login" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main>
                <div className="relative bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 sm:pt-16 lg:pt-20 xl:pt-28">
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Premium products</span>{' '}
                                        <span className="block text-blue-600 xl:inline">for your lifestyle</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Discover our curated collection of high-quality electronics, fashion, and home essentials. Designed to elevate your everyday experience.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-full shadow">
                                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition hover:scale-105 transform duration-200">
                                                Shop Collection
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="h-56 w-full bg-gradient-to-br from-blue-50 to-indigo-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                            <div className="relative w-3/4 h-3/4 bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl border border-white/60 p-8 flex flex-col items-center justify-center gap-4 animate-pulse">
                                <div className="w-32 h-32 bg-blue-200/50 rounded-full"></div>
                                <div className="h-4 w-48 bg-blue-200/50 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Products from DB */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Trending Now</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                <Link href={`/products/${product.id}`} key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group block">
                                    <div className={`h-48 w-full ${product.image_color} flex items-center justify-center`}>
                                        <span className="text-gray-400 font-medium">Image Placeholder</span>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-1 mb-2">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate group-hover:text-blue-600 transition">{product.name}</h3>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                            <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-600 transition transform hover:scale-110" onClick={(e) => e.preventDefault()}>
                                                <ShoppingCart className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center col-span-full py-10">No products found. Did you run the seeder?</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
