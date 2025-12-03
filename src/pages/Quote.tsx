import { useQuote } from "../contexts/QuoteContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteSubmission } from "../hooks/useQuoteSubmission";
import Loading from "../components/ui/Loading";

interface QuoteFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  city: string;
  note: string;
}

const Quote = () => {
  const { items, removeFromQuote, updateQuantity, clearQuote } = useQuote();
  const navigate = useNavigate();
  const quoteMutation = useQuoteSubmission();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address_1: "",
      city: "",
      note: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    if (items.length === 0) {
      return;
    }

    const payload = {
      billing: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address_1: data.address_1,
        city: data.city,
        country: "AE",
      },
      items: items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      note: data.note || undefined,
    };

    try {
      await quoteMutation.mutateAsync(payload);
      reset();
      clearQuote();
      navigate("/thank-you");
    } catch (error) {
      console.error("Quote submission error:", error);
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
                    htmlFor="first_name"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    {...register("first_name", {
                      required: "First name is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    {...register("last_name", {
                      required: "Last name is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.last_name.message}
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
                    htmlFor="address_1"
                    className="block text-base font-tanker text-textcolor mb-2 "
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address_1"
                    {...register("address_1", {
                      required: "Address is required",
                    })}
                    className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor"
                  />
                  {errors.address_1 && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address_1.message}
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
                  htmlFor="note"
                  className="block text-base font-tanker text-textcolor mb-2 "
                >
                  Additional Notes
                </label>
                <textarea
                  id="note"
                  {...register("note")}
                  rows={4}
                  placeholder="Any specific requirements or customization?"
                  className="w-full px-4 py-3 border border-textcolor/40  focus:outline-none focus:ring-2 focus:ring-textcolor focus:border-transparent font-tanker text-textcolor resize-none"
                />
              </div>

              {/* Error Message */}
              {quoteMutation.isError && (
                <div className="mb-6 p-4 rounded-md bg-red-50 text-red-800">
                  {quoteMutation.error?.message || "Failed to submit quote request. Please try again."}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={quoteMutation.isPending}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-textcolor hover:bg-textcolor/70 text-white font-tanker font-medium py-3 px-8 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {quoteMutation.isPending ? (
                    <>
                      <Loading size="sm" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-5 h-5" />
                      <span>Request Quote</span>
                    </>
                  )}
                </button>
                <Link
                  to="/shop"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-bg border border-textcolor/40 hover:bg-bg/70 text-textcolor font-tanker font-medium py-3 px-8 rounded-md transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Shop
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
