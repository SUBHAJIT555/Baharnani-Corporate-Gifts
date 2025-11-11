import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ApparelAndAccessories from "../pages/ApparelAndAccessories";
import OfficeAndStationary from "../pages/OfficeAndStationary";
import BagsAndTravels from "../pages/BagsAndTravels";
import Quote from "../pages/Quote";
import TechnologyAndAccessories from "../pages/TechnologyAndAccessories";
import EatingAndDrinking from "../pages/EatingAndDrinking";
import SportsAndRecreation from "../pages/SportsAndRecreation";
import EcoFriendly from "../pages/EcoFriendly";
import GiftSet from "../pages/GiftSet";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiePolicy from "../pages/CookiePolicy";
import LuxuryCorporateGifts from "../pages/LuxuryCorporateGifts";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/apparel-and-accessories",
        element: <ApparelAndAccessories />,
      },
      {
        path: "/products/bags-and-travel",
        element: <BagsAndTravels />,
      },
      {
        path: "/products/office-and-stationary",
        element: <OfficeAndStationary />,
      },

      {
        path: "/products/technology-and-accessories",
        element: <TechnologyAndAccessories />,
      },
      {
        path: "/products/eating-and-drinking",
        element: <EatingAndDrinking />,
      },
      {
        path: "/products/sports-and-recreation",
        element: <SportsAndRecreation />,
      },
      {
        path: "/products/eco-friendly",
        element: <EcoFriendly />,
      },
      {
        path: "/products/premium-gift-sets",
        element: <GiftSet />,
      },
      {
        path: "/products/luxury-corporate-gifts",
        element: <LuxuryCorporateGifts />,
      },
      {
        path: "/quote",
        element: <Quote />,
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
    ],
  },
]);
