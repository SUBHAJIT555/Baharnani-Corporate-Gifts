import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-bg">
            {/* Dark top section for header visibility */}
            <div className="w-full bg-gradient-to-r from-textcolor via-textcolor/90 to-textcolor/80 pt-24 sm:pt-28 md:pt-32 pb-8">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
            </div>

            {/* Main 404 Content */}
            <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-8 pb-16">
                <div className="max-w-4xl w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* 404 Number */}
                        <div className="relative mb-8">
                            <h1 className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-tanker text-textcolor/10 leading-none select-none">
                                404
                            </h1>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-tanker text-textcolor"
                                >
                                    Oops!
                                </motion.div>
                            </div>
                        </div>

                        {/* Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4">
                                Page Not Found
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl font-switzer text-textcolor/70 max-w-2xl mx-auto leading-relaxed">
                                The page you're looking for doesn't exist or has been moved.
                                Don't worry, even the best gifts sometimes get misplaced!
                            </p>
                        </motion.div>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="w-24 h-1 bg-textcolor mx-auto mb-8 rounded-full"
                        />

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            {/* Go Home Button */}
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 bg-textcolor hover:bg-textcolor/70 text-white font-tanker font-medium py-3 px-8 rounded-md transition-colors duration-200 w-full sm:w-auto"
                            >
                                <Home className="w-5 h-5" />
                                Go Home
                            </Link>

                            {/* Shop Button */}
                            <Link
                                to="/shop"
                                className="inline-flex items-center justify-center gap-2 bg-bg border-2 border-textcolor hover:bg-textcolor hover:text-white text-textcolor font-tanker font-medium py-3 px-8 rounded-md transition-colors duration-200 w-full sm:w-auto"
                            >
                                <Search className="w-5 h-5" />
                                Browse Shop
                            </Link>

                            {/* Back Button */}
                            <button
                                onClick={() => self.history.back()}
                                className="inline-flex items-center justify-center gap-2 text-textcolor hover:text-textcolor/70 font-switzer font-medium transition-colors duration-200"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Go Back
                            </button>
                        </motion.div>

                        {/* Decorative Elements */}
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="mt-12 sm:mt-16"
                        >
                            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                                {[1, 2, 3].map((item) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.9 + item * 0.1 }}
                                        className="aspect-square rounded-lg bg-textcolor/5 border border-textcolor/10"
                                    />
                                ))}
                            </div>
                        </motion.div> */}

                        {/* Help Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="mt-8 text-sm font-switzer text-textcolor/50"
                        >
                            Need help? <Link to="/contact" className="text-textcolor hover:underline">Contact us</Link>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
