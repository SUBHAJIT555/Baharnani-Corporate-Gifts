import basmatiRicePremium from "../assets/images/food-stuff-product-images/Basmati Rice Premium.webp";
import jasmineRice from "../assets/images/food-stuff-product-images/Jasmine Rice.webp";
import brownRiceOrganic from "../assets/images/food-stuff-product-images/Brown Rice Organic.webp";
import parboiledRice from "../assets/images/food-stuff-product-images/Parboiled Rice.webp";
import sushiRice from "../assets/images/food-stuff-product-images/Sushi Rice (Short Grain).webp";
import whiteRefinedSugar from "../assets/images/food-stuff-product-images/White Refined Sugar.webp";
import brownSugar from "../assets/images/food-stuff-product-images/Brown Sugar.webp";
import coconutSugar from "../assets/images/food-stuff-product-images/Coconut Sugar.webp";
import rockSugar from "../assets/images/food-stuff-product-images/Rock Sugar (Mishri).webp";
import powderedSugar from "../assets/images/food-stuff-product-images/Powdered Sugar.webp";
import redLentils from "../assets/images/food-stuff-product-images/Red Lentils (Masoor Dal).webp";
import yellowSplitPeas from "../assets/images/food-stuff-product-images/Yellow Split Peas (Chana Dal).webp";
import blackGram from "../assets/images/food-stuff-product-images/Black Gram (Urad Dal).webp";
import greenMungBeans from "../assets/images/food-stuff-product-images/Green Mung Beans.webp";
import kidneyBeans from "../assets/images/food-stuff-product-images/Kidney Beans (Rajma).webp";
import sunflowerOil from "../assets/images/food-stuff-product-images/Sunflower Oil.webp";
import oliveOilExtraVirgin from "../assets/images/food-stuff-product-images/Olive Oil Extra Virgin.webp";
import coconutOilVirgin from "../assets/images/food-stuff-product-images/Coconut Oil Virgin.webp";
import vegetableOilBlend from "../assets/images/food-stuff-product-images/Vegetable Oil Blend.webp";
import sesameOil from "../assets/images/food-stuff-product-images/Sesame Oil.webp";
import turmericPowder from "../assets/images/food-stuff-product-images/Turmeric Powder.webp";
import cuminSeeds from "../assets/images/food-stuff-product-images/Cumin Seeds (Jeera).webp";
import cardamomGreen from "../assets/images/food-stuff-product-images/Cardamom Green.webp";
import cinnamonSticks from "../assets/images/food-stuff-product-images/Cinnamon Sticks.webp";
import blackPepperWhole from "../assets/images/food-stuff-product-images/Black Pepper Whole.webp";
import frozenChickenBreast from "../assets/images/food-stuff-product-images/Frozen Chicken Breast.webp";
import frozenMixedVegetables from "../assets/images/food-stuff-product-images/Frozen Mixed Vegetables.webp";
import frozenFishFillets from "../assets/images/food-stuff-product-images/Frozen Fish Fillets.webp";
import frozenFrenchFries from "../assets/images/food-stuff-product-images/Frozen French Fries.webp";
import frozenBerriesMix from "../assets/images/food-stuff-product-images/Frozen Berries Mix.webp";
import orangeJuiceConcentrate from "../assets/images/food-stuff-product-images/Orange Juice Concentrate.webp";
import carbonatedSoftDrinks from "../assets/images/food-stuff-product-images/Carbonated Soft Drinks.webp";
import energyDrinks from "../assets/images/food-stuff-product-images/Energy Drinks.webp";
import mineralWater from "../assets/images/food-stuff-product-images/Mineral Water.webp";
import fruitNectars from "../assets/images/food-stuff-product-images/Fruit Nectars.webp";
import ceylonBlackTea from "../assets/images/food-stuff-product-images/Ceylon Black Tea.webp";
import earlGreyTea from "../assets/images/food-stuff-product-images/Earl Grey Tea.webp";
import greenTea from "../assets/images/food-stuff-product-images/Green Tea.webp";
import chamomileTea from "../assets/images/food-stuff-product-images/Chamomile Tea.webp";
import masalaChai from "../assets/images/food-stuff-product-images/Masala Chai.webp";
import arabicaCoffeeBeans from "../assets/images/food-stuff-product-images/Arabica Coffee Beans.webp";
import instantCoffee from "../assets/images/food-stuff-product-images/Instant Coffee.webp";
import espressoBlend from "../assets/images/food-stuff-product-images/Espresso Blend.webp";
import decaffeinatedCoffee from "../assets/images/food-stuff-product-images/Decaffeinated Coffee.webp";
import turkishCoffee from "../assets/images/food-stuff-product-images/Turkish Coffee.webp";
import cannedTomatoes from "../assets/images/food-stuff-product-images/Canned Tomatoes.webp";
import cannedTuna from "../assets/images/food-stuff-product-images/Canned Tuna.webp";
import cannedChickpeas from "../assets/images/food-stuff-product-images/Canned Chickpeas.webp";
import cannedCoconutMilk from "../assets/images/food-stuff-product-images/Canned Coconut Milk.webp";
import cannedCornKernels from "../assets/images/food-stuff-product-images/Canned Corn Kernels.webp";
import almondsPremium from "../assets/images/food-stuff-product-images/Almonds Premium.webp";
import cashewNuts from "../assets/images/food-stuff-product-images/Cashew Nuts.webp";
import datesMedjool from "../assets/images/food-stuff-product-images/Dates Medjool.webp";
import walnuts from "../assets/images/food-stuff-product-images/Walnuts.webp";
import raisinsGolden from "../assets/images/food-stuff-product-images/Raisins Golden.webp";

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const foodstuff: Product[] = [
  // Rice varieties
  {
    id: "1",
    title: "Basmati Rice Premium",
    description:
      "Long grain aromatic basmati rice from India. Perfect for biryanis and pilafs. HACCP certified.",
    category: "Rice",
    image: basmatiRicePremium,
  },
  {
    id: "2",
    title: "Jasmine Rice",
    description:
      "Fragrant Thai jasmine rice with soft texture and subtle floral aroma. Grade A quality.",
    category: "Rice",
    image: jasmineRice,
  },
  {
    id: "3",
    title: "Brown Rice Organic",
    description:
      "Whole grain brown rice rich in fiber and nutrients. Organically grown and certified.",
    category: "Rice",
    image: brownRiceOrganic,
  },
  {
    id: "4",
    title: "Parboiled Rice",
    description:
      "Steam-processed parboiled rice with enhanced nutritional value and longer shelf life.",
    category: "Rice",
    image: parboiledRice,
  },
  {
    id: "5",
    title: "Sushi Rice (Short Grain)",
    description:
      "Premium short grain rice perfect for sushi and Japanese cuisine. High starch content.",
    category: "Rice",
    image: sushiRice,
  },
  // Sugar varieties
  {
    id: "6",
    title: "White Refined Sugar",
    description:
      "Pure white crystalline sugar refined from sugar cane. Food grade quality with 99.8% purity.",
    category: "Sugar",
    image: whiteRefinedSugar,
  },
  {
    id: "7",
    title: "Brown Sugar",
    description:
      "Natural brown sugar with molasses content. Rich flavor perfect for baking and beverages.",
    category: "Sugar",
    image: brownSugar,
  },
  {
    id: "8",
    title: "Coconut Sugar",
    description:
      "Natural coconut palm sugar with low glycemic index. Organic and unrefined.",
    category: "Sugar",
    image: coconutSugar,
  },
  {
    id: "9",
    title: "Rock Sugar (Mishri)",
    description:
      "Crystallized sugar in rock form. Traditional sweetener used in Asian cuisine and beverages.",
    category: "Sugar",
    image: rockSugar,
  },
  {
    id: "10",
    title: "Powdered Sugar",
    description:
      "Finely ground confectioner's sugar perfect for baking, icing, and dessert preparation.",
    category: "Sugar",
    image: powderedSugar,
  },
  // Pulses
  {
    id: "11",
    title: "Red Lentils (Masoor Dal)",
    description:
      "Premium quality red lentils rich in protein and fiber. Quick cooking and nutritious.",
    category: "Pulses",
    image: redLentils,
  },
  {
    id: "12",
    title: "Yellow Split Peas (Chana Dal)",
    description:
      "Split yellow chickpeas with high protein content. Essential ingredient in Indian cuisine.",
    category: "Pulses",
    image: yellowSplitPeas,
  },
  {
    id: "13",
    title: "Black Gram (Urad Dal)",
    description:
      "Whole black gram lentils used in traditional South Asian dishes. Rich in protein and minerals.",
    category: "Pulses",
    image: blackGram,
  },
  {
    id: "14",
    title: "Green Mung Beans",
    description:
      "Whole green mung beans perfect for sprouting and cooking. High nutritional value.",
    category: "Pulses",
    image: greenMungBeans,
  },
  {
    id: "15",
    title: "Kidney Beans (Rajma)",
    description:
      "Dark red kidney beans rich in protein and fiber. Perfect for curries and salads.",
    category: "Pulses",
    image: kidneyBeans,
  },
  // Cooking Oil
  {
    id: "16",
    title: "Sunflower Oil",
    description:
      "Refined sunflower oil with high smoke point. Perfect for frying and cooking. Vitamin E enriched.",
    category: "Cooking Oil",
    image: sunflowerOil,
  },
  {
    id: "17",
    title: "Olive Oil Extra Virgin",
    description:
      "Cold-pressed extra virgin olive oil from Mediterranean olives. Premium quality for salads and cooking.",
    category: "Cooking Oil",
    image: oliveOilExtraVirgin,
  },
  {
    id: "18",
    title: "Coconut Oil Virgin",
    description:
      "Pure virgin coconut oil extracted from fresh coconuts. Ideal for cooking and baking.",
    category: "Cooking Oil",
    image: coconutOilVirgin,
  },
  {
    id: "19",
    title: "Vegetable Oil Blend",
    description:
      "Balanced blend of multiple vegetable oils for everyday cooking. Light taste and healthy composition.",
    category: "Cooking Oil",
    image: vegetableOilBlend,
  },
  {
    id: "20",
    title: "Sesame Oil",
    description:
      "Pure sesame oil with rich nutty flavor. Perfect for Asian cuisine and salad dressings.",
    category: "Cooking Oil",
    image: sesameOil,
  },
  // Spices
  {
    id: "21",
    title: "Turmeric Powder",
    description:
      "Pure turmeric powder with high curcumin content. Essential spice for Indian and Middle Eastern cuisine.",
    category: "Spices",
    image: turmericPowder,
  },
  {
    id: "22",
    title: "Cumin Seeds (Jeera)",
    description:
      "Whole cumin seeds with strong aromatic flavor. Essential for tempering and spice blends.",
    category: "Spices",
    image: cuminSeeds,
  },
  {
    id: "23",
    title: "Cardamom Green",
    description:
      "Premium green cardamom pods with intense aroma. Perfect for desserts, tea, and biryanis.",
    category: "Spices",
    image: cardamomGreen,
  },
  {
    id: "24",
    title: "Cinnamon Sticks",
    description:
      "Ceylon cinnamon sticks with sweet and warm flavor. Perfect for baking and hot beverages.",
    category: "Spices",
    image: cinnamonSticks,
  },
  {
    id: "25",
    title: "Black Pepper Whole",
    description:
      "Premium black peppercorns with strong pungent flavor. The king of spices for seasoning.",
    category: "Spices",
    image: blackPepperWhole,
  },
  // Frozen Food
  {
    id: "26",
    title: "Frozen Chicken Breast",
    description:
      "Premium boneless chicken breast fillets. Individually quick frozen (IQF) for freshness.",
    category: "Frozen Food",
    image: frozenChickenBreast,
  },
  {
    id: "27",
    title: "Frozen Mixed Vegetables",
    description:
      "Blend of carrots, peas, corn, and green beans. Flash frozen to retain nutrients and flavor.",
    category: "Frozen Food",
    image: frozenMixedVegetables,
  },
  {
    id: "28",
    title: "Frozen Fish Fillets",
    description:
      "Fresh water fish fillets frozen at sea. High protein and omega-3 fatty acids.",
    category: "Frozen Food",
    image: frozenFishFillets,
  },
  {
    id: "29",
    title: "Frozen French Fries",
    description:
      "Pre-cut and blanched potato fries ready for frying. Restaurant quality and crispy texture.",
    category: "Frozen Food",
    image: frozenFrenchFries,
  },
  {
    id: "30",
    title: "Frozen Berries Mix",
    description:
      "Mixed frozen berries including strawberries, blueberries, and raspberries. Rich in antioxidants.",
    category: "Frozen Food",
    image: frozenBerriesMix,
  },
  // Beverages
  {
    id: "31",
    title: "Orange Juice Concentrate",
    description:
      "100% pure orange juice concentrate. No added sugar or preservatives. Rich in Vitamin C.",
    category: "Beverages",
    image: orangeJuiceConcentrate,
  },
  {
    id: "32",
    title: "Carbonated Soft Drinks",
    description:
      "Variety of carbonated beverages in different flavors. International brands and local favorites.",
    category: "Beverages",
    image: carbonatedSoftDrinks,
  },
  {
    id: "33",
    title: "Energy Drinks",
    description:
      "Premium energy drinks with natural caffeine and vitamins. Popular international brands.",
    category: "Beverages",
    image: energyDrinks,
  },
  {
    id: "34",
    title: "Mineral Water",
    description:
      "Natural mineral water from protected sources. Available in various bottle sizes.",
    category: "Beverages",
    image: mineralWater,
  },
  {
    id: "35",
    title: "Fruit Nectars",
    description:
      "Premium fruit nectars in mango, guava, and mixed fruit flavors. Made from real fruit pulp.",
    category: "Beverages",
    image: fruitNectars,
  },
  // Tea
  {
    id: "36",
    title: "Ceylon Black Tea",
    description:
      "Premium Ceylon black tea from Sri Lankan highlands. Rich flavor and golden color.",
    category: "Tea",
    image: ceylonBlackTea,
  },
  {
    id: "37",
    title: "Earl Grey Tea",
    description:
      "Classic Earl Grey tea blend with bergamot oil. Aromatic and refreshing with citrus notes.",
    category: "Tea",
    image: earlGreyTea,
  },
  {
    id: "38",
    title: "Green Tea",
    description:
      "Pure green tea leaves with antioxidants. Light and refreshing with health benefits.",
    category: "Tea",
    image: greenTea,
  },
  {
    id: "39",
    title: "Chamomile Tea",
    description:
      "Herbal chamomile tea with calming properties. Caffeine-free and perfect for evening relaxation.",
    category: "Tea",
    image: chamomileTea,
  },
  {
    id: "40",
    title: "Masala Chai",
    description:
      "Traditional Indian spiced tea blend with cardamom, cinnamon, and ginger. Rich and aromatic.",
    category: "Tea",
    image: masalaChai,
  },
  // Coffee
  {
    id: "41",
    title: "Arabica Coffee Beans",
    description:
      "Premium Arabica coffee beans with smooth flavor and low acidity. Single origin and specialty blends.",
    category: "Coffee",
    image: arabicaCoffeeBeans,
  },
  {
    id: "42",
    title: "Instant Coffee",
    description:
      "Premium instant coffee granules for quick preparation. Rich taste and aroma in every cup.",
    category: "Coffee",
    image: instantCoffee,
  },
  {
    id: "43",
    title: "Espresso Blend",
    description:
      "Dark roast espresso blend perfect for espresso machines. Strong and full-bodied flavor.",
    category: "Coffee",
    image: espressoBlend,
  },
  {
    id: "44",
    title: "Decaffeinated Coffee",
    description:
      "Premium decaffeinated coffee beans with full flavor but 99.9% caffeine removed.",
    category: "Coffee",
    image: decaffeinatedCoffee,
  },
  {
    id: "45",
    title: "Turkish Coffee",
    description:
      "Finely ground Turkish coffee for traditional preparation. Rich cultural heritage and intense flavor.",
    category: "Coffee",
    image: turkishCoffee,
  },
  // Canned Food
  {
    id: "46",
    title: "Canned Tomatoes",
    description:
      "Premium whole peeled tomatoes in natural juice. Perfect for sauces, soups, and cooking.",
    category: "Canned Food",
    image: cannedTomatoes,
  },
  {
    id: "47",
    title: "Canned Tuna",
    description:
      "Premium tuna chunks in water or oil. High protein and omega-3 fatty acids.",
    category: "Canned Food",
    image: cannedTuna,
  },
  {
    id: "48",
    title: "Canned Chickpeas",
    description:
      "Ready-to-eat chickpeas in brine. Perfect for salads, hummus, and quick meals.",
    category: "Canned Food",
    image: cannedChickpeas,
  },
  {
    id: "49",
    title: "Canned Coconut Milk",
    description:
      "Rich and creamy coconut milk for curries, desserts, and Asian cuisine. Full-fat content.",
    category: "Canned Food",
    image: cannedCoconutMilk,
  },
  {
    id: "50",
    title: "Canned Corn Kernels",
    description:
      "Sweet corn kernels in water. Ready to eat and perfect for salads and side dishes.",
    category: "Canned Food",
    image: cannedCornKernels,
  },
  // Dry Fruits
  {
    id: "51",
    title: "Almonds Premium",
    description:
      "Premium California almonds rich in vitamin E and healthy fats. Perfect for snacking and baking.",
    category: "Dry Fruits",
    image: almondsPremium,
  },
  {
    id: "52",
    title: "Cashew Nuts",
    description:
      "Premium cashew nuts from India. Creamy texture and rich flavor. High in minerals.",
    category: "Dry Fruits",
    image: cashewNuts,
  },
  {
    id: "53",
    title: "Dates Medjool",
    description:
      "Premium Medjool dates from Middle East. Natural sweetness and soft texture. Rich in fiber.",
    category: "Dry Fruits",
    image: datesMedjool,
  },
  {
    id: "54",
    title: "Walnuts",
    description:
      "Premium walnut halves rich in omega-3 fatty acids. Perfect for baking and healthy snacking.",
    category: "Dry Fruits",
    image: walnuts,
  },
  {
    id: "55",
    title: "Raisins Golden",
    description:
      "Golden raisins from premium grapes. Natural sweetness and chewy texture. Rich in antioxidants.",
    category: "Dry Fruits",
    image: raisinsGolden,
  },
];
