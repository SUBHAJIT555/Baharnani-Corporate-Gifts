import CommonHero from "../components/ui/CommonHero";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div>
      <CommonHero
        title="Get in Touch With Leading Network "
        titlesuffix=""
        subtitle="We're here to help with product inquiries, partnership opportunities, and service support. Reach out to our team for construction materials, foodstuff, chemicals, electronics, or contracting services — we respond within 24 hours."
        imageUrl="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
        buttonLink="#"
        buttonText="Get in Touch"
      />
      <ContactDetails />
    </div>
  );
};

export default Contact;
