import CommonHero from "../components/ui/CommonHero";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div>
      <CommonHero
        title="Connect With Dubai's Premier Corporate Gift Supplier"
        titlesuffix=""
        subtitle="Ready to elevate your corporate gifting? Our team is here to help with custom gift solutions, bulk orders, branding inquiries, and partnership opportunities. Get in touch today and let's create memorable gifts that strengthen your business relationships."
        imageUrl="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
        buttonLink="#"
        buttonText="Get in Touch"
      />
      <ContactDetails />
    </div>
  );
};

export default Contact;
