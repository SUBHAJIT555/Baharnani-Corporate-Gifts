import { AlignJustify, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assets/images/icons/logo.svg"
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Reset mobile dropdown when menu closes
      setIsMobileProductsOpen(false);
    }
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false);
      }
    };

    if (isProductsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProductsDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(
        scrollY?.get() > 50 &&
        (scrollY?.getPrevious() ?? 0) < (scrollY?.get() ?? 0)
      );
      setIsAtTop(scrollY.get() === 0);
      setIsScrollingDown((scrollY?.get() ?? 0) > (scrollY?.getPrevious() ?? 0));
    };

    return scrollY.onChange(handleScroll);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { key: 1, name: "Home", href: "/" },
    { key: 2, name: "About", href: "/about-us" },
    { key: 3, name: "Products", href: "/products", hasDropdown: true },
    { key: 4, name: "Shop", href: "/shop" },
    { key: 5, name: "Blog", href: "https://stagingv1.corporategiftsdubaii.ae/blog" },
    { key: 6, name: "Contact", href: "/contact-us" },
  ];

  const productCategories = [
    {
      id: "1",
      title: "Premium gift sets",
      link: "/product-category/premium-gift-sets",
    },
    {
      id: "2",
      title: "Luxury corporate gifts",
      link: "/product-category/luxury-corporate-gifts-dubai",
    },
    {
      id: "3",
      title: "Apparel and accessories",
      link: "/product-category/apparel-and-accessories",
    },
    {
      id: "4",
      title: "Bags and travel",
      link: "/product-category/bags-and-travel",
    },
    {
      id: "5",
      title: "Office and stationary",
      link: "/product-category/office-and-stationary",
    },
    {
      id: "6",
      title: "Technology and accessories",
      link: "/product-category/technology-and-accessories",
    },
    {
      id: "7",
      title: "Eating and drinking",
      link: "/product-category/eating-and-drinking",
    },

    {
      id: "8",
      title: "Sports and recreation",
      link: "/product-category/sports-and-recreation",
    },
    {
      id: "9",
      title: "Eco friendly",
      link: "/product-category/eco-friendly",
    },
  ];

  return (
    <>
      <div className="flex justify-center w-full overflow-x-hidden">
        {/* Navbar */}
        <nav
          className={`fixed top-0 w-11/12 mx-auto xl:w-full z-30 transition-all duration-300 max-w-full`}
        >
          <motion.div
            variants={{
              visible: { y: 0 },
              hidden: { y: "-140%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`max-w-7xl mx-auto flex justify-between items-center px-5 py-4 rounded-lg mt-4 bg-[#080f0f]/20    ${(isAtTop && !isMenuOpen) || isScrollingDown
              ? "bg-transparent"
              : "bg-[#080f0f]/20 backdrop-blur-sm shadow-md"
              }`}
          >
            <div className="mr-auto">
              {/* <h1 className="text-2xl md:text-2xl lg:text-3xl font-tanker  text-[#e1e1e1] select-none">
                Leading Network LLC
              </h1> */}
              <Link to="/">
                <img
                  src={logo}
                  alt="Leading Network LLC"
                  className="w-40"
                />
              </Link>
            </div>

            <ul className="hidden lg:flex space-x-8 list-none">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.key}
                  className="relative text-xl font-tanker text-white! font-medium hover:text-[#499F68]! transition-colors group"
                  whileHover={{ color: "#aef6c7" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.hasDropdown ? (
                    <div
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-1">
                        <Link
                          to={item.href}
                          className="flex items-center gap-1"
                        >
                          {item.name}
                        </Link>
                        <span className="pointer-events-none">
                          {isProductsDropdownOpen ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </span>
                      </div>
                      {/* Top border animation */}
                      <span className="absolute top-0 left-0 w-0 h-px bg-[#499F68] transition-all duration-300 group-hover:w-full"></span>
                      {/* Bottom border animation */}
                      <span className="absolute bottom-0 right-0 w-0 h-px bg-[#499F68] transition-all duration-300 group-hover:w-full"></span>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isProductsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-[#080f0f]/95 backdrop-blur-md rounded-lg shadow-xl border border-[#499F68]/20 overflow-hidden z-50"
                          >
                            <ul className="py-2">
                              {productCategories.map((category) => (
                                <li key={category.id}>
                                  <Link
                                    to={category.link}
                                    className="block px-4 py-2 text-white hover:bg-[#499F68]/20 hover:text-[#499F68] transition-colors text-base font-tanker"
                                    onClick={() => {
                                      setIsProductsDropdownOpen(false);
                                      closeMenu();
                                    }}
                                  >
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.name === "Blog" ? (
                    <a href={item.href} key={index} onClick={closeMenu}>
                      {item.name}
                      {/* Top border animation */}
                      <span className="absolute top-0 left-0 w-0 h-px bg-[#499F68] transition-all duration-300 group-hover:w-full"></span>
                      {/* Bottom border animation */}
                      <span className="absolute bottom-0 right-0 w-0 h-px bg-[#499F68] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <Link to={item.href} key={index} onClick={closeMenu}>
                      {item.name}
                      {/* Top border animation */}
                      <span className="absolute top-0 left-0 w-0 h-px bg-[#499F68] transition-all duration-300 group-hover:w-full"></span>
                      {/* Bottom border animation */}
                      <span className="absolute bottom-0 right-0 w-0 h-px bg-[#499F68] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Hamburger icon for mobile view */}
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-[#e1e1e1] lg:hidden"
              />
            ) : (
              <AlignJustify
                onClick={toggleMenu}
                className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-[#e1e1e1] lg:hidden"
              />
            )}
          </motion.div>
        </nav>
      </div>
      {/* Menu panel that slides up from below */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={isMenuOpen ? { y: "calc(100dvh - 110%)" } : { y: "100vh" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`fixed bottom-0 left-0 right-0 z-100 bg-[#080f0f]/60 backdrop-blur-md shadow-xl rounded-t-3xl overflow-y-auto`}
        style={{ height: "calc(100dvh - 15dvh)" }}
      >
        {/* Scrollable menu items */}
        <div className="min-h-full flex flex-col justify-center items-center py-8 px-4">
          <ul className="space-y-8 text-center w-full">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  color: "#4B5563",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex justify-center"
              >
                {item.hasDropdown ? (
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={item.href}
                        onClick={closeMenu}
                        className="text-2xl text-white font-tanker hover:text-gray-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() =>
                          setIsMobileProductsOpen(!isMobileProductsOpen)
                        }
                        className="text-white font-tanker! hover:text-gray-600 transition-colors"
                        aria-label="Toggle products menu"
                      >
                        {isMobileProductsOpen ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <AnimatePresence>
                      {isMobileProductsOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4 overflow-hidden border-t border-b border-bg/70  p-4 w-full max-w-xs"
                        >
                          {productCategories.map((category) => (
                            <motion.li
                              key={category.id}
                              whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.95 }}
                              className="text-center"
                            >
                              <Link
                                to={category.link}
                                onClick={() => {
                                  setIsMobileProductsOpen(false);
                                  closeMenu();
                                }}
                                className="text-lg text-white/80 font-tanker font-medium hover:text-[#499F68] transition-colors"
                              >
                                {category.title}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="text-2xl text-white font-tanker font-medium hover:text-gray-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
