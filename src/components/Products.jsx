import { Link } from "react-router-dom";
import Button from "./PrimaryBtn";
import { products } from "../product/data";
import { Lock, ShieldCheck } from "lucide-react";

export default function Products() {

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="heading">
                        Our Products
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Explore premium peptide products
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {products.map((product, index) => (
                        <Link
                            to={`/${product.slug}`}
                            key={product.id}
                            className="group bg-white border border-gray-200 p-2 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className=" rounded-md object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Product Content */}
                            <div className="md:p-4 p-1.5">
                                {/* Price Section */}
                                <div className="flex items-center justify-between mb-5 gap-4">
                                    <div>
                                        <p className="text-lg md:text-xl font-semibold text-slate-900">
                                            {product.name}
                                        </p>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <div className="flex items-end justify-end gap-1">
                                            <span className="text-xl font-bold text-(--primary-color)">
                                                ${product.price}
                                            </span>
                                            <span className="text-sm text-slate-500 mb-0.5">
                                                USD
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button 
                                    className="w-full bg-(--primary-color) hover:bg-(--secondary-color) text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 transition">
                                    <Lock size={18} />
                                    Add To Cart
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500">
                                    <ShieldCheck size={14} />
                                    <span>100% Secure Checkout</span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}