import CustomButton from "./CustomButton";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useForm, type FieldValues } from "react-hook-form";
import { useState } from "react";
import footerlogo from "../../assets/images/icons/logo.svg";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { PiLinkSimpleDuotone } from "react-icons/pi";
import { SlSocialDropbox } from "react-icons/sl";
import { PiMailboxDuotone } from "react-icons/pi";
import { GoLaw } from "react-icons/go";





const Footer = () => {
  const [message, setMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/contact/create`,
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            formType: "NEWSLETTER",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();

      if (responseData.status === false) {
        throw new Error(responseData.message);
      }

      setMessage(responseData.message);

      setTimeout(() => setMessage(""), 3000);

      reset();
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <>
      <footer className="w-full bg-linear-to-r from-textcolor via-textcolor/90 to-textcolor/80 relative overflow-hidden">
        {/* SVG Pattern Overlay - same as hero section */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="w-full mx-auto px-5 pt-10 sm:px-6 lg:px-8 xl:px-12 rounded-t-3xl relative z-10">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">
              {/* About */}
              <div className="col-span-2">
                <div className="text-bg md:text-5xl text-3xl font-tanker flex items-center gap-2 tracking-tighter">
                  <Link to="/">
                    <img
                      src={footerlogo}
                      alt="baharnani advertising logo"
                      className="w-50 h-25"
                    />
                  </Link>
                </div>
                <a target="_blank" href="/">
                  <h3 className="text-bg text-xl  font-tanker tracking-widest mt-2 bg-bg/10 px-2 py-1 rounded-md w-fit border border-dashed border-bg/60 ">
                    Baharnani Advertising L.L.C.
                  </h3>
                </a>

                <p className="mt-4 text-bg text-lg font-tanker  leading-none max-w-sm">
                  One place brings you the best corporate gift ideas, by just
                  clicking a button you can get the gift you want at a
                  competitive price!
                </p>
                <div className="flex items-center gap-10 mt-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg hover:text-[#499F68] transition-colors duration-300"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg hover:text-[#499F68] transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg hover:text-[#499F68] transition-colors duration-300"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-[#499F68] text-2xl font-tanker flex items-center gap-2">
                  <div className="h-6 w-1 bg-bg"></div>
                  Useful Links{" "}
                  <PiLinkSimpleDuotone className="inline-block text-bg" />
                </h3>
                <ul className="text-bg text-xl font-tanker mt-5">
                  <Link to="/">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Home
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/about-us">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        About
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/products">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Products
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <a href="https://stagingv1.corporategiftsdubaii.ae/blog">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Blog
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </a>
                  <Link to="/contact-us">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Contact
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                </ul>
              </div>

              {/* Products */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-[#499F68] text-2xl font-tanker flex items-center gap-2">
                  <div className="h-6 w-1 bg-bg"></div>
                  Product Categories{" "}
                  <SlSocialDropbox className="inline-block text-bg" />
                </h3>
                <ul className="text-bg text-xl font-tanker mt-5">
                  <Link to="/product-category/premium-gift-sets">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Premium gift sets
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/luxury-corporate-gifts-dubai">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Luxury corporate gifts
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/apparel-and-accessories">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Apparel and accessories
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/bags-and-travel">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Bags and travel
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/office-and-stationary">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Office and stationary
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/technology-and-accessories">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Technology and accessories
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/eating-and-drinking">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Eating and drinking
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/sports-and-recreation">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Sports and recreation
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/product-category/eco-friendly">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Eco friendly
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                </ul>
              </div>

              {/* Legals */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-[#499F68] text-2xl font-tanker flex items-center gap-2">
                  <div className="h-6 w-1 bg-bg"></div>
                  Legals <GoLaw className="inline-block text-bg" />
                </h3>
                <ul className="text-bg text-xl font-tanker mt-5">
                  <Link to="/terms-and-conditions">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Terms & Condition
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/privacy-policy">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Privacy Policy
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="/cookie-policy">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Cookie Policy
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                  <Link to="mailto:amit@baharnani.com">
                    <motion.li
                      className="footer-link group relative flex items-center cursor-pointer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="relative inline-block transition-colors">
                        Support
                        <span className="absolute left-0 -bottom-0.5 h-px bg-[#499F68] w-0 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </motion.li>
                  </Link>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-[#499F68] text-2xl font-tanker mb-5 flex items-center gap-2">
                  <div className="h-6 w-1 bg-bg"></div>
                  Newsletter <PiMailboxDuotone className="inline-block text-bg" />
                </h3>
                <p className="text-bg text-lg font-tanker">
                  Stay updated with our latest news, industry insights, and
                  exclusive offers.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" name="formType" value="newsletter" />
                  <input
                    type="email"
                    required
                    {...register("email")}
                    placeholder="Enter Your Email"
                    className="w-full mt-5 px-4 py-3 bg-neutral-800 border border-bg rounded-lg text-bg placeholder:text-bg/50 text-lg focus:outline-none focus:border-bg focus:ring-1 focus:ring-bg hover:border-bg transition-all duration-300 ease-in-out font-tanker!"
                  />
                  <CustomButton
                    type="submit"
                    className="h-[50px] w-fit bg-neutral-800! border! border-bg! text-bg! mt-5 font-tanker!"
                    text={isSubmitting ? "Submitting..." : "Subscribe Us"}
                    disabled={isSubmitting}
                  />
                </form>
                {message && (
                  <p className="text-green-500 text-base mt-2">{message}</p>
                )}
                {errors.email && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-bg/50 mt-8"></div>

          {/* Bottom Bar */}
          <div className="w-full flex justify-center items-center py-5 px-10 font-switzer">
            <p className="text-bg text-sm sm:text-base md:text-lg leading-none text-left md:text-center">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="text-[#aef6c7] text-sm sm:text-base md:text-lg font-normal">
                {` Baharnani Advertising L.L.C. `}
              </Link>{" "}
              All Rights Reserved.&nbsp; Made with{" "}
              <FaHeart className="inline text-bg text-base" /> by:&nbsp;
              <a
                href="https://www.codecobble.com"
                target="_blank"
                className="text-[#aef6c7] text-sm sm:text-base md:text-lg font-normal "
                rel="noopener noreferrer"
              >
                {` CodeCobble   `}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
