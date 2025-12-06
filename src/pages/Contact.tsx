import CommonHero from "../components/ui/CommonHero";
import ContactDetails from "../components/ContactDetails";
import Seo from "../components/Seo";

const Contact = () => {
  return (
    <div>
      <Seo title={"Contact Us | Get in Touch for Corporate Gifts in Dubai"} description={"One place brings you the best corporate gift ideas, by just clicking a button you can get the gift you want at a competitive price!"} canonical="https://corporategiftsdubaii.ae/contact-us" og_title="Contact Us | Get in Touch for Corporate Gifts in Dubai" og_desc="One place brings you the best corporate gift ideas, by just clicking a button you can get the gift you want at a competitive price!" />
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
