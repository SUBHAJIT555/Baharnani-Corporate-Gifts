import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ApparelAndAccessories from "../pages/ApparelAndAccessories";
import FoodStuff from "../pages/FoodStuff";
import BuildingMaterials from "../pages/BuildingMaterials";
import Quote from "../pages/Quote";
import Contracting from "../pages/Contracting";
import ImportAndExport from "../pages/ImportAndExport";
import ElectronicsAndIT from "../pages/ElectronicsAndIT";
import ChemicalsAndAdditives from "../pages/ChemicalsAndAdditives";
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
        path: "/products/food-stuff",
        element: <FoodStuff />,
      },
      {
        path: "/products/building-materials",
        element: <BuildingMaterials />,
      },
      {
        path: "/products/contracting-solutions",
        element: <Contracting />,
      },
      {
        path: "/products/import-and-export",
        element: <ImportAndExport />,
      },
      {
        path: "/products/electronics-and-it",
        element: <ElectronicsAndIT />,
      },
      {
        path: "/products/chemicals-and-additives",
        element: <ChemicalsAndAdditives />,
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
