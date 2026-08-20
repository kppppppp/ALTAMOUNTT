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
  heroPoster: "/client-work/projects/residential/living-tv-unit-01.jpg",
  living: "/client-work/projects/residential/living-tv-unit-01.jpg",
  lounge: "/client-work/projects/residential/living-console-cabinet.jpg",
  dining: "/client-work/projects/residential/bedroom-ilaf-01.jpg",
  bedroom: "/client-work/projects/residential/bedroom-ilaf-study.webp",
  kitchen: "/client-work/interiors/client-kitchen-01.webp",
  bath: "/client-work/projects/commercial/google-bkc-restroom.webp",
  detail: "/client-work/projects/commercial/pachouli-wellness-washbasin.webp",
  material: "/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg",
  final: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
  architectural: "/client-work/projects/commercial/google-bkc-reception.webp",
  warmRoom: "/client-work/projects/commercial/google-bkc-meeting.webp",
  penthouse: "/client-work/projects/commercial/google-bkc-office-01.webp",
  beforeBath: "/client-work/projects/residential/living-tv-unit-01-cad.webp",
  afterBath: "/client-work/projects/residential/living-tv-unit-01.jpg",
  marbleStudy: "/client-work/interiors/client-study-yellow-chairs.webp",
  flutedWood: "/client-work/interiors/client-study-wardrobe-01.webp",
  lightingGlow: "/client-work/interiors/client-wardrobe-secret-door.webp",
  officeInterior: "/client-work/projects/commercial/google-bkc-office-01.webp",
  aboutHero: "/client-work/projects/residential/bedroom-ilaf-01.jpg",
  servicesHero: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
  contactHero: "/client-work/projects/commercial/google-bkc-reception.webp",
};

export const aboutPillars = [
  {
    num: "01",
    title: "Design",
    subtitle: "Architectural Vision",
    desc: "Aesthetic concepts with a distinct architectural point of view. We sculpt spaces that feel sophisticated without being sterile.",
    image: images.dining,
    preset: "up" as const,
  },
  {
    num: "02",
    title: "Function",
    subtitle: "Ergonomic Flow",
    desc: "Every square inch is engineered around the physical rhythm of your day, ensuring seamless movement and clutter-free living.",
    image: images.kitchen,
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
    image: images.living,
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
    title: "Bespoke Study & Dual Seating",
    subtitle: "Custom floating desk integrated with floor-to-ceiling wardrobe units.",
    image: images.marbleStudy,
    preset: "up" as const,
  },
  {
    title: "Fluted Accent Walls & Wardrobes",
    subtitle: "Precision fluting details and wooden drawer handles.",
    image: images.flutedWood,
    preset: "left" as const,
  },
  {
    title: "Integrated Secret Passage & Joinery",
    subtitle: "Wardrobe doors that conceal entranceways to private master baths.",
    image: images.lightingGlow,
    preset: "right" as const,
  },
  {
    title: "Premium Vanities & Gold Hardware",
    subtitle: "Vessel washbasins with wall-mounted champagne gold hardware.",
    image: images.detail,
    preset: "scale" as const,
  },
];

export const imageStackScenes = [
  {
    id: "stack-1",
    label: "LAYER 01 · CORPORATE",
    title: "Google BKC Reception",
    description: "A sweeping reception desk with custom wave-patterned terrazzo flooring and architectural lighting reveals.",
    image: "/client-work/projects/commercial/google-bkc-reception.webp",
  },
  {
    id: "stack-2",
    label: "LAYER 02 · COMMERCIAL",
    title: "Pachouli Wellness Andheri",
    description: "A welcoming reception lobby displaying textured wood cladding, elegant gold lettering, and backlit displays.",
    image: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
  },
  {
    id: "stack-3",
    label: "LAYER 03 · RETAIL",
    title: "Lakme Salon Versova",
    description: "Premium hair styling and treatment zones framed by raw brick accent walls and circular copper pendant lights.",
    image: "/client-work/projects/commercial/lakme-salon-interior-01.webp",
  },
];

// Names and imagery below are only used where the supplied project assets establish the relationship.
export const selectedClients = [
  { name: "GOOGLE", descriptor: "Corporate workspace · BKC", image: "/client-work/projects/commercial/google-bkc-reception.webp" },
  { name: "LAKMÉ", descriptor: "Beauty & styling salon · Versova", image: "/client-work/projects/commercial/lakme-salon-interior-01.webp" },
  { name: "PACHOULI WELLNESS", descriptor: "Wellness clinic · Andheri", image: "/client-work/projects/commercial/pachouli-wellness-reception.webp" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interiors",
    tagline: "Living spaces shaped around your daily rhythm",
    description: "Full-scale interior styling and spatial design for luxury apartments, penthouses, and villas in Thane & Mumbai. From tailored living lounges to serene private suites.",
    image: "/client-work/projects/residential/bedroom-ilaf-01.jpg",
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
    image: "/client-work/projects/commercial/google-bkc-reception.webp",
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
    image: "/client-work/projects/residential/living-tv-unit-01-cad.webp",
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
    image: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
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
    tag: "01 / 05 · Living Lounge · Vivearea",
    title: "Living Lounge",
    subtitle: "Contemporary TV wall unit featuring a seamless marble backdrop with gold accent lines and matching low-profile cabinetry.",
    image: "/client-work/projects/residential/living-tv-unit-01.jpg",
    aspect: "16/10"
  },
  {
    tag: "02 / 05 · Cabinetry Detail · Vivearea",
    title: "Console Craft",
    subtitle: "A hand-crafted console cabinet showing rounded corners and fine vertical fluting with a custom golden metallic finish.",
    image: "/client-work/projects/residential/living-console-cabinet.jpg",
    aspect: "16/10"
  },
  {
    tag: "03 / 05 · Bedroom Suite · Vivearea",
    title: "Master Suite",
    subtitle: "Serene bedroom featuring a custom fluted headboard in sage green, integrated warm LED coves, and dual bedside hanging lamps.",
    image: "/client-work/projects/residential/bedroom-ilaf-01.jpg",
    aspect: "16/10"
  },
  {
    tag: "04 / 05 · Integrated Storage · Vivearea",
    title: "Bespoke Wardrobe",
    subtitle: "Floor-to-ceiling wardrobes featuring integrated golden handles and matching top loft storage to maximize vertical space.",
    image: "/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg",
    aspect: "16/10"
  },
  {
    tag: "05 / 05 · Study Area · Vivearea",
    title: "Work Alcove",
    subtitle: "A dedicated study desk framed by warm vertical timber flutes and matching floating shelving with integrated LED strips.",
    image: "/client-work/projects/residential/bedroom-ilaf-study.webp",
    aspect: "16/10"
  }
];

export const projectsList: ProjectDetail[] = [
  {
    slug: "selected-residence",
    title: "Selected Residence, Vivearea",
    subtitle: "Bespoke Luxury Residential Apartment",
    category: "Residential Architecture",
    location: "Vivearea, Mumbai",
    year: "2024",
    scope: "Bespoke Interior & Millwork",
    heroImage: "/client-work/projects/residential/bedroom-ilaf-01.jpg",
    intro: "A high-end residential apartment at Vivearea, Mumbai, showcasing custom millwork, fluted paneling, sage green tones, and modular layouts.",
    concept: "We optimized the TV wall unit with a marble slab backdrop and gold borders, while designing a master bedroom with fluted headboards and loft storage.",
    gallery: [
      { title: "Master Bedroom", caption: "Sage green fluted headboard with bedside hanging lamps", image: "/client-work/projects/residential/bedroom-ilaf-01.jpg", preset: "up" },
      { title: "TV Unit Option 1", caption: "Polished marble wall TV unit with gold trim", image: "/client-work/projects/residential/living-tv-unit-01.jpg", preset: "right" },
      { title: "Bespoke Console", caption: "Fluted wooden cabinet console detail", image: "/client-work/projects/residential/living-console-cabinet.jpg", preset: "left" },
      { title: "Bedroom Wardrobe", caption: "Beige wardrobes with long brass handles", image: "/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg", preset: "scale" },
      { title: "Bedroom Study", caption: "Compact desk area with integrated overhead shelf", image: "/client-work/projects/residential/bedroom-ilaf-study.webp", preset: "parallax" }
    ],
    quote: "Altamountt transformed our blank layout into a breathtaking, peaceful sanctuary that feels twice as spacious.",
    clientFeedback: "Residential Client · Vivearea"
  },
  {
    slug: "google-bkc",
    title: "Google Office, BKC",
    subtitle: "Modern Corporate Workspace",
    category: "Commercial & Office",
    location: "BKC, Mumbai",
    year: "2024",
    scope: "Space Planning & Interior Architecture",
    heroImage: "/client-work/projects/commercial/google-bkc-reception.webp",
    intro: "A premium corporate workspace designed for Google in BKC, Mumbai, centering around open flow, wave-patterned flooring, and acoustic glass partitions.",
    concept: "We optimized the corridor flow and reception area, pairing textured sand-tone wallpaper with curved concrete elements and stone washroom claddings.",
    gallery: [
      { title: "Google Reception", caption: "Curved wooden desk and terrazzo wave-pattern flooring", image: "/client-work/projects/commercial/google-bkc-reception.webp", preset: "up" },
      { title: "Workstations", caption: "Open-concept desk clusters with acoustic dividers", image: "/client-work/projects/commercial/google-bkc-office-01.webp", preset: "left" },
      { title: "Meeting Suite", caption: "Glass-enclosed conference room with brick accent wall", image: "/client-work/projects/commercial/google-bkc-meeting.webp", preset: "right" },
      { title: "Washroom Vanity", caption: "Round mirrors and concrete vessel basins", image: "/client-work/projects/commercial/google-bkc-restroom.webp", preset: "scale" }
    ],
    quote: "The design completely changed how our team collaborates. The flow and restroom layout are exceptional.",
    clientFeedback: "Google BKC Facilities Team"
  },
  {
    slug: "pachouli-wellness",
    title: "Pachouli Wellness, Andheri",
    subtitle: "Luxury Wellness Clinic & Spa",
    category: "Commercial & Hospitality",
    location: "Andheri, Mumbai",
    year: "2024",
    scope: "Turnkey Interior Design & Styling",
    heroImage: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
    intro: "A serene wellness clinic and spa for Pachouli in Andheri, combining light timber textures, brass detailing, and calming wellness spaces.",
    concept: "We crafted a welcoming reception with wave-textured wall backdrops and gold branding, leading to private spa suites and styling bays.",
    gallery: [
      { title: "Reception Lobby", caption: "Backlit timber counter with customized white-wave backdrop", image: "/client-work/projects/commercial/pachouli-wellness-reception.webp", preset: "up" },
      { title: "Om Therapy Suite", caption: "Serene treatment room featuring copper shirodhara vessel", image: "/client-work/projects/commercial/pachouli-wellness-om-room.webp", preset: "right" },
      { title: "Hair Salon Area", caption: "Styling chairs and vanity mirrors with circular lights", image: "/client-work/projects/commercial/pachouli-wellness-salon.webp", preset: "left" },
      { title: "Spa Suite", caption: "Relaxing massage bed alongside custom shower enclosure", image: "/client-work/projects/commercial/pachouli-wellness-shower.webp", preset: "scale" }
    ],
    quote: "Altamountt delivered a peaceful sanctuary. Our clients frequently compliment the warm lighting and woodwork.",
    clientFeedback: "Dr. Preeti Seth · Pachouli Wellness"
  },
  {
    slug: "lakme-salon",
    title: "Lakme Salon, Versova",
    subtitle: "Premium Beauty & Styling Salon",
    category: "Commercial & Hospitality",
    location: "Versova, Mumbai",
    year: "2023",
    scope: "Interior Design & Turnkey Execution",
    heroImage: "/client-work/projects/commercial/lakme-salon-interior-01.webp",
    intro: "A premium retail styling salon for Lakme in Versova, showcasing industrial chic brick walls, copper lighting, and circular back-light mirrors.",
    concept: "We chose an industrial texture vocabulary, using dark brick cladding and concrete floors to create a high-contrast styling environment.",
    gallery: [
      { title: "Styling Bay", caption: "Styling chairs framed by exposed brick walls and copper pendant lamps", image: "/client-work/projects/commercial/lakme-salon-interior-01.webp", preset: "up" },
      { title: "Reception Desk", caption: "Bespoke counter styling with dark accents", image: "/client-work/projects/commercial/lakme-salon-interior-02.webp", preset: "left" },
      { title: "Entrance Lobby", caption: "Glass doors and outdoor seating area", image: "/client-work/projects/commercial/lakme-salon-entrance.webp", preset: "right" }
    ],
    quote: "The salon styling stands out. The brick wall texture and copper styling details are perfect for our brand.",
    clientFeedback: "Lakme Salon Management"
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
