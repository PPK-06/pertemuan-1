import { Head, Link } from '@inertiajs/react';
import { ShoppingCart, ArrowLeft, Star, Heart, Share2 } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    rating: number;
    image_color: string;
}

export default function ProductDetail({ product }: { product: Product }) {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Head title={`${product.name} - ShopFlow`} />
            
            {/* Simple Navbar */}
            <nav className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        ShopFlow
                    </Link>
                    <button className="text-gray-600 hover:text-blue-600 transition">
                        <ShoppingCart className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to catalog
                </Link>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Product Image */}
                    <div className="mb-10 lg:mb-0">
                        <div className={`aspect-w-1 aspect-h-1 w-full rounded-3xl overflow-hidden ${product.image_color} flex items-center justify-center p-12 min-h-[400px] shadow-sm`}>
                            <div className="w-64 h-64 bg-white/30 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/50">
                                <span className="text-gray-600 font-medium text-lg">Product Image</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between items-start">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition">
                                    <Heart className="w-6 h-6" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition">
                                    <Share2 className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                            <div className="flex items-center text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-blue-600">{product.rating} / 5.0</span>
                            <span className="text-sm text-gray-500 ml-2">(128 reviews)</span>
                        </div>

                        <p className="mt-6 text-3xl text-gray-900 font-bold">${product.price}</p>

                        <div className="mt-6 text-base text-gray-500 space-y-4">
                            <p>{product.description}</p>
                            <p>Premium quality guaranteed. Hand-inspected before shipping to ensure you get the best possible experience.</p>
                        </div>

                        <div className="mt-10 flex space-x-4">
                            <button className="flex-1 bg-blue-600 border border-transparent rounded-full py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition transform hover:scale-105 shadow-md">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to cart
                            </button>
                        </div>
                        
                        <div className="mt-8 border-t border-gray-100 pt-8">
                            <h3 className="text-sm font-medium text-gray-900">Features</h3>
                            <ul className="mt-4 space-y-2 text-sm text-gray-500 list-disc list-inside">
                                <li>Eco-friendly materials</li>
                                <li>1-year warranty included</li>
                                <li>Free shipping on orders over $50</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
