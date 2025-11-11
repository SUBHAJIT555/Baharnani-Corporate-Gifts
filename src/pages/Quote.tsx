import { useQuote } from "../contexts/QuoteContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  additionalNotes: string;
}

const Quote = () => {
  const { items, removeFromQuote, updateQuantity, clearQuote } = useQuote();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would send the data to your backend
      console.log("Quote Request:", {
        ...data,
        items: items.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
        })),
      });

      setSubmitMessage("Quote request submitted successfully!");
      reset();
      clearQuote();

      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      setSubmitMessage("Failed to submit quote request. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-textcolor pt-24 sm:pt-28 md:pt-32 py-12 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-tanker text-bg mb-4">
            Your Quote Cart is Empty
          </h2>
          <p className="text-bg mb-8">
            Add products to your quote cart to get started.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-bg hover:bg-bg/70 text-textcolor font-tanker font-medium py-3 px-6 rounded-md transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-textcolor pt-24 sm:pt-28 md:pt-32 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-tanker text-bg mb-2 flex items-center gap-3">
            <span className="w-1 h-12 bg-[#0077b6]"></span>
            Quote Information
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-1">
            <div className="bg-bg  shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-tanker text-textcolor mb-4">
                Quoted Items ({items.length})
              </h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
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
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-tanker text-textcolor text-lg mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.category}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.description}
                          </p>
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

          {/* Form Section */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-bg  shadow-md p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city", {
                      required: "City is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-6">
                <label
                  htmlFor="additionalNotes"
                  className="block text-base font-tanker text-textcolor mb-2 "
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  {...register("additionalNotes")}
                  rows={4}
                  placeholder="Any specific requirements or customization?"
                  className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor resize-none"
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    submitMessage.includes("successfully")
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-textcolor hover:bg-textcolor/70 text-white font-tanker font-medium py-3 px-8 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-5 h-5" />
                  {isSubmitting ? "Submitting..." : "Request Quote"}
                </button>
                <Link
                  to="/products"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-bg border border-textcolor/40 hover:bg-bg/70 text-textcolor font-tanker font-medium py-3 px-8 rounded-md transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Products
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
