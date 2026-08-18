export interface ImageItem {
  src: string;
  alt: string;
  category: string;
  animationPreset: "up" | "left" | "right" | "scale" | "parallax" | "expand";
  aspectRatio: string;
  caption?: string;
}

export interface ProjectScene {
  title: string;
  subtitle: string;
  image: string;
  aspect: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  subservices: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  scope: string;
  heroImage: string;
  intro: string;
  concept: string;
  gallery: {
    title: string;
    caption: string;
    image: string;
    preset: "up" | "left" | "right" | "scale" | "parallax";
  }[];
  quote: string;
  clientFeedback: string;
}

export const studioInfo = {
  name: "ALTAMOUNTT SPACE & DESIGN",
  kicker: "Interior Design Studio · Thane, Maharashtra",
  address: "A Wing, JVM Sky Court, Shop No. 18, Bhayandarpada, Thane, Maharashtra 400615",
  phone: "+91 98200 00000",
  phoneDisplay: "+91 98200 00000",
  whatsappUrl: "https://wa.me/919820000000?text=Hi%20Altamountt%20team%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services.",
  mapsUrl: "https://maps.google.com/?q=JVM+Sky+Court+Bhayandarpada+Thane",
  email: "hello@altamounttdesign.com",
  rating: "5.0",
  reviewCount: "10+ Google Reviews",
};

export const images = {
  heroPoster: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
  living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
  lounge: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
  dining: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90",
  bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90",
  kitchen: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1800&q=90",
  bath: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  detail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
  material: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1800&q=90",
  final: "https://images.unsplash.com/photo-1617104551722-3b2d5136646c?auto=format&fit=crop&w=2000&q=90",
  architectural: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
  warmRoom: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90",
  penthouse: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=90",
  beforeBath: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=90",
  afterBath: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  marbleStudy: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=90",
  flutedWood: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1800&q=90",
  lightingGlow: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=90",
  officeInterior: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90",
  aboutHero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
  servicesHero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90",
  contactHero: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=90",
};

export const aboutPillars = [
  {
    num: "01",
    title: "Design",
    subtitle: "Architectural Vision",
    desc: "Aesthetic concepts with a distinct architectural point of view. We sculpt spaces that feel sophisticated without being sterile.",
    image: images.living,
    preset: "up" as const,
  },
  {
    num: "02",
    title: "Function",
    subtitle: "Ergonomic Flow",
    desc: "Every square inch is engineered around the physical rhythm of your day, ensuring seamless movement and clutter-free living.",
    image: images.dining,
    preset: "left" as const,
  },
  {
    num: "03",
    title: "Detail",
    subtitle: "Precision Craftsmanship",
    desc: "Obsessive joinery, shadow gaps, tactile natural stones, and concealed lighting circuits that stand the test of time.",
    image: images.material,
    preset: "right" as const,
  },
  {
    num: "04",
    title: "Value",
    subtitle: "Financial Intelligence",
    desc: "True accessible luxury. High-end materials and finishes specified with financial intelligence and transparent pricing.",
    image: images.warmRoom,
    preset: "scale" as const,
  },
];

export const allServicesGrouped = [
  {
    category: "Residential Living",
    items: [
      "Living Room Design",
      "Bedroom Design",
      "Dining Room Design",
      "Modular Kitchen Design",
      "Bathroom Design",
      "Wardrobe Design",
    ],
  },
  {
    category: "Commercial & Hospitality",
    items: [
      "Commercial Interior Design",
      "Office Space Design",
      "Hospitality Design",
      "Restaurant Design",
      "Property Staging",
      "Reception & Lounges",
    ],
  },
  {
    category: "Interior Architecture",
    items: [
      "Space Planning",
      "Room Planning",
      "Lighting Design",
      "Door & Window Design",
      "Stone, Brick & Stucco Design",
      "Architectural Millwork",
    ],
  },
  {
    category: "Styling & Décor",
    items: [
      "Home Décor Selection",
      "Custom Art Selection",
      "Interior Decorating",
      "Home Staging",
      "Flooring Selection",
      "Cabinetry & Hardware",
    ],
  },
  {
    category: "Turnkey Execution",
    items: [
      "Complete Turnkey Interior",
      "Interior Painting",
      "Refurbishment & Renovation",
      "Appliance Selection",
      "Civil & Structural Supervision",
      "On-Schedule Handover",
    ],
  },
];

export const servicesProcess = [
  {
    num: "01",
    title: "Consult",
    desc: "In-depth discovery session exploring your spatial goals, daily rituals, aesthetic preferences, and budget parameters.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Translating concepts into 2D architectural layouts, 3D volumetric renders, lighting plans, and tactile mood boards.",
  },
  {
    num: "03",
    title: "Refine",
    desc: "Meticulously resolving joinery details, finishes, hardware, lighting circuits, and material procurement schedules.",
  },
  {
    num: "04",
    title: "Execute",
    desc: "Dedicated project management supervising carpentry, civil works, electrical integration, and quality craftsmanship.",
  },
  {
    num: "05",
    title: "Deliver",
    desc: "Flawless turnkey handover of your fully finished, styled space with warranties and comprehensive post-move care.",
  },
];

export const materialsDetails = [
  {
    title: "Brushed Travertine & Italian Marble",
    subtitle: "Tactile surfaces selected for depth and natural vein variation.",
    image: images.marbleStudy,
    preset: "up" as const,
  },
  {
    title: "Fluted Timber & Acoustic Paneling",
    subtitle: "Custom architectural millwork providing warm acoustic insulation.",
    image: images.flutedWood,
    preset: "left" as const,
  },
  {
    title: "Architectural Concealed Lighting",
    subtitle: "Layered 2700K ambient illumination sculpted into ceiling reveals.",
    image: images.lightingGlow,
    preset: "right" as const,
  },
  {
    title: "Brushed Champagne Brass Joinery",
    subtitle: "Hand-finished hardware custom fabricated for each residence.",
    image: images.detail,
    preset: "scale" as const,
  },
];

export const imageStackScenes = [
  {
    id: "stack-1",
    label: "LAYER 01",
    title: "Spatial Clarity",
    description: "Uncluttering the floor plan to welcome unobstructed natural light and intuitive flow.",
    image: images.living,
  },
  {
    id: "stack-2",
    label: "LAYER 02",
    title: "Material Harmony",
    description: "Layering tactile travertine, warm European oak, and textured bouclé fabrics.",
    image: images.dining,
  },
  {
    id: "stack-3",
    label: "LAYER 03",
    title: "Bespoke Millwork & Execution",
    description: "Precision-engineered joinery and concealed storage delivering effortless turnkey elegance.",
    image: images.warmRoom,
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interiors",
    tagline: "Living spaces shaped around your daily rhythm",
    description: "Full-scale interior styling and spatial design for luxury apartments, penthouses, and villas in Thane & Mumbai. From tailored living lounges to serene private suites.",
    image: images.living,
    subservices: [
      "Living & Entertainment Lounges",
      "Master & Guest Bedroom Suites",
      "Bespoke Modular Kitchens",
      "Spa-Grade Bathrooms & Vanity",
      "Custom Wardrobes & Storage Systems",
      "Art Curating & Décor Styling"
    ]
  },
  {
    id: "commercial",
    number: "02",
    title: "Commercial & Hospitality",
    tagline: "Architectural brand experiences that inspire",
    description: "Boutique offices, corporate headquarters, executive suites, and dining environments designed to maximize engagement, workflow efficiency, and signature brand prestige.",
    image: images.officeInterior,
    subservices: [
      "Executive Workspaces & Suites",
      "Boutique Hospitality & Lounges",
      "Restaurant & Café Architecture",
      "Property Staging & Experience Centers",
      "Acoustic & Lighting Integration"
    ]
  },
  {
    id: "architecture",
    number: "03",
    title: "Interior Architecture",
    tagline: "Volumetric space planning & structural harmony",
    description: "Transformative structural reconfiguration, light optimization, architectural millwork, custom ceiling designs, and refined natural material selections.",
    image: images.kitchen,
    subservices: [
      "Comprehensive Space & Flow Planning",
      "Architectural Lighting Schemes",
      "Custom Doors, Windows & Partitions",
      "Stone, Fluted Stucco & Wood Paneling",
      "Precision Joinery & Millwork Detailing"
    ]
  },
  {
    id: "turnkey",
    number: "04",
    title: "Turnkey Solutions",
    tagline: "Seamless end-to-end execution from sketch to keys",
    description: "One single accountable team managing procurement, engineering, contractor supervision, craftsmanship, and on-schedule handover within your established budget.",
    image: images.final,
    subservices: [
      "Material Sourcing & Procurement",
      "Civil & Structural Supervision",
      "Appliance & Smart Home Integration",
      "Finishing, Painting & Surface Polishing",
      "Defect-Free Final Turnkey Handover"
    ]
  }
];

export const pinnedStoryScenes: ProjectScene[] = [
  {
    tag: "01 / 05 · Living Volume / Thane",
    title: "Living Sanctuary",
    subtitle: "A softened palette of brushed travertine, warm oak, and bespoke textured upholstery built for daily calm and effortless entertaining.",
    image: images.living,
    aspect: "16/10"
  },
  {
    tag: "02 / 05 · Dining Room / Thane",
    title: "The Dining Room",
    subtitle: "Architectural light fixtures suspended over monolithic stone surfaces, creating an intimate center of gravity for family gatherings.",
    image: images.dining,
    aspect: "16/10"
  },
  {
    tag: "03 / 05 · Private Suite / Thane",
    title: "Master Bedroom",
    subtitle: "A sanctuary of gentle symmetry, acoustic wall paneling, integrated mood lighting, and concealed wardrobe architecture.",
    image: images.bedroom,
    aspect: "16/10"
  },
  {
    tag: "04 / 05 · Material Study / Thane",
    title: "Material Craft",
    subtitle: "Every grain, edge, and metallic accent is rigorously tested under natural and artificial light to guarantee timeless tactile luxury.",
    image: images.material,
    aspect: "16/10"
  },
  {
    tag: "05 / 05 · Finished Residence / Thane",
    title: "The Completed Vision",
    subtitle: "Turnkey perfection where every spatial plan, lighting circuit, and custom furniture piece functions in seamless harmony.",
    image: images.final,
    aspect: "16/10"
  }
];

export const projectsList: ProjectDetail[] = [
  {
    slug: "thane-residence",
    title: "A Residence in Thane",
    subtitle: "4,200 sq.ft Luxury Turnkey Apartment",
    category: "Residential Architecture",
    location: "Bhayandarpada, Thane",
    year: "2025",
    scope: "Complete Turnkey Interior & Millwork",
    heroImage: images.living,
    intro: "A modern luxury home conceived for a multi-generational family seeking serene openness, clean lines, and warm, tactile materials.",
    concept: "We eliminated dark partitions to flood the primary living volume with natural daylight, introducing custom fluted oak wall paneling that conceals storage and private entranceways.",
    gallery: [
      { title: "Living Lounge", caption: "Custom low-profile sectional paired with travertine cocktail tables", image: images.living, preset: "up" },
      { title: "Dining Volume", caption: "Sculptural lighting fixture above solid quartz dining island", image: images.dining, preset: "left" },
      { title: "Master Suite", caption: "Acoustically insulated headboard wall with integrated brass sconces", image: images.bedroom, preset: "right" },
      { title: "Material Palette", caption: "Hand-picked Italian marbles, warm European oak, champagne gold metals", image: images.material, preset: "scale" },
      { title: "Detail & Joinery", caption: "Bespoke recessed handle details on matte lacquer cabinetry", image: images.detail, preset: "parallax" }
    ],
    quote: "Altamountt transformed our standard builder layout into a breathtaking, peaceful sanctuary that feels twice as spacious.",
    clientFeedback: "Mr. & Mrs. Sharma · Thane"
  },
  {
    slug: "quiet-gathering",
    title: "Quiet Gathering",
    subtitle: "Contemporary Penthouse Living & Dining",
    category: "Turnkey Living Spaces",
    location: "Ghodbunder Road, Thane",
    year: "2024",
    scope: "Spatial Reconfiguration & Interior Styling",
    heroImage: images.dining,
    intro: "An open-concept penthouse where social entertaining zones harmonize effortlessly with quiet reading and work alcoves.",
    concept: "Using curved plaster bulkheads and indirect perimeter lighting, the ceiling guides movement through the open floor plan while preserving an uncluttered aesthetic.",
    gallery: [
      { title: "Dining Atrium", caption: "Double-height dining space bathed in filtered morning sun", image: images.dining, preset: "up" },
      { title: "Lounge Atmosphere", caption: "Soft linen upholstery with warm timber architectural accents", image: images.lounge, preset: "left" },
      { title: "Curated Materials", caption: "Tactile bouclé fabrics against deep matte charcoal cabinetry", image: images.material, preset: "right" },
      { title: "Culinary Space", caption: "Minimalist handleless kitchen with concealed pantry storage", image: images.kitchen, preset: "scale" }
    ],
    quote: "The attention to lighting and flow has made hosting our family and friends an absolute joy.",
    clientFeedback: "Kapoor Family · Thane"
  },
  {
    slug: "layers-of-light",
    title: "Layers of Light",
    subtitle: "Bespoke Private Residence",
    category: "Interior Architecture",
    location: "Majiwada, Thane",
    year: "2024",
    scope: "Lighting Design, Custom Furniture & Turnkey Execution",
    heroImage: images.bedroom,
    intro: "A serene master apartment designed around the interplay of morning shadows, warm indirect cove illumination, and muted earthy tones.",
    concept: "We balanced raw stone textures with ultra-fine champagne metallic accents, designing custom furniture pieces that appear to float above the floor.",
    gallery: [
      { title: "Private Suite", caption: "Bespoke upholstered bedframe framed by ribbed wood paneling", image: images.bedroom, preset: "up" },
      { title: "Architectural Bath", caption: "Walk-in rain shower with frameless glass and vein-matched porcelain", image: images.bath, preset: "right" },
      { title: "Material Detailing", caption: "Precision brass shadow gaps and hand-applied lime plaster", image: images.detail, preset: "left" },
      { title: "Finished Atmosphere", caption: "Warm ambient glow that transforms the room after twilight", image: images.final, preset: "scale" }
    ],
    quote: "Every corner of our home feels intentional. The craftsmanship is flawless.",
    clientFeedback: "Mehta Residence · Thane"
  },
  {
    slug: "warmth-in-form",
    title: "Warmth in Form",
    subtitle: "Turnkey Executive Villa",
    category: "Full Turnkey Villa",
    location: "Hiranandani Estate, Thane",
    year: "2024",
    scope: "Complete Interior Design, MEP, Civil & Turnkey Execution",
    heroImage: images.final,
    intro: "An expansive 5-bedroom villa combining Scandinavian warmth with refined Indian contemporary craftsmanship.",
    concept: "A cohesive narrative built around warm sand tones, architectural stone fireplaces, seamless micro-cement floors, and custom millwork throughout.",
    gallery: [
      { title: "Main Living Hall", caption: "Expansive double-height glazing connecting to private terrace", image: images.final, preset: "up" },
      { title: "Lounge & Library", caption: "Floor-to-ceiling backlit book shelving and leather lounge seating", image: images.lounge, preset: "left" },
      { title: "Gourmet Kitchen", caption: "Integrated appliances behind fluted smoke-oak doors", image: images.kitchen, preset: "right" },
      { title: "Fine Detailing", caption: "Brushed bronze hardware custom-fabricated for this project", image: images.detail, preset: "parallax" }
    ],
    quote: "Altamountt managed everything end-to-end within budget and delivered ahead of our move-in schedule.",
    clientFeedback: "Deshmukh Villa · Thane"
  }
];

export const process = [
  ["01", "Discover & Align", "We listen deeply to how you want to live, analyzing your spatial requirements, lifestyle rituals, aesthetic preferences, and budget parameters."],
  ["02", "Concept & Space Plan", "We develop 2D spatial layouts, volumetric 3D concepts, and mood boards that optimize flow, natural light, and functional zones."],
  ["03", "Refine & Specialize", "Every joinery detail, lighting circuit, material sample, and custom piece is meticulously resolved and specified."],
  ["04", "Turnkey Execution", "Our dedicated on-site project management team oversees craftsmanship, procurement, civil work, and precision installation."],
  ["05", "Handover & Warranty", "We walk you through your immaculate, fully styled space, providing comprehensive documentation, warranties, and post-move care."]
];

export const brandPrinciples = [
  {
    title: "Smart Spatial Planning",
    subtitle: "Every square inch is engineered for seamless movement and uncluttered living.",
    detail: "We analyze structural opportunities and light paths to make compact spaces feel generous and expansive homes feel intimate."
  },
  {
    title: "Material Intelligence",
    subtitle: "Luxury aesthetic without unnecessary budget inflation.",
    detail: "We strategically combine high-impact natural stones and bespoke finishes with durable, value-engineered substrates."
  },
  {
    title: "Single-Source Accountability",
    subtitle: "One trusted partner from initial concept to key handover.",
    detail: "No vendor blame games. We take complete ownership of timelines, material procurement, quality assurance, and costs."
  }
];

export const clientTestimonials = [
  {
    quote: "Altamountt gave our Thane apartment the feeling of a world-class boutique hotel. They were mindful of our budget without ever compromising on aesthetics or build quality.",
    author: "Rohan & Sneha Joshi",
    location: "Thane West",
    rating: 5
  },
  {
    quote: "Their turnkey execution is second to none. From custom wardrobes to concealed lighting, every single detail was completed with surgical precision.",
    author: "Vikram Nair",
    location: "Ghodbunder Road, Thane",
    rating: 5
  }
];
