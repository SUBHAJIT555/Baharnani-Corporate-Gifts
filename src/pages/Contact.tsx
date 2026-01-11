import CommonHero from "../components/ui/CommonHero";
import ContactDetails from "../components/ContactDetails";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baharnani Corporate Gifts Dubai",
    "image": "https://corporategiftsdubaii.ae/ui/assets/logo-B4KFUfAZ.svg",
    "@id": "https://corporategiftsdubaii.ae/#localbusiness",
    "url": "https://corporategiftsdubaii.ae/",
    "telephone": "+971551061045",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baharnani Advertising L.L.C, Al Quoz – Al Quoz 3 – Dubai",
      "addressLocality": "Dubai",
      "postalCode": "49757",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.162655,
      "longitude": 55.2344375
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.instagram.com/baharnaniadv/",
      "https://www.linkedin.com/company/baharnaniadvertisingdubai/"
    ]
  };

  return (
    <div>
      <Seo title={"Contact Us | Get in Touch for Corporate Gifts in Dubai"} description={"One place brings you the best corporate gift ideas, by just clicking a button you can get the gift you want at a competitive price!"} canonical="https://corporategiftsdubaii.ae/contact-us" og_title="Contact Us | Get in Touch for Corporate Gifts in Dubai" og_desc="One place brings you the best corporate gift ideas, by just clicking a button you can get the gift you want at a competitive price!" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <CommonHero
        title="Connect With Dubai's Premier Corporate Gift Supplier"
        titlesuffix=""
        subtitle="Ready to elevate your corporate gifting? Our team is here to help with custom gift solutions, bulk orders, branding inquiries, and partnership opportunities. Get in touch today and let's create memorable gifts that strengthen your business relationships."
        imageUrl="/assets/images/Hero-images/Contact-hero.webp"
        buttonLink="#"
        buttonText="Get in Touch"
      />
      <ContactDetails />
    </div>
  );
};

export default Contact;
