import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { lazy } from "react";
import Home from "../pages/Home";
const About = lazy(() => import("../pages/About"));
const Product = lazy(() => import("../pages/Product"));
const ApparelAndAccessories = lazy(() => import("../pages/ApparelAndAccessories"));
const OfficeAndStationary = lazy(() => import("../pages/OfficeAndStationary"));
const BagsAndTravels = lazy(() => import("../pages/BagsAndTravels"));
const Quote = lazy(() => import("../pages/Quote"));
const TechnologyAndAccessories = lazy(() => import("../pages/TechnologyAndAccessories"));
const EatingAndDrinking = lazy(() => import("../pages/EatingAndDrinking"));
const SportsAndRecreation = lazy(() => import("../pages/SportsAndRecreation"));
const EcoFriendly = lazy(() => import("../pages/EcoFriendly"));
const GiftSet = lazy(() => import("../pages/GiftSet"));
const Contact = lazy(() => import("../pages/Contact"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));
const LuxuryCorporateGifts = lazy(() => import("../pages/LuxuryCorporateGifts"));
const Shop = lazy(() => import("../pages/Shop"));
const ThankYou = lazy(() => import("../pages/ThankYou"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element:
      <MainLayout />
    ,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/page/:page", element: <Shop /> },
      { path: "/shop/:category/:slug", element: <ProductDetails /> },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product-category/apparel-and-accessories",
        element: <ApparelAndAccessories />,
      },
      {
        path: "/product-category/apparel-and-accessories/page/:page",
        element: <ApparelAndAccessories />,
      },
      {
        path: "/product-category/bags-and-travel",
        element: <BagsAndTravels />,
      },
      {
        path: "/product-category/bags-and-travel/page/:page",
        element: <BagsAndTravels />,
      },
      {
        path: "/product-category/office-and-stationary",
        element: <OfficeAndStationary />,
      },
      {
        path: "/product-category/office-and-stationary/page/:page",
        element: <OfficeAndStationary />,
      },
      {
        path: "/product-category/technology-and-accessories",
        element: <TechnologyAndAccessories />,
      },
      {
        path: "/product-category/technology-and-accessories/page/:page",
        element: <TechnologyAndAccessories />,
      },
      {
        path: "/product-category/eating-and-drinking",
        element: <EatingAndDrinking />,
      },
      {
        path: "/product-category/eating-and-drinking/page/:page",
        element: <EatingAndDrinking />,
      },
      {
        path: "/product-category/sports-and-recreation",
        element: <SportsAndRecreation />,
      },
      {
        path: "/product-category/sports-and-recreation/page/:page",
        element: <SportsAndRecreation />,
      },
      {
        path: "/product-category/eco-friendly",
        element: <EcoFriendly />,
      },
      {
        path: "/product-category/eco-friendly/page/:page",
        element: <EcoFriendly />,
      },
      {
        path: "/product-category/premium-gift-sets",
        element: <GiftSet />,
      },
      {
        path: "/product-category/premium-gift-sets/page/:page",
        element: <GiftSet />,
      },
      {
        path: "/product-category/luxury-corporate-gifts-dubai",
        element: <LuxuryCorporateGifts />,
      },
      {
        path: "/product-category/luxury-corporate-gifts-dubai/page/:page",
        element: <LuxuryCorporateGifts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/request-quotation",
        element: <Quote />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
