

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const oilproducts: Product[] = [
  // Automotive Engine Oils
  {
    id: "1",
    title: "Synthetic Motor Oil 5W-30",
    description:
      "Premium full synthetic motor oil providing superior engine protection and fuel economy. API SN/CF certified.",
    category: "Automotive Engine Oils",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Conventional Motor Oil 10W-40",
    description:
      "High-quality conventional motor oil for standard gasoline engines. Excellent viscosity stability and wear protection.",
    category: "Automotive Engine Oils",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "High Mileage Motor Oil 5W-20",
    description:
      "Specially formulated for vehicles with over 75,000 miles. Contains seal conditioners to reduce leaks.",
    category: "Automotive Engine Oils",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Diesel Engine Oil 15W-40",
    description:
      "Heavy-duty diesel engine oil for commercial vehicles and trucks. Superior soot control and oxidation resistance.",
    category: "Automotive Engine Oils",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Racing Motor Oil 0W-20",
    description:
      "Ultra-high performance racing oil designed for extreme conditions. Maximum horsepower and engine protection.",
    category: "Automotive Engine Oils",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Industrial Lubricants
  {
    id: "6",
    title: "Hydraulic Oil ISO 46",
    description:
      "Premium hydraulic fluid for industrial machinery. Excellent anti-wear properties and thermal stability.",
    category: "Industrial Lubricants",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    title: "Compressor Oil ISO 100",
    description:
      "High-performance compressor oil for rotary and reciprocating air compressors. Superior oxidation resistance.",
    category: "Industrial Lubricants",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    title: "Turbine Oil ISO 32",
    description:
      "Premium turbine oil for steam and gas turbines. Exceptional rust protection and foam control.",
    category: "Industrial Lubricants",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    title: "Gear Oil ISO 220",
    description:
      "Heavy-duty industrial gear oil for enclosed gear drives. Superior load-carrying capacity and wear protection.",
    category: "Industrial Lubricants",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    title: "Spindle Oil ISO 10",
    description:
      "Low-viscosity spindle oil for high-speed machinery bearings. Excellent thermal and oxidation stability.",
    category: "Industrial Lubricants",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Base Oils
  {
    id: "11",
    title: "Group I Base Oil SN 150",
    description:
      "Solvent-refined base oil with good viscosity-temperature characteristics. Suitable for various lubricant formulations.",
    category: "Base Oils",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "12",
    title: "Group II Base Oil SN 500",
    description:
      "Hydroprocessed base oil with improved oxidation stability and lower sulfur content. High-quality lubricant base.",
    category: "Base Oils",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "13",
    title: "Group III Base Oil SN 650",
    description:
      "Severely hydroprocessed base oil with excellent viscosity index and thermal stability. Premium grade.",
    category: "Base Oils",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "14",
    title: "Bright Stock BS 150",
    description:
      "Heavy viscosity base oil for blending high-viscosity lubricants. Excellent film strength properties.",
    category: "Base Oils",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "15",
    title: "Recycled Base Oil RBO 350",
    description:
      "Environmentally friendly recycled base oil meeting virgin oil specifications. Sustainable lubricant solution.",
    category: "Base Oils",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Transmission & Gear Oils
  {
    id: "16",
    title: "Automatic Transmission Fluid ATF",
    description:
      "Premium automatic transmission fluid for smooth shifting and transmission protection. Dexron VI compatible.",
    category: "Transmission & Gear Oils",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "17",
    title: "Manual Transmission Oil 75W-90",
    description:
      "Synthetic manual transmission oil providing smooth gear changes and extended drain intervals.",
    category: "Transmission & Gear Oils",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "18",
    title: "Differential Gear Oil 80W-140",
    description:
      "Heavy-duty gear oil for automotive differentials and final drives. Superior extreme pressure protection.",
    category: "Transmission & Gear Oils",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "19",
    title: "CVT Transmission Fluid",
    description:
      "Specialized fluid for continuously variable transmissions. Optimized friction characteristics and belt protection.",
    category: "Transmission & Gear Oils",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "20",
    title: "Transfer Case Oil 75W-85",
    description:
      "Multi-grade transfer case oil for 4WD vehicles. Excellent low-temperature fluidity and wear protection.",
    category: "Transmission & Gear Oils",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Marine & Aviation Oils
  {
    id: "21",
    title: "Marine Engine Oil SAE 40",
    description:
      "Heavy-duty marine engine oil for diesel and gasoline marine engines. Excellent corrosion protection.",
    category: "Marine & Aviation Oils",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "22",
    title: "Aviation Piston Engine Oil W100",
    description:
      "Single-grade aviation oil for piston aircraft engines. Meets FAA specifications for general aviation.",
    category: "Marine & Aviation Oils",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23",
    title: "Jet Engine Oil Type II",
    description:
      "Synthetic jet engine oil for commercial and military aircraft. Superior high-temperature performance.",
    category: "Marine & Aviation Oils",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "24",
    title: "Marine Gear Oil SAE 90",
    description:
      "Marine transmission and gear oil for stern drives and lower units. Water-resistant formulation.",
    category: "Marine & Aviation Oils",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "25",
    title: "Outboard Motor Oil TCW-3",
    description:
      "Two-stroke outboard motor oil meeting NMMA TC-W3 specifications. Excellent lubrication and clean burning.",
    category: "Marine & Aviation Oils",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Greases & Specialty Fluids
  {
    id: "26",
    title: "Lithium Complex Grease NLGI 2",
    description:
      "Multi-purpose lithium complex grease for automotive and industrial applications. Excellent water resistance.",
    category: "Greases & Specialty Fluids",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "27",
    title: "High-Temperature Grease NLGI 1",
    description:
      "Synthetic high-temperature grease for extreme operating conditions. Temperature range -40°C to +200°C.",
    category: "Greases & Specialty Fluids",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "28",
    title: "Food Grade Grease H1",
    description:
      "NSF H1 registered food-grade grease for food processing equipment. Safe for incidental food contact.",
    category: "Greases & Specialty Fluids",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "29",
    title: "Brake Fluid DOT 4",
    description:
      "High-performance brake fluid exceeding DOT 4 specifications. Superior wet and dry boiling points.",
    category: "Greases & Specialty Fluids",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "30",
    title: "Coolant Antifreeze 50/50",
    description:
      "Pre-mixed ethylene glycol coolant providing freeze protection to -34°F and boil-over protection to +265°F.",
    category: "Greases & Specialty Fluids",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Fuel Oils & Diesel
  {
    id: "31",
    title: "Ultra Low Sulfur Diesel ULSD",
    description:
      "Clean-burning diesel fuel with sulfur content below 15 ppm. Meets EPA Tier 4 emission standards.",
    category: "Fuel Oils & Diesel",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "32",
    title: "Biodiesel B20 Blend",
    description:
      "20% biodiesel blend with petroleum diesel. Renewable fuel reducing greenhouse gas emissions.",
    category: "Fuel Oils & Diesel",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "33",
    title: "Marine Gas Oil MGO",
    description:
      "Low-sulfur marine gas oil for ship engines. Compliant with IMO 2020 sulfur regulations.",
    category: "Fuel Oils & Diesel",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "34",
    title: "Heating Oil No. 2",
    description:
      "Clean-burning heating oil for residential and commercial heating systems. Low-sulfur formulation.",
    category: "Fuel Oils & Diesel",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "35",
    title: "Jet Fuel Jet A-1",
    description:
      "Commercial aviation turbine fuel meeting ASTM D1655 specifications. Global standard for jet engines.",
    category: "Fuel Oils & Diesel",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // Transformer & White Oils
  {
    id: "36",
    title: "Transformer Oil Uninhibited",
    description:
      "High-quality transformer oil for electrical equipment insulation and cooling. Excellent dielectric properties.",
    category: "Transformer & White Oils",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "37",
    title: "Inhibited Transformer Oil",
    description:
      "Antioxidant-inhibited transformer oil for extended service life. Superior oxidation stability.",
    category: "Transformer & White Oils",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "38",
    title: "White Oil Technical Grade",
    description:
      "Highly refined white mineral oil for industrial applications. Colorless, odorless, and chemically stable.",
    category: "Transformer & White Oils",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "39",
    title: "Pharmaceutical White Oil USP",
    description:
      "USP-grade white oil for pharmaceutical and cosmetic applications. FDA approved for human use.",
    category: "Transformer & White Oils",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "40",
    title: "Food Grade White Oil",
    description:
      "Food-grade white mineral oil meeting FDA 21 CFR 172.878. Safe for direct and indirect food contact.",
    category: "Transformer & White Oils",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
