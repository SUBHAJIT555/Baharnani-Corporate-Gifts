import { useQuote } from "../contexts/QuoteContext";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../components/Seo";

const Cart = () => {
    const { items, removeFromQuote, updateQuantity } = useQuote();
    const navigate = useNavigate();

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-textcolor pt-24 sm:pt-28 md:pt-32 py-12 px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-tanker text-bg mb-4">
                        Your Cart is Empty
                    </h2>
                    <p className="text-bg mb-8">
                        Add products to your cart to get started.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 bg-bg hover:bg-bg/70 text-textcolor font-tanker font-medium py-3 px-6 rounded-md transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const handleCheckout = () => {
        navigate("/request-quotation");
    };

    return (
        <div className="min-h-screen bg-textcolor pt-24 sm:pt-28 md:pt-32 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <Seo title="Shopping Cart | Baharnani Corporate Gifts" description="View your shopping cart and proceed to checkout" canonical="https://corporategiftsdubaii.ae/cart" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-tanker text-bg mb-2 flex items-center gap-3">
                        <span className="w-1 h-12 bg-[#0077b6]"></span>
                        Shopping Cart
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-bg shadow-md p-6">
                            <h2 className="text-2xl font-tanker text-textcolor mb-4">
                                Cart Items ({items.length})
                            </h2>
                            <div className="space-y-4">
                                <AnimatePresence>
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="border border-textcolor/40 p-4"
                                        >
                                            <div className="flex gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-md"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-tanker text-textcolor text-lg mb-1 line-clamp-2">
                                                        {item.name}
                                                    </h3>
                                                    {item.short_desc && (
                                                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                                            {item.short_desc}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.quantity - 1)
                                                            }
                                                            className="p-1 hover:bg-gray-100 rounded"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="font-switzer text-textcolor min-w-8 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.quantity + 1)
                                                            }
                                                            className="p-1 hover:bg-gray-100 rounded"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromQuote(item.id)}
                                                    className="p-2 hover:bg-red-500 rounded text-red-600 hover:text-white"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-bg shadow-md p-6 sticky top-4">
                            <h2 className="text-2xl font-tanker text-textcolor mb-4">
                                Order Summary
                            </h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-switzer text-textcolor">
                                        Items ({items.reduce((total, item) => total + item.quantity, 0)})
                                    </span>
                                    <span className="font-tanker text-textcolor">
                                        {items.length} {items.length === 1 ? "item" : "items"}
                                    </span>
                                </div>
                            </div>
                            <div className="border-t border-textcolor/40 pt-4 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-tanker text-textcolor">
                                        Total Items
                                    </span>
                                    <span className="text-lg font-tanker text-textcolor">
                                        {items.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full flex items-center justify-center gap-2 bg-textcolor hover:bg-textcolor/70 text-white font-tanker font-medium py-3 px-8 rounded-md transition-colors"
                            >
                                Proceed to Checkout
                            </button>
                            <Link
                                to="/shop"
                                className="mt-4 w-full flex items-center justify-center gap-2 bg-bg border border-textcolor/40 hover:bg-bg/70 text-textcolor font-tanker font-medium py-3 px-8 rounded-md transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

