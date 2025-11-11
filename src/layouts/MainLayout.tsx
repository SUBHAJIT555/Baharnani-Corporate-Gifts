import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/ui/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import WhatsAppButton from "../components/ui/WhatAppButton";
import FloatingCartButton from "../components/ui/FloatingCartButton";
import Footer from "../components/ui/Footer";
import { LenisScrollHandler } from "../components/LenisScrollHandler";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <LenisScrollHandler />
      <Navbar />
      <main className="grow w-full overflow-x-hidden">
        <Outlet />
      </main>

      <ScrollToTop />
      <ScrollRestoration />
      <FloatingCartButton />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};
