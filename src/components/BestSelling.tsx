import ProductGrid from "./ProductGrid";
import { bestSellingItems } from "../data/bestselling";

const BestSelling = () => {
  return (
    <ProductGrid
      products={bestSellingItems}
      title="Our Best-Selling Corporate Gifts in Dubai "
      subtitle="Discover our most-loved corporate gifts, fromstylish notebooks and eco-friendly bottles to premium accessories that impress every client and colleague."
      productType="custom"
      id="best-selling"
    />
  );
};

export default BestSelling;
