import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-textcolor pt-24 sm:pt-28 md:pt-32 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-bg/20 rounded-full animate-ping" />
                            <CheckCircle className="w-24 h-24 text-bg relative z-10" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-tanker text-bg mb-4"
                    >
                        Thank You!
                    </motion.h1>

                    {/* Message */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg sm:text-xl font-switzer text-bg/90 mb-8 leading-relaxed"
                    >
                        Your quote request has been submitted successfully. Our team will
                        review your request and get back to you shortly.
                    </motion.p>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-bg/10 border border-bg/20 rounded-lg p-6 mb-8"
                    >
                        <p className="text-base font-switzer text-bg/80">
                            <strong className="font-tanker">What's Next?</strong>
                            <br />
                            <br />
                            We'll send you a confirmation email with your quote details. Our
                            sales team will contact you within 24-48 hours to discuss your
                            requirements and provide you with a detailed quote.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-bg hover:bg-bg/70 text-textcolor font-tanker font-medium py-3 px-8 rounded-md transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Continue Shopping
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-bg/20 hover:bg-bg/30 border border-bg/40 text-bg font-tanker font-medium py-3 px-8 rounded-md transition-colors"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ThankYou;

