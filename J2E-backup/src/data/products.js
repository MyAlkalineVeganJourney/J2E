// src/data/products.js

const products = [
  {
    name: "Organic Wild Hand-Picked 🇱🇨 Herbs - Panadol",
    price: 25.00,
    url: "https://buy.stripe.com/6oUeVcgrNfhf1et2dj08g0f",
    description: "Traditionally used for pain relief & fever reduction. Rich in benzyl isothiocyanate, soothing to the immune system.",
    image: "/images/panadol.jpg",
    category: "Herbs"
  },
  {
    name: "Organic Wild Hand-Picked 🇱🇨 Herbs - Blue Vervain",
    price: 35.00,
    url: "https://buy.stripe.com/eVqfZg8Zld979KZ5pv08g0e",
    description: "Calming herb supporting nervous & hormone balance. Contains verbenalin and iridoids.",
    image: "/images/BlueVervain.jpg",
    category: "Herbs"
  },
  {
    name: "Organic Wild Hand-Picked 🇱🇨 Herbs - Red Clover",
    price: 45.00,
    url: "https://buy.stripe.com/eVq9ASdfBglj9KZ6tz08g0d",
    description: "Promotes detoxification & hormone health. High in isoflavones like genistein.",
    image: "/images/RedClover.jpg",
    category: "Herbs"
  },
  {
    name: "Organic Wild Hand-Picked 🇱🇨 Herbs - Island Bay Leaves",
    price: 55.00,
    url: "https://buy.stripe.com/5kQ9AS3F19WV9KZ3hn08g0c",
    description: "Supports digestion & respiratory clarity. Rich in eugenol and cineole.",
    image: "/images/BayLeaves.jpg",
    category: "Herbs"
  },
  {
    name: "Organic Wild Hand-Picked 🇱🇨 Herbs - Soursop",
    price: 65.00,
    url: "https://buy.stripe.com/dRm6oG6Rd7ON7CRg4908g0b",
    description: "Supports immunity & fights inflammation. Contains annonaceous acetogenins and vitamin C.",
    image: "/images/Soursop.jpg",
    category: "Herbs"
  },
  {
    name: "Organic Wild Hand-Picked 🇱🇨 Herbs - Cloves",
    price: 25.00,
    url: "https://buy.stripe.com/5kQ00i2AX5GFf5j7xD08g0a",
    description: "Aids digestion, oral health, and antioxidants. Contains eugenol, beta-caryophyllene.",
    image: "/images/Cloves.jpg",
    category: "Herbs"
  },
  {
    name: "Alkaline Vegan Walnut Chews (12 pieces)",
    price: 75.00,
    url: "https://buy.stripe.com/6oU4gy4J5d973mB19f08g08",
    description: "Nutritious chewy walnut snacks sweetened with natural alkaline ingredients. Rich in omega‑3 and phytosterols.",
    image: "/images/WalnutChews.png",
    category: "Snacks"
  },
  {
    name: "St. Lucian Volcanic Solar-Lunar Black Castor Oil — Sacred Genesis Batch",
    price: 225.00,
    url: "https://buy.stripe.com/9B6dR84J5fhf9KZg4908g07",
    description: "Ancestral-strength castor oil charged with solar & lunar frequencies. High in ricinoleic & oleic acids.",
    image: "/images/CastorOil.jpg",
    category: "Oils"
  },
  {
    name: "J2E Enlightenment Pod (one person)",
    price: 3350.00,
    url: "https://book.stripe.com/3csbKS2KT38zawE7sy",
    description: "7‑day all‑inclusive private tent experience at the J2E St. Lucia Retreat. Immersive frequency‑aligned living.",
    image: "/images/J2EPod.jpeg",
    category: "HumanFrequencyTransformation"
  },
  {
    name: "J2E Deluxe Amplification Pod - 4+ guests/*ppp",
    price: 3800.00,
    url: "https://book.stripe.com/9AQaGObhpbF50W4eUZ",
    description: "Group‑tuned deluxe villa experience with ceremony access. Infused with high-frequency support.",
    image: "/images/J2EPod.jpeg",
    category: "HumanFrequencyTransformation"
  },
  {
    name: "J2E Vibration Off-Campus Pod (2+ guests)/*ppp",
    price: 3500.00,
    url: "https://book.stripe.com/00g6qyadlbF5cEMaEI",
    description: "Nearby lodging with full transformation‑week access. Frequency retreat + local vibrational support.",
    image: "/images/J2EOffCampusPod.jpg",
    category: "HumanFrequencyTransformations"
  },
  {
    name: "J2E Frequency Pod (2 Guests/*ppp)",
    price: 3200.00,
    url: "https://book.stripe.com/dR6eX4gBJ9wXeMU7su",
    description: "Double‑occupancy frequency‑amplification pod tuned to cosmic alignment.",
    image: "/images/J2EPod.jpeg",
    category: "HumanFrequencyTransformations"
  },
  {
    name: "J2E Resonance Pod (4+ guests/*ppp)",
    price: 3000.00,
    url: "https://book.stripe.com/6oE16e1GPbF56go145",
    description: "Resonance pods for group synchronization—ideal for conscious collectives.",
    image: "/images/J2EPod.jpeg",
    category: "HumanFrequencyTransformationeats"
  },
  {
    name: "MAVJ Cookies w/walnuts - or not! Alkaline Deliciousness. One is not enough",
    price: 75.00,
    url: "https://buy.stripe.com/28E3cu6Rd6KJf5jcRX08g0G",
    description: "Alkaline-friendly walnut cookies with balanced nutrients and gut‑loving fiber.",
    image: "/images/WalnutCookies.png",
    category: "Snacks"
  },
  {
    name: "MAVJ Sea Moss Bomb Naturally Carbonated Alkaline Nectar",
    price: 25.00,
    url: "https://buy.stripe.com/aFa00i1wTfhf5uJf0508g0F",
    description: "Naturally fermented carbonated Sea Moss drink—enzymes, probiotics & electrolytes.",
    image: "/images/TheBomb.jpg",
    category: "Beverages"
  },
  {
    name: "MAVJ 21 Day Reset Detoxification Kit",
    price: 250.00,
    url: "https://buy.stripe.com/aFa5kCb7tfhfg9n19f08g0E",
    description: "Comprehensive detox kit: herbs, guides & frequency support for deep reset.",
    image: "/images/Detox.jpg",
    category: "Kits"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Spectrum Sea Moss Raw 16oz",
    price: 275.00,
    url: "https://buy.stripe.com/4gM3cu8Zl1qp8GVf0508g0D",
    description: "Gold/Jade/Violet volcanic sea moss raw: high in minerals, antioxidants & trace elements.",
    image: "/images/RawSpectrumMoss.png",
    category: "Sea Moss"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Spectrum Sea Moss Raw 8oz",
    price: 195.00,
    url: "https://buy.stripe.com/dRm00i6Rdfhf7CRcRX08g0C",
    description: "Same as above—compact jar.",
    image: "/images/SeaMossHarvest.jpg",
    category: "Sea Moss"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Spectrum Sea Moss Raw 4oz",
    price: 135.00,
    url: "https://buy.stripe.com/eVq5kC8Zlc533mB4lr08g0B",
    description: "Same, 4oz jar—portable mineral-rich sea moss.",
    image: "/images/products/sea-moss-4oz.jpg",
    category: "Sea Moss"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Spectrum Sea Moss Raw 2oz",
    price: 85.00,
    url: "https://buy.stripe.com/dRm6oG4J52utf5j6tz08g0A",
    description: "Mini 2oz jar—perfect sampler size.",
    image: "/images/products/sea-moss-2oz.jpg",
    category: "Sea Moss"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Jade Sea Moss Raw 16oz",
    price: 250.00,
    url: "https://buy.stripe.com/6oUfZg4J50ml8GV6tz08g0z",
    description: "Jade variant 16oz—rich in chlorophyll, iodine, and trace minerals.",
    image: "/images/products/jade-sea-moss-16oz.jpg",
    category: "Sea Moss"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Jade Sea Moss Raw 8oz",
    price: 175.00,
    url: "https://buy.stripe.com/aFafZga3p1qp2ixdW108g0y",
    description: "Jade 8oz jar—portable and mineral-rich.",
    image: "/images/products/jade-sea-moss-8oz.jpg",
    category: "Sea Moss"
  },
  {
    name: "MAVJ Wild Crafted 🇱🇨 Volcanic Jade Sea Moss Raw 4oz",
    price: 115.00,
    url: "https://buy.stripe.com/5kQdR85N9b0Z1etg4908g0x",
    description: "Jade 4oz jar—compact and nutrient dense.",
    image: "/images/products/jade-sea-moss-4oz.jpg",
    category: "Sea Moss"
  },
  {
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Jade Sea Moss Raw 2oz and 2 more",
    "price": 3140.00,
    "url": "https://buy.stripe.com/28EaEWgrN5GF6yNaJP08g0w",
    "description": "A special bundle of MAVJ's rare volcanic jade sea moss with 2 additional powerful herbal infusions. Promotes cell regeneration and deep mineralization.",
    "image": "/images/jade-sea-moss-2oz-bundle.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Violet Sea Moss Raw 16oz",
    "price": 225.00,
    "url": "https://buy.stripe.com/cNi00iejFd974qF8BH08g0v",
    "description": "Raw volcanic violet sea moss—rich in phytonutrients and known to support thyroid health, immunity, and energetic clarity.",
    "image": "/images/violet-sea-moss-16oz.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Violet Sea Moss Raw 8oz",
    "price": 165.00,
    "url": "https://buy.stripe.com/28EaEWb7t5GF8GVaJP08g0u",
    "description": "A smaller batch of violet sea moss with the same potent vibrational frequency—perfect for consistent daily mineral boosts.",
    "image": "/images/violet-sea-moss-8oz.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Violet Sea Moss Raw 4oz",
    "price": 105.00,
    "url": "https://buy.stripe.com/9B6cN47Vhfhfe1f8BH08g0t",
    "description": "Violet sea moss in a travel-friendly size—great for first-timers or sampling.",
    "image": "/images/VioletRawMoss.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Violet Sea Moss Raw 2oz",
    "price": 65.00,
    "url": "https://buy.stripe.com/cNicN40sPfhf4qF6tz08g0s",
    "description": "Power-packed volcanic violet moss in its smallest but mighty 2oz size.",
    "image": "/RawMossViolet.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Gold Sea Moss Raw 16oz",
    "price": 200.00,
    "url": "https://buy.stripe.com/cNicN44J58SR9KZcRX08g0r",
    "description": "Pure golden sea moss, sun-cured and charged with solar energy to elevate vitality and rejuvenate skin and tissue.",
    "image": "/images/gold-sea-moss-16oz.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Gold Sea Moss Raw 8oz",
    "price": 150.00,
    "url": "https://buy.stripe.com/3cI28q0sP9WV9KZ8BH08g0q",
    "description": "Half-size of our premium gold sea moss, packed with minerals for energy, digestion, and hormone balance.",
    "image": "/images/gold-sea-moss-8oz.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Gold Sea Moss Raw 4oz",
    "price": 85.00,
    "url": "https://buy.stripe.com/dRm6oGcbxedbe1fg4908g0p",
    "description": "Great for smoothies, teas or raw consumption, this 4oz gold sea moss is small but mighty.",
    "image": "/images/gold-sea-moss-4oz.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Gold Sea Moss Raw 2oz",
    "price": 55.00,
    "url": "https://buy.stripe.com/dRmaEW3F1gljf5j8BH08g0o",
    "description": "A starter size of volcanic gold moss ideal for travel or short detox regimens.",
    "image": "/images/gold-sea-moss-2oz.jpg",
    "category": "Sea Moss"
},
{
    "name": "MAVJ Wild Crafted 🇱🇨 Volcanic Spectrum Sea Moss Gel 32oz",
    "price": 225.00,
    "url": "https://buy.stripe.com/28E9AS5N94CB7CRbNT08g0n",
    "description": "A high-frequency gel containing multiple moss types—violet, gold, jade—for full-spectrum bioavailability and frequency enhancement.",
    "image": "/images/spectrum-sea-moss-gel-32oz.jpg",
    "category": "Sea Moss Gel"
},
{
  name: "Castor Seeds – Sacred Volcanic Batch",
  price: 25.00,
  url: "", // Add Stripe link later
  description: "Sun-cured castor seeds from St. Lucia — rich in ricinoleic acid and vital life force.",
  image: "/images/CastorSeedsSell.jpg",
  category: "Seeds"
},
{
  name: "Castor Seeds – Solar Charging in the Sun",
  price: 25.00,
  url: "",
  description: "Batches sunbathed 30+ days. Primal oil source for detox and regeneration.",
  image: "/images/CastorSeedsInSun.jpg",
  category: "Seeds"
},
{
  name: "Cherimoya Seeds",
  price: 20.00,
  url: "",
  description: "Rare cherimoya seeds — supports brain clarity and mitochondrial activity.",
  image: "/images/CherimoyaSeeds.jpg",
  category: "Seeds"
},
{
  name: "Wild Cherries Seeds – Alkaline Rich",
  price: 20.00,
  url: "",
  description: "Sweet cherry seeds from bush trees. Packed with vitamin E and antioxidants.",
  image: "/images/CherrieSeeds.jpg",
  category: "Seeds"
},
{
  name: "Sacred Chocolate Seeds",
  price: 35.00,
  url: "",
  description: "Unprocessed cacao seeds harvested from volcanic soil — magnesium-rich and euphoric.",
  image: "/images/Chocolate.jpg",
  category: "Seeds"
},
{
  name: "Grapefruit Seeds",
  price: 18.00,
  url: "",
  description: "Supports lymph drainage and bitter alkaloid detox. Raw wild grapefruit seeds.",
  image: "/images/GrapeFruitSeeds.jpg",
  category: "Seeds"
},
{
  name: "Mango Seeds (Dried)",
  price: 20.00,
  url: "",
  description: "Raw and dried mango seeds rich in gallotannins. Smooth digestive fire.",
  image: "/images/MangoSeeds.jpg",
  category: "Seeds"
},
{
  name: "Mango Seedling – Ready to Transplant",
  price: 50.00,
  url: "",
  description: "Live seedling for planting. Rare St. Lucian mango species, naturally alkaline.",
  image: "/images/MangoSeedling.png",
  category: "Seeds"
},
{
  name: "Papaya Seeds – Detox Flush",
  price: 20.00,
  url: "",
  description: "Used in antiparasitic cleansing. High in papain and digestive enzymes.",
  image: "/images/PapayaSeeds.jpg",
  category: "Seeds"
},
{
  name: "Soursop Seeds",
  price: 25.00,
  url: "",
  description: "Highly vibrational fruit seed. Aligns gut and pineal. From wild soursop trees.",
  image: "/images/SoursopSeeds.jpg",
  category: "Seeds"
},
{
  name: "Soursop Tree – Grown from Seed",
  price: 85.00,
  url: "",
  description: "Living soursop tree, 2-3 ft tall. Grown from St. Lucian soil. Ships carefully packed.",
  image: "/images/SoursopTree.jpg",
  category: "Seeds"
}

];


export default products;
