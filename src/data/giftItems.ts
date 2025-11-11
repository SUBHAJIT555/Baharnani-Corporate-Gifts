export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const giftItems: Product[] = [
  // Apparel and accessories
  {
    id: "gift-1",
    title: "Premium Corporate Polo Shirt",
    description:
      "High-quality cotton blend polo shirt with custom embroidery. Available in multiple colors and sizes. Perfect for corporate events and team building.",
    category: "Apparel and accessories",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: "gift-2",
    title: "Executive Leather Wallet",
    description:
      "Genuine leather wallet with RFID blocking technology. Features multiple card slots and cash compartments. Ideal corporate gift for clients and employees.",
    category: "Apparel and accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
  },
  {
    id: "gift-3",
    title: "Designer Silk Tie Set",
    description:
      "Premium silk ties in elegant patterns and colors. Comes in a gift box. Perfect for corporate gifting and professional occasions.",
    category: "Apparel and accessories",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800",
  },
  {
    id: "gift-4",
    title: "Custom Embroidered Cap",
    description:
      "Adjustable cap with custom logo embroidery. Made from breathable fabric. Great for outdoor corporate events and promotional activities.",
    category: "Apparel and accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
  },
  {
    id: "gift-5",
    title: "Premium Watch Collection",
    description:
      "Elegant timepiece with stainless steel case and leather strap. Water-resistant and features date display. Sophisticated corporate gift option.",
    category: "Apparel and accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: "gift-6",
    title: "Luxury Scarf Set",
    description:
      "Premium cashmere blend scarves in various colors. Soft, warm, and elegant. Perfect for winter corporate gifts and client appreciation.",
    category: "Apparel and accessories",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
  },

  // Bags and travel
  {
    id: "gift-7",
    title: "Executive Leather Briefcase",
    description:
      "Professional leather briefcase with multiple compartments and laptop sleeve. Features padded shoulder strap and combination lock. Ideal for business professionals.",
    category: "Bags and travel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    id: "gift-8",
    title: "Premium Travel Backpack",
    description:
      "Durable travel backpack with USB charging port and anti-theft design. Water-resistant material with spacious compartments. Perfect for business travelers.",
    category: "Bags and travel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    id: "gift-9",
    title: "Luxury Weekender Bag",
    description:
      "Stylish weekender bag made from premium canvas and leather accents. Features multiple pockets and adjustable straps. Great for short business trips.",
    category: "Bags and travel",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
  },
  {
    id: "gift-10",
    title: "Corporate Tote Bag",
    description:
      "Eco-friendly tote bag with custom branding. Made from recycled materials. Spacious and durable, perfect for daily use and corporate events.",
    category: "Bags and travel",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
  },
  {
    id: "gift-11",
    title: "Premium Luggage Set",
    description:
      "Hard-shell luggage set with TSA-approved locks and 360-degree spinner wheels. Lightweight yet durable. Ideal for frequent business travelers.",
    category: "Bags and travel",
    image: "https://images.unsplash.com/photo-1565026057447-bd90a36d7eea?w=800",
  },
  {
    id: "gift-12",
    title: "Leather Document Holder",
    description:
      "Elegant leather document holder with multiple pockets for papers, cards, and passport. Perfect for business meetings and travel.",
    category: "Bags and travel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },

  // Office and stationary
  {
    id: "gift-13",
    title: "Premium Pen Set",
    description:
      "Luxury fountain pen set with gold-plated nibs and premium ink. Comes in elegant gift box. Perfect for executives and corporate gifting.",
    category: "Office and stationary",
    image: "https://images.unsplash.com/photo-1583484963886-cce2f1a3e4b0?w=800",
  },
  {
    id: "gift-14",
    title: "Executive Desk Organizer",
    description:
      "Wooden desk organizer with multiple compartments for pens, papers, and office supplies. Elegant design that enhances any workspace.",
    category: "Office and stationary",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
  },
  {
    id: "gift-15",
    title: "Custom Notebook Set",
    description:
      "Premium leather-bound notebooks with custom embossing. High-quality paper and elegant design. Ideal for meetings and note-taking.",
    category: "Office and stationary",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
  },
  {
    id: "gift-16",
    title: "Professional Business Card Holder",
    description:
      "Elegant metal business card holder with magnetic closure. Sleek design perfect for networking events and business meetings.",
    category: "Office and stationary",
    image: "https://images.unsplash.com/photo-1583484963886-cce2f1a3e4b0?w=800",
  },
  {
    id: "gift-17",
    title: "Premium Sticky Notes Set",
    description:
      "Colorful sticky notes set with custom branding. High-quality adhesive and various sizes. Essential office supply with corporate touch.",
    category: "Office and stationary",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
  },
  {
    id: "gift-18",
    title: "Luxury Paperweight",
    description:
      "Crystal paperweight with custom engraving. Elegant and functional desk accessory. Makes a sophisticated corporate gift.",
    category: "Office and stationary",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
  },

  // Technology and accessories
  {
    id: "gift-19",
    title: "Wireless Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with premium sound quality and long battery life. Water-resistant design. Perfect for office and home use.",
    category: "Technology and accessories",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
  },
  {
    id: "gift-20",
    title: "USB-C Hub Multiport Adapter",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card slots. Compact design for laptops and tablets. Essential for modern workspaces.",
    category: "Technology and accessories",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
  },
  {
    id: "gift-21",
    title: "Wireless Charging Pad",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator. Modern office accessory.",
    category: "Technology and accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
  },
  {
    id: "gift-22",
    title: "Premium Laptop Stand",
    description:
      "Ergonomic aluminum laptop stand with adjustable height. Improves posture and workspace efficiency. Ideal for home office setup.",
    category: "Technology and accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
  },
  {
    id: "gift-23",
    title: "Smart Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature. USB charging port and touch controls. Modern workspace solution.",
    category: "Technology and accessories",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
  },
  {
    id: "gift-24",
    title: "Portable Power Bank",
    description:
      "High-capacity power bank with fast charging technology. Compact design with multiple USB ports. Essential for mobile professionals.",
    category: "Technology and accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=800",
  },

  // Eating and drinking
  {
    id: "gift-25",
    title: "Premium Coffee Gift Set",
    description:
      "Luxury coffee gift set with premium beans, French press, and elegant mugs. Perfect for coffee enthusiasts and corporate gifting.",
    category: "Eating and drinking",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800",
  },
  {
    id: "gift-26",
    title: "Stainless Steel Water Bottle",
    description:
      "Insulated stainless steel water bottle that keeps drinks cold or hot for hours. BPA-free and eco-friendly. Great for office and travel.",
    category: "Eating and drinking",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
  {
    id: "gift-27",
    title: "Gourmet Tea Collection",
    description:
      "Premium tea collection with various flavors and blends. Elegant packaging makes it perfect for corporate gifts and client appreciation.",
    category: "Eating and drinking",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
  },
  {
    id: "gift-28",
    title: "Executive Wine Set",
    description:
      "Premium wine set with corkscrew, wine stopper, and elegant glasses. Perfect for corporate events and client entertainment.",
    category: "Eating and drinking",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
  },
  {
    id: "gift-29",
    title: "Luxury Chocolate Gift Box",
    description:
      "Artisan chocolate gift box with assorted premium chocolates. Beautifully packaged for corporate gifting and special occasions.",
    category: "Eating and drinking",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4bdc5b5c?w=800",
  },
  {
    id: "gift-30",
    title: "Premium Coffee Maker",
    description:
      "Single-serve coffee maker with multiple brewing options. Compact design perfect for office use. Includes coffee pods and accessories.",
    category: "Eating and drinking",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800",
  },

  // Premiums and tools
  {
    id: "gift-31",
    title: "Multi-Tool Swiss Army Knife",
    description:
      "Professional multi-tool with various functions including knife, screwdriver, and bottle opener. Compact and durable. Essential for professionals.",
    category: "Premiums and tools",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800",
  },
  {
    id: "gift-32",
    title: "Premium Tool Kit Set",
    description:
      "Comprehensive tool kit with high-quality tools for home and office maintenance. Durable case and organized compartments.",
    category: "Premiums and tools",
    image: "https://images.unsplash.com/photo-1504148453638-4b0c0a4b0e5e?w=800",
  },
  {
    id: "gift-33",
    title: "Luxury Keychain Set",
    description:
      "Premium leather keychain with custom logo engraving. Elegant design and durable construction. Perfect corporate promotional item.",
    category: "Premiums and tools",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
  },
  {
    id: "gift-34",
    title: "Executive Screwdriver Set",
    description:
      "Professional screwdriver set with magnetic tips and ergonomic handles. Multiple sizes and types. Essential for office maintenance.",
    category: "Premiums and tools",
    image: "https://images.unsplash.com/photo-1504148453638-4b0c0a4b0e5e?w=800",
  },
  {
    id: "gift-35",
    title: "Premium Flashlight",
    description:
      "High-lumen LED flashlight with rechargeable battery. Waterproof and durable design. Useful for office emergencies and outdoor activities.",
    category: "Premiums and tools",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800",
  },
  {
    id: "gift-36",
    title: "Luxury Tape Measure",
    description:
      "Professional tape measure with laser guide and digital display. Durable construction and accurate measurements. Perfect for office use.",
    category: "Premiums and tools",
    image: "https://images.unsplash.com/photo-1504148453638-4b0c0a4b0e5e?w=800",
  },

  // Sports and recreation
  {
    id: "gift-37",
    title: "Premium Yoga Mat",
    description:
      "Eco-friendly yoga mat with non-slip surface and carrying strap. Perfect for office wellness programs and employee fitness initiatives.",
    category: "Sports and recreation",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
  },
  {
    id: "gift-38",
    title: "Fitness Tracker Watch",
    description:
      "Smart fitness tracker with heart rate monitor, step counter, and sleep tracking. Water-resistant and long battery life. Great for health-conscious employees.",
    category: "Sports and recreation",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
  },
  {
    id: "gift-39",
    title: "Premium Golf Set",
    description:
      "Professional golf set with clubs, bag, and accessories. High-quality materials and elegant design. Perfect for corporate golf events.",
    category: "Sports and recreation",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800",
  },
  {
    id: "gift-40",
    title: "Resistance Band Set",
    description:
      "Complete resistance band set with various resistance levels. Includes exercise guide. Perfect for office workouts and home fitness.",
    category: "Sports and recreation",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
  },
  {
    id: "gift-41",
    title: "Premium Tennis Racket",
    description:
      "Professional tennis racket with advanced technology for better control and power. Includes protective case. Ideal for corporate sports events.",
    category: "Sports and recreation",
    image: "https://images.unsplash.com/photo-1622163642999-9584742c66b8?w=800",
  },
  {
    id: "gift-42",
    title: "Luxury Gym Bag",
    description:
      "Spacious gym bag with separate compartments for shoes and wet items. Durable material and comfortable straps. Perfect for active professionals.",
    category: "Sports and recreation",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
  },

  // Eco friendly
  {
    id: "gift-43",
    title: "Bamboo Desk Organizer Set",
    description:
      "Sustainable bamboo desk organizer with multiple compartments. Eco-friendly and elegant design. Perfect for environmentally conscious offices.",
    category: "Eco friendly",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
  },
  {
    id: "gift-44",
    title: "Recycled Paper Notebook Set",
    description:
      "Premium notebooks made from 100% recycled paper. Eco-friendly and sustainable. Perfect for corporate gifting with environmental values.",
    category: "Eco friendly",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
  },
  {
    id: "gift-45",
    title: "Solar-Powered Charger",
    description:
      "Portable solar charger for phones and tablets. Eco-friendly power solution with multiple USB ports. Great for outdoor and sustainable offices.",
    category: "Eco friendly",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=800",
  },
  {
    id: "gift-46",
    title: "Bamboo Cutlery Set",
    description:
      "Reusable bamboo cutlery set with carrying case. Eco-friendly alternative to plastic. Perfect for office lunches and sustainable living.",
    category: "Eco friendly",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
  },
  {
    id: "gift-47",
    title: "Organic Cotton Tote Bag",
    description:
      "Sustainable tote bag made from organic cotton with custom printing. Durable and eco-friendly. Great for corporate events and promotions.",
    category: "Eco friendly",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
  },
  {
    id: "gift-48",
    title: "Reusable Coffee Cup Set",
    description:
      "Insulated reusable coffee cups made from sustainable materials. Keeps drinks hot or cold. Perfect for eco-conscious office environments.",
    category: "Eco friendly",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
];
