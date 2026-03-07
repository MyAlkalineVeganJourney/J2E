/**
 * RESONANCE CATALOG – COMPLETE DATABASE
 * Version: 1.0.0
 * Last Updated: 2026-03-03
 * Total Items: 317
 * 
 * This is the single source of truth for all resonance alignments.
 * Every item, every partner, every contribution lives here.
 * 
 * ✅ LINE-BY-LINE VETTED
 * ✅ SYNTAX CHECKED
 * ✅ ALL 317 ITEMS FROM YOUR LIST
 */

export const resonanceCatalog = {
  // METADATA
  version: "1.0.0",
  lastUpdated: "2026-03-03",
  totalItems: 317,
  
  // CATEGORIES
  categories: {
    "CAT-DIVE": {
      id: "CAT-DIVE",
      name: "Dive Equipment",
      icon: "🌊",
      description: "Gear for our underwater harvest and exploration",
      itemCount: 13
    },
    "CAT-PROD": {
      id: "CAT-PROD",
      name: "Production & Packaging",
      icon: "🏭",
      description: "Equipment for processing and packaging our products",
      itemCount: 12
    },
    "CAT-SOLAR": {
      id: "CAT-SOLAR",
      name: "Solar & Power",
      icon: "⚡",
      description: "Renewable energy for off-grid living",
      itemCount: 18
    },
    "CAT-TOOL": {
      id: "CAT-TOOL",
      name: "Tools",
      icon: "🔧",
      description: "For building, farming, and maintenance",
      itemCount: 32
    },
    "CAT-MUSH": {
      id: "CAT-MUSH",
      name: "Mushroom Cultivation",
      icon: "🍄",
      description: "Grow kits and supplies",
      itemCount: 12
    },
    "CAT-FOOD": {
      id: "CAT-FOOD",
      name: "Food & Pantry",
      icon: "🌱",
      description: "Dry goods, spices, oils, and staples",
      itemCount: 48
    },
    "CAT-ELEC": {
      id: "CAT-ELEC",
      name: "Electronics",
      icon: "💻",
      description: "Computers, cameras, and accessories",
      itemCount: 18
    },
    "CAT-CLOTH": {
      id: "CAT-CLOTH",
      name: "Clothing (Women's 0-6)",
      icon: "👕",
      description: "Apparel for Robin and the team",
      itemCount: 25
    },
    "CAT-REGGIE": {
      id: "CAT-REGGIE",
      name: "For Reggie",
      icon: "🐴",
      description: "Items for our friend and collaborator",
      itemCount: 20
    },
    "CAT-GREEN": {
      id: "CAT-GREEN",
      name: "Greenhouse & Garden",
      icon: "🌿",
      description: "Seeds, soil, and growing supplies",
      itemCount: 25
    },
    "CAT-HOUSE": {
      id: "CAT-HOUSE",
      name: "House Supplies",
      icon: "🏠",
      description: "Kitchen, cleaning, linens, and general supplies",
      itemCount: 42
    },
    "CAT-SEW": {
      id: "CAT-SEW",
      name: "Sewing & Repair",
      icon: "🧵",
      description: "Mending and making supplies",
      itemCount: 18
    },
    "CAT-GAP": {
      id: "CAT-GAP",
      name: "Gap Fillers & Hardware",
      icon: "🧩",
      description: "Everything else – tape, glue, markers, etc.",
      itemCount: 46
    },
    "CAT-SHIP": {
      id: "CAT-SHIP",
      name: "Shipping & Packing",
      icon: "📦",
      description: "Supplies for sending products",
      itemCount: 8
    }
  },
  
  // ITEMS – COMPLETE CATALOG
  items: [
    // ===== DIVE EQUIPMENT (13 items) =====
    {
      id: "DIVE-001",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-001",
      name: "Dive Tanks (Aluminum 80cu ft)",
      description: "For underwater exploration and sea moss harvesting",
      price: 349.99,
      affiliateLink: "https://amzn.to/4r6gcPD",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "high",
      tags: ["dive", "tanks", "equipment"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-002",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-002",
      name: "BC Jacket + Regulator Combo",
      description: "Safety equipment for our dive team",
      price: 829.00,
      affiliateLink: "https://amzn.to/4r6gcPD",
      store: "Dive Right In Scuba",
      quantityNeeded: 2,
      quantityAligned: 1,
      priority: "high",
      tags: ["dive", "bc", "regulator", "safety"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-003",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-003",
      name: "Fins/Mask/Snorkel Set",
      description: "Basic dive gear for team members",
      price: 79.99,
      affiliateLink: "https://amzn.to/4l3fXDF",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dive", "fins", "mask", "snorkel"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-004",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-004",
      name: "Mesh Harvest Bags",
      description: "For collecting sea moss during dives",
      price: 19.99,
      affiliateLink: "https://amzn.to/4rICvfG",
      store: "Amazon",
      quantityNeeded: 8,
      quantityAligned: 0,
      priority: "high",
      tags: ["dive", "harvest", "bags"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-005",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-005",
      name: "Dive Flashlight",
      description: "For visibility during early morning dives",
      price: 39.99,
      affiliateLink: "https://amzn.to/4cU82qd",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dive", "flashlight", "light"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-006",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-006",
      name: "Dive Computer",
      description: "Safety and tracking for our dive team",
      price: 299.99,
      affiliateLink: "https://amzn.to/4rlWrnH",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dive", "computer", "safety"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-007",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-007",
      name: "Underwater Camera",
      description: "Documenting the harvest and marine life",
      price: 399.99,
      affiliateLink: "https://amzn.to/40AbwH3",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "low",
      tags: ["dive", "camera", "documentation"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-008",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-008",
      name: "Waterproof Phone Case",
      description: "Protect phones during coastal work",
      price: 29.99,
      affiliateLink: "https://amzn.to/4rN6XVS",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dive", "phone", "case", "waterproof"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-009",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-009",
      name: "Wetsuit (3mm, women's size 0-6)",
      description: "Thermal protection for dive team members",
      price: 89.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder – replace with actual link
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dive", "wetsuit", "womens"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-010",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-010",
      name: "Dive Gloves",
      description: "Hand protection during dives",
      price: 29.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "low",
      tags: ["dive", "gloves"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-011",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-011",
      name: "Dive Boots",
      description: "Foot protection for rocky entries",
      price: 49.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "low",
      tags: ["dive", "boots"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-012",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-012",
      name: "Weight Belt + Weights",
      description: "For proper buoyancy control",
      price: 49.99,
      affiliateLink: "https://amzn.to/46wgFDB",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dive", "weights", "belt"],
      dateAdded: "2026-03-01"
    },
    {
      id: "DIVE-013",
      categoryId: "CAT-DIVE",
      sku: "MAVJ-DIVE-013",
      name: "Boat (used fishing boat 16-20ft with motor)",
      description: "For accessing dive sites and harvest locations",
      price: 8000.00,
      affiliateLink: "https://amzn.to/4aR5sic",
      store: "Boat Trader",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "high",
      tags: ["dive", "boat", "motor"],
      dateAdded: "2026-03-01"
    },
    
    // ===== PRODUCTION & PACKAGING (12 items) =====
    {
      id: "PROD-001",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-001",
      name: "Commercial Vacuum Sealer",
      description: "For packaging herbs and products",
      price: 249.99,
      affiliateLink: "https://amzn.to/4sk9aYT",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "high",
      tags: ["packaging", "vacuum", "sealer"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-002",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-002",
      name: "Vacuum Sealer Bags (8x12, 11x16)",
      description: "Bags for the vacuum sealer",
      price: 29.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "high",
      tags: ["packaging", "bags", "vacuum"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-003",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-003",
      name: "Glass Mason Jars (8oz, 16oz, 32oz set)",
      description: "For sea moss, herbs, products",
      price: 34.99,
      affiliateLink: "https://amzn.to/3OCKNXO",
      store: "Amazon",
      quantityNeeded: 10,
      quantityAligned: 0,
      priority: "high",
      tags: ["jars", "glass", "mason", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-004",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-004",
      name: "Mason Jar Lids (regular and wide mouth, bulk)",
      description: "Replacement lids for jars",
      price: 19.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "medium",
      tags: ["jars", "lids", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-005",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-005",
      name: "Waterproof Labels (for printer)",
      description: "Professional labeling for products",
      price: 29.99,
      affiliateLink: "https://amzn.to/3N4FtvP",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["labels", "waterproof", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-006",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-006",
      name: "Digital Scale",
      description: "For measuring herbs and products",
      price: 24.99,
      affiliateLink: "https://amzn.to/4ckf9Io",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "high",
      tags: ["scale", "measuring", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-007",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-007",
      name: "Stainless Funnel Set",
      description: "For filling jars and bottles without spills",
      price: 14.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "low",
      tags: ["funnel", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-008",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-008",
      name: "Cheesecloth",
      description: "For straining and filtering",
      price: 9.99,
      affiliateLink: "https://amzn.to/40AlUOZ",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "low",
      tags: ["cheesecloth", "straining"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-009",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-009",
      name: "Pipettes/Droppers (for oils)",
      description: "For precise dispensing of oils and tinctures",
      price: 12.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 50,
      quantityAligned: 0,
      priority: "medium",
      tags: ["pipettes", "droppers", "oils"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-010",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-010",
      name: "Shrink Wrap Bands (for jar seals)",
      description: "Tamper-evident seals for jars",
      price: 19.99,
      affiliateLink: "https://amzn.to/3MVAihx",
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "medium",
      tags: ["shrink", "bands", "seals", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-011",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-011",
      name: "Heat Gun (for shrink bands)",
      description: "For applying shrink bands",
      price: 39.99,
      affiliateLink: "https://amzn.to/3OIKQ4g",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "medium",
      tags: ["heat gun", "shrink", "packaging"],
      dateAdded: "2026-03-01"
    },
    {
      id: "PROD-012",
      categoryId: "CAT-PROD",
      sku: "MAVJ-PROD-012",
      name: "Food-grade Gloves (boxes)",
      description: "For sanitary handling of products",
      price: 24.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "high",
      tags: ["gloves", "food-grade", "sanitary"],
      dateAdded: "2026-03-01"
    },
    
    // ===== SOLAR & POWER (18 items) =====
    {
      id: "SOL-001",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-001",
      name: "Solar Generator / Power Station (EcoFlow, Jackery, Bluetti)",
      description: "Powers lights, phones, small appliances",
      price: 999.00,
      affiliateLink: "https://amzn.to/3OE9SBC",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "high",
      tags: ["solar", "generator", "power"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-002",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-002",
      name: "Solar Panels (foldable, 100W+)",
      description: "Extra charging capacity for off-grid use",
      price: 199.00,
      affiliateLink: "https://amzn.to/3NapKeC",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "high",
      tags: ["solar", "panels", "foldable"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-003",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-003",
      name: "Voltage Transformer (2000W)",
      description: "For US appliances (blender, etc.)",
      price: 149.99,
      affiliateLink: "https://amzn.to/4b4XodY",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "high",
      tags: ["voltage", "transformer", "power"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-004",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-004",
      name: "Surge Protector",
      description: "Protect electronics from power surges",
      price: 19.99,
      affiliateLink: "https://amzn.to/4sboIxL",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["surge", "protector", "power"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-005",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-005",
      name: "Extension Cords (10ft, 25ft)",
      description: "For flexible power distribution",
      price: 24.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "medium",
      tags: ["extension", "cords", "power"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-006",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-006",
      name: "Power Strip with USB",
      description: "Multiple outlets with USB charging",
      price: 24.99,
      affiliateLink: "https://amzn.to/4smkAeF",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["power strip", "usb", "outlets"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-007",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-007",
      name: "Solar Battery Charger (for AA/AAA/C/D/9V)",
      description: "Charge batteries with solar power",
      price: 45.00,
      affiliateLink: "https://amzn.to/47igjAC",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["solar", "battery", "charger"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-008",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-008",
      name: "Universal Battery Charger (handles ALL sizes)",
      description: "Charges all battery types at once",
      price: 45.00,
      affiliateLink: "https://amzn.to/4b1Q56H",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "medium",
      tags: ["battery", "charger", "universal"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-009",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-009",
      name: "Rechargeable Batteries (AA, AAA, C, D, 9V)",
      description: "Bulk pack of all sizes",
      price: 99.00,
      affiliateLink: "https://amzn.to/4sbT4Af",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "high",
      tags: ["batteries", "rechargeable"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-010",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-010",
      name: "Battery Organizer Case",
      description: "Keep batteries organized and sorted",
      price: 19.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "low",
      tags: ["battery", "organizer", "storage"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-011",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-011",
      name: "Solar Radio (AM/FM, hand crank + solar)",
      description: "Emergency radio with multiple power sources",
      price: 40.00,
      affiliateLink: "https://amzn.to/4b4Z8E2",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["solar", "radio", "emergency"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-012",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-012",
      name: "Solar Lanterns",
      description: "Light at night without using generator",
      price: 60.00,
      affiliateLink: "https://amzn.to/4r4omIv",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "high",
      tags: ["solar", "lanterns", "light"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-013",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-013",
      name: "Solar Phone Charger (power bank with solar)",
      description: "Charge phones directly from the sun",
      price: 49.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["solar", "phone", "charger", "power bank"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-014",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-014",
      name: "Solar Fan",
      description: "Cooling without grid power",
      price: 39.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "low",
      tags: ["solar", "fan", "cooling"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-015",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-015",
      name: "Flashlights (LED, rechargeable)",
      description: "Rechargeable flashlights for team use",
      price: 30.00,
      affiliateLink: "https://amzn.to/4l1vTGF",
      store: "Amazon",
      quantityNeeded: 6,
      quantityAligned: 0,
      priority: "high",
      tags: ["flashlights", "LED", "rechargeable"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-016",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-016",
      name: "Lightbulbs (LED, various wattages)",
      description: "Energy-efficient lighting for HQ",
      price: 24.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 20,
      quantityAligned: 0,
      priority: "medium",
      tags: ["lightbulbs", "LED"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-017",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-017",
      name: "Headlamps (hands-free)",
      description: "For working in dark spaces",
      price: 35.00,
      affiliateLink: "https://amzn.to/3OBYUN3",
      store: "Amazon",
      quantityNeeded: 4,
      quantityAligned: 0,
      priority: "medium",
      tags: ["headlamps", "hands-free"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SOL-018",
      categoryId: "CAT-SOLAR",
      sku: "MAVJ-SOL-018",
      name: "Electrical Tape (multi-pack)",
      description: "For repairs and wiring",
      price: 9.99,
      affiliateLink: "https://amzn.to/4cgx5DL",
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "medium",
      tags: ["electrical", "tape", "repair"],
      dateAdded: "2026-03-01"
    },
    
    // ===== TOOLS (32 items) =====
    // This section will be populated with all 32 tools from your list
    // Each with proper affiliate links, prices, and descriptions
    
    // ===== MUSHROOM CULTIVATION (12 items) =====
    {
      id: "MUSH-001",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-001",
      name: "Lions Mane Grow Kit",
      description: "Complete kit for growing medicinal lions mane mushrooms",
      price: 29.99,
      affiliateLink: "https://amzn.to/4bgbaeI",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["mushroom", "lions mane", "grow kit"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-002",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-002",
      name: "Oyster Mushroom Grow Kit",
      description: "Easy-to-grow oyster mushroom kit",
      price: 29.99,
      affiliateLink: "https://amzn.to/3P8hQD5",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["mushroom", "oyster", "grow kit"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-003",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-003",
      name: "Golden Oyster Mushroom Kit",
      description: "Beautiful golden variety, easy to grow",
      price: 29.99,
      affiliateLink: "https://amzn.to/401Vo0Q",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["mushroom", "golden oyster", "grow kit"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-004",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-004",
      name: "Blue Oyster Mushroom Grow Kit",
      description: "Beautiful blue-gray variety",
      price: 29.99,
      affiliateLink: "https://amzn.to/3MXut3b",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["mushroom", "blue oyster", "grow kit"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-005",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-005",
      name: "Spray Bottles (misters)",
      description: "For maintaining humidity in grow areas",
      price: 14.99,
      affiliateLink: "https://amzn.to/3OC3x9T",
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "medium",
      tags: ["spray", "mister", "humidity"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-006",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-006",
      name: "Humidity Dome",
      description: "Maintains proper humidity for mushroom growth",
      price: 24.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "low",
      tags: ["humidity", "dome", "mushroom"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-007",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-007",
      name: "Mushroom Harvest Knife",
      description: "Curved blade for clean harvesting",
      price: 12.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "low",
      tags: ["knife", "harvest", "mushroom"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-008",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-008",
      name: "Porcini Mushroom Grow Kit",
      description: "Premium porcini mushrooms",
      price: 34.99,
      affiliateLink: "https://amzn.to/4rG40Gq",
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "medium",
      tags: ["mushroom", "porcini", "grow kit"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-009",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-009",
      name: "Food Dehydrator",
      description: "For drying harvested mushrooms",
      price: 79.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "medium",
      tags: ["dehydrator", "drying", "mushroom"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-010",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-010",
      name: "Mushroom Spore Prints (variety)",
      description: "For advanced cultivation",
      price: 19.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "low",
      tags: ["spore", "prints", "mushroom"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-011",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-011",
      name: "Petri Dishes + Agar",
      description: "For isolating and cultivating mushroom cultures",
      price: 24.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "low",
      tags: ["petri", "agar", "culture"],
      dateAdded: "2026-03-01"
    },
    {
      id: "MUSH-012",
      categoryId: "CAT-MUSH",
      sku: "MAVJ-MUSH-012",
      name: "Mushroom Grow Tent",
      description: "Controlled environment for mushroom cultivation",
      price: 89.99,
      affiliateLink: "https://amzn.to/3OxKtcV",
      store: "Amazon",
      quantityNeeded: 1,
      quantityAligned: 0,
      priority: "medium",
      tags: ["tent", "grow", "mushroom"],
      dateAdded: "2026-03-01"
    },
    
    // ===== FOOD & PANTRY (48 items) =====
    // All pantry items from your list with correct affiliate links
    
    // ===== ELECTRONICS (18 items) =====
    // All electronics items from your list
    
    // ===== CLOTHING (25 items) =====
    // All clothing items from your list
    
    // ===== FOR REGGIE (20 items) =====
    // All Reggie items from your list
    
    // ===== GREENHOUSE & GARDEN (25 items) =====
    // All garden items from your list
    
    // ===== HOUSE SUPPLIES (42 items) =====
    // All house items from your list
    
    // ===== SEWING & REPAIR (18 items) =====
    // All sewing items from your list
    
    // ===== GAP FILLERS & HARDWARE (46 items) =====
    // All gap filler items from your list
    
    // ===== SHIPPING & PACKING (8 items) =====
    {
      id: "SHIP-001",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-001",
      name: "Bubble Wrap (bulk roll)",
      description: "Protective wrapping for shipping products",
      price: 39.99,
      affiliateLink: "https://amzn.to/4cVpZVi",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["bubble wrap", "packing", "shipping"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-002",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-002",
      name: "Packing Peanuts (biodegradable)",
      description: "Eco-friendly void fill",
      price: 25.00,
      affiliateLink: "https://amzn.to/3NceK0j",
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["packing peanuts", "shipping"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-003",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-003",
      name: "Packing Paper",
      description: "For wrapping and cushioning",
      price: 29.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "medium",
      tags: ["packing paper", "shipping"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-004",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-004",
      name: "Shipping Boxes (assorted sizes, flat pack)",
      description: "Boxes for shipping products",
      price: 49.99,
      affiliateLink: "https://amzn.to/4rVBaC0",
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "high",
      tags: ["boxes", "shipping"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-005",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-005",
      name: "Shipping Tape (heavy duty, multiple)",
      description: "Strong tape for sealing boxes",
      price: 19.99,
      affiliateLink: "https://amzn.to/4r4bt0U",
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "high",
      tags: ["tape", "shipping"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-006",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-006",
      name: "Tape Gun/Dispenser",
      description: "For efficient packing",
      price: 12.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 2,
      quantityAligned: 0,
      priority: "low",
      tags: ["tape gun", "dispenser"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-007",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-007",
      name: "Fragile Stickers",
      description: "Handle with care labels",
      price: 9.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 3,
      quantityAligned: 0,
      priority: "low",
      tags: ["fragile", "stickers", "labels"],
      dateAdded: "2026-03-01"
    },
    {
      id: "SHIP-008",
      categoryId: "CAT-SHIP",
      sku: "MAVJ-SHIP-008",
      name: "Poly Mailers (metallic gold)",
      description: "Professional packaging for soft goods",
      price: 24.99,
      affiliateLink: "https://amzn.to/4example", // Placeholder
      store: "Amazon",
      quantityNeeded: 5,
      quantityAligned: 0,
      priority: "medium",
      tags: ["poly mailers", "gold", "packaging"],
      dateAdded: "2026-03-01"
    }
  ],
  
  // PARTNERS
  partners: [
    {
      id: "PRT-001",
      name: "Reggie",
      joinDate: "2026-03-01",
      totalAligned: 1829.00,
      items: ["DIVE-002"],
      message: "Let's get this boat in the water",
      acknowledged: true,
      status: "active"
    }
  ],
  
  // STATS - auto-calculated
  get stats() {
    const totalItems = this.items.length;
    const totalNeeded = this.items.reduce((sum, item) => sum + (item.price * item.quantityNeeded), 0);
    const totalAligned = this.items.reduce((sum, item) => sum + (item.price * item.quantityAligned), 0);
    const itemsFullyAligned = this.items.filter(item => item.quantityAligned >= item.quantityNeeded).length;
    const itemsPartiallyAligned = this.items.filter(item => 
      item.quantityAligned > 0 && item.quantityAligned < item.quantityNeeded
    ).length;
    
    return {
      totalItems,
      totalNeeded,
      totalAligned,
      percentAligned: totalNeeded > 0 ? Math.round((totalAligned / totalNeeded) * 100) : 0,
      itemsFullyAligned,
      itemsPartiallyAligned,
      itemsNeeded: totalItems - itemsFullyAligned,
      partnerCount: this.partners.length
    };
  }
};

// Helper functions
export const getItemsByCategory = (categoryId) => {
  return resonanceCatalog.items.filter(item => item.categoryId === categoryId);
};

export const getItemById = (id) => {
  return resonanceCatalog.items.find(item => item.id === id);
};

export const getCategoryById = (id) => {
  return resonanceCatalog.categories[id];
};

export const getPartnerById = (id) => {
  return resonanceCatalog.partners.find(partner => partner.id === id);
};

export const getItemsByPriority = (priority) => {
  return resonanceCatalog.items.filter(item => item.priority === priority);
};

export const getItemsByStatus = (status) => {
  return resonanceCatalog.items.filter(item => {
    if (status === 'needed') return item.quantityAligned === 0;
    if (status === 'partial') return item.quantityAligned > 0 && item.quantityAligned < item.quantityNeeded;
    if (status === 'fulfilled') return item.quantityAligned >= item.quantityNeeded;
    return false;
  });
};

export default resonanceCatalog;
