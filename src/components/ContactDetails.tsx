import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import CustomButton from "./ui/CustomButton";
import { useNavigate } from "react-router-dom";
import { useContactFormSubmission } from "../hooks/useContactFormSubmission";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
  website: string; // honeypot
};

const ContactDetails = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
      website: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [message, setMessage] = useState<string>("");
  const contactMutation = useContactFormSubmission();

  // Handle mutation status changes
  useEffect(() => {
    if (contactMutation.isSuccess && contactMutation.data) {
      setMessage(contactMutation.data.message);
      setSubmitStatus("success");
      reset();
      navigate("/thank-you");
      setTimeout(() => setSubmitStatus(null), 3000);
    } else if (contactMutation.isError) {
      setSubmitStatus("error");
      setMessage(contactMutation.error?.message || "Something went wrong. Please try again.");
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  }, [contactMutation.isSuccess, contactMutation.isError, contactMutation.data, contactMutation.error, reset, navigate]);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitStatus(null);

    // Honeypot check
    if (data.website) {
      reset();
      return;
    }

    const payload = {
      data: {
        names: {
          first_name: data.firstName,
          last_name: data.lastName
        },
        email: data.email,
        phone: data.phone,
        subject: "Contact Form Submission",
        message: data.message
      }
    };

    contactMutation.mutate(payload);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 mb-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight"
        >
          Please reach out to us
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-lg text-textcolor md:text-xl font-switzer font-medium mb-10 max-w-3xl"
        >
          We're here to help you with premium corporate gifts, customized
          promotional items, luxury gift sets, and personalized branding
          solutions. Reach out to our team for creative concepts and superior
          quality products tailored to your business needs.
        </motion.p>

        {/* Left-Right Layout: Form & Contact Info (Reversed) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-start">
          {/* Left Side: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="get-free-quote"
              noValidate
              className="w-full"
            >
              <h2 className="text-3xl sm:text-4xl font-tanker text-textcolor mb-3">
                Send us a message
              </h2>
              <p className="text-textcolor font-switzer text-base sm:text-lg mb-8">
                Have a question or something to share? Send us a message. we'll
                get back to you shortly!
              </p>

              <div className="relative">
                {/* Success message */}
                {submitStatus === "success" && (
                  <div className="text-center py-16 absolute inset-0 flex flex-col items-center justify-center bg-white/95 rounded-lg z-10">
                    <div className="text-7xl mb-6">🚀</div>
                    <p className="text-2xl text-green-700 font-semibold font-switzer">
                      {message}
                    </p>
                  </div>
                )}

                {/* Error message */}
                {submitStatus === "error" && (
                  <div className="text-center py-16 absolute inset-0 flex flex-col items-center justify-center bg-white/95 rounded-lg z-10">
                    <div className="text-7xl mb-6">⚠️</div>
                    <p className="text-2xl text-red-600 font-semibold mb-4 font-switzer">
                      Sorry, something went wrong.
                    </p>
                    <p className="text-lg font-switzer">{message}</p>
                  </div>
                )}

                {/* Form inputs (shown only when no submit status) */}
                {submitStatus === null && (
                  <div className="space-y-6">
                    {/* Two column grid for first name and last name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-textcolor font-tanker font-medium mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register("firstName", {
                            required: "First name is required",
                          })}
                          placeholder="Enter your first name"
                          className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-textcolor font-tanker focus:outline-none transition-colors ${errors.firstName
                            ? "border-red-500"
                            : "border-highlighttext"
                            }`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 font-switzer">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-textcolor font-tanker font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register("lastName", {
                            required: "Last name is required",
                          })}
                          placeholder="Enter your last name"
                          className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-textcolor font-tanker focus:outline-none transition-colors ${errors.lastName
                            ? "border-red-500"
                            : "border-highlighttext"
                            }`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 font-switzer">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Two column grid for email and phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-textcolor font-tanker font-medium mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          placeholder="Enter your email address"
                          className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-textcolor font-tanker focus:outline-none transition-colors ${errors.email
                            ? "border-red-500"
                            : "border-highlighttext"
                            }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 font-switzer">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-textcolor font-tanker font-medium mb-2"
                        >
                          Phone no
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone", {
                            required: "Phone is required",
                          })}
                          placeholder="Enter your phone number"
                          className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-textcolor font-tanker focus:outline-none transition-colors ${errors.phone
                            ? "border-red-500"
                            : "border-highlighttext"
                            }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 font-switzer">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-textcolor font-tanker font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        {...register("message", {
                          required: "Message is required",
                        })}
                        placeholder="Enter your message"
                        rows={6}
                        className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-textcolor font-tanker focus:outline-none transition-colors resize-none ${errors.message
                          ? "border-red-500"
                          : "border-highlighttext"
                          }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 font-switzer">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Honeypot */}
                    <div className="hidden">
                      <input type="text" {...register("website")} />
                    </div>

                    {/* Privacy */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        {...register("privacy", { required: true })}
                        className={`w-5 h-5 border-2 transition ${errors.privacy
                          ? "border-red-500 accent-red-500"
                          : "border-textcolor accent-textcolor"
                          }`}
                      />
                      <span
                        className={`text-sm ml-2 font-switzer ${errors.privacy ? "text-red-600" : "text-textcolor"
                          }`}
                      >
                        I agree with the{" "}
                        <a
                          href="/privacy-policy"
                          className="underline underline-offset-2 decoration-1 decoration-highlighttext"
                        >
                          Privacy Policy
                        </a>{" "}
                        and consent to being contacted about my inquiry
                      </span>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-start">
                      <CustomButton
                        type="submit"
                        disabled={contactMutation.isPending || isSubmitting}
                        className="h-[50px] w-full sm:w-fit px-8 bg-textcolor! text-white! text-base sm:text-lg font-tanker! tracking-wide"
                        text={contactMutation.isPending || isSubmitting ? "Sending..." : "Send Message"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Side: Contact Information & Social Media (Dark Card) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="border border-textcolor rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col">
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-tanker text-textcolor mb-4">
                  Hi there! We're always here and happy to help you anytime.
                </h3>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="space-y-4 mb-8 flex-1"
              >
                <motion.div
                  variants={fadeInUp}
                  className=" rounded-lg p-4 flex items-start gap-4"
                >
                  <div className="shrink-0 mt-1">
                    <FaEnvelope className="text-textcolor text-xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-textcolor font-tanker font-medium mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:vivek@baharnani.com"
                      className="text-textcolor font-switzer hover:text-textcolor/80 transition-colors"
                    >
                      vivek@baharnani.com
                    </a>
                    <a
                      href="mailto:info@baharnani.com"
                      className="text-textcolor font-switzer hover:text-textcolor/80 transition-colors"
                    >
                      info@baharnani.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className=" rounded-lg p-4 flex items-start gap-4"
                >
                  <div className="shrink-0 mt-1">
                    <FaPhone className="text-textcolor text-xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-textcolor font-tanker font-medium mb-1">
                      Phone Number
                    </p>
                    <a
                      href="tel:+971526240517"
                      className="text-textcolor font-switzer hover:text-textcolor/80 transition-colors"
                    >
                      (+971) 52 624 0517 - WhatsApp / Phone Call
                    </a>
                    <a
                      href="tel:+97143805587"
                      className="text-textcolor font-switzer hover:text-textcolor/80 transition-colors"
                    >
                      (+971) 4 380 5587 - Landline
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className=" rounded-lg p-4 flex items-start gap-4"
                >
                  <div className="shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-textcolor text-xl" />
                  </div>
                  <div>
                    <p className="text-textcolor font-tanker font-medium mb-1">
                      Address
                    </p>
                    <p className="text-textcolor font-switzer">
                      Baharnani Advertising L.L.C, Al Quoz – Al Quoz 3 – Dubai,
                      Dubai, إمارة دبيّ 49757, United Arab Emirates
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="border-t border-gray-700 pt-6">
                  <p className="text-textcolor font-tanker font-medium mb-4">
                    Connect with us
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://www.linkedin.com/company/baharnaniadvertisingdubai/"
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-textcolor hover:text-textcolor/80 transition-colors"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/baharnaniadv/"
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-textcolor hover:text-textcolor/80 transition-colors"
                    >
                      <FaInstagram className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/BAHARNANIADV"
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-textcolor hover:text-textcolor/80 transition-colors"
                    >
                      <FaFacebookF className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/+971526240517"
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-textcolor hover:text-textcolor/80 transition-colors"
                    >
                      <IoLogoWhatsapp className="text-2xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Address Section with Google Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-tanker tracking-tight text-textcolor mb-2">
              Our Address :
            </h3>
            <p className="text-lg text-textcolor font-switzer font-medium">
              Baharnani Advertising L.L.C <br />
              Al Quoz – Al Quoz 3 – Dubai <br />
              Dubai, إمارة دبيّ 49757 <br />
              United Arab Emirates
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] overflow-hidden"
          >
            <iframe
              className="rounded-2xl border-2 border-textcolor"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2573929!2d55.2318626!3d25.1626598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c4ae8eb43b:0x34670daac58a6f22!2sBaharnani%20Advertising%20LLC%20-%20Corporate%20gifts%20Company%20Dubai%20%7C%20Exhibition%20stand%20Contractors%20Dubai!5e0!3m2!1sen!2som!4v1703837058988!5m2!1sen!2som"
              style={{
                height: "100%",
                width: "100%",
                border: "2px solid #3F3F9F",
                borderRadius: "20px",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
