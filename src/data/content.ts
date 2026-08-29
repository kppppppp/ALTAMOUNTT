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
  role?: string;
  area?: string;
  heroImage: string;
  intro: string;
  concept: string;
  challenge?: string;
  approach?: string;
  result?: string;
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
  phone: "+917304723416",
  phoneDisplay: "+91 73047 23416",
  whatsappUrl: "https://wa.me/917304723416?text=Hi%20Altamountt%20team%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services.",
  mapsUrl: "https://maps.google.com/?q=JVM+Sky+Court+Bhayandarpada+Thane",
  email: "hello@altamounttdesign.com",
  rating: "5.0",
  reviewCount: "10+ Google Reviews",
};

export const founderInfo = {
  name: "Pradeep Mohanthy",
  role: "Founder & Principal Designer",
  desc: "Leads spatial concept planning and material direction. Oversees all residential design blueprints and corporate flow layouts.",
  image: "/client-work/pradeep.png",
};

export const images = {
  founderProfile: "/client-work/pradeep.png",
  heroPoster: "/client-work/interiors/img7.jpeg", // Living Room
  living: "/client-work/interiors/img9.jpeg", // Living Lounge
  lounge: "/client-work/interiors/img7.jpeg", // Living Room
  dining: "/client-work/interiors/img8.jpeg", // Dining Space
  bedroom: "/client-work/interiors/img11.jpeg", // Bedroom
  kitchen: "/client-work/interiors/client-kitchen-01.webp",
  bath: "/client-work/projects/commercial/google-bkc-restroom.webp",
  detail: "/client-work/interiors/drawing0.png",
  material: "/client-work/interiors/img6.jpeg", // Agate Art Bedroom
  final: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
  architectural: "/client-work/interiors/img12.jpeg", // Terrace/Balcony
  warmRoom: "/client-work/interiors/img13.jpeg", // Dining Mirror
  penthouse: "/client-work/interiors/img12.jpeg", // Terrace
  beforeBath: "/client-work/interiors/drawing0.png", // Design Drawing
  afterBath: "/client-work/interiors/img7.jpeg", // Finished Living Room
  marbleStudy: "/client-work/interiors/img5.jpeg", // Study Desk
  flutedWood: "/client-work/interiors/img4.jpeg", // Wardrobe/Bedroom
  lightingGlow: "/client-work/interiors/im1.jpeg", // Circular Headboard
  officeInterior: "/client-work/projects/commercial/google-bkc-office-01.webp",
  aboutHero: "/client-work/interiors/img11.jpeg", // Bedroom striped
  servicesHero: "/client-work/interiors/img9.jpeg", // Living Lounge
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
    title: "Bespoke Study Desk",
    subtitle: "Custom desk integrated with overhead olive green cabinetry and floating shelves.",
    image: images.marbleStudy,
    preset: "up" as const,
  },
  {
    title: "Contemporary Wardrobes",
    subtitle: "Precision wardrobe design in soft beige and olive green tones.",
    image: images.flutedWood,
    preset: "left" as const,
  },
  {
    title: "Custom Headboards & Wall Patterns",
    subtitle: "Bespoke circular wall motifs paired with deep blue tufted upholstery.",
    image: images.lightingGlow,
    preset: "right" as const,
  },
  {
    title: "Architectural Planning & Layouts",
    subtitle: "Precise spatial planning from initial concept drawings to final execution.",
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
    tagline: "Thoughtfully designed residences shaped around the way you live.",
    description: "Full-scale interior styling and spatial design for luxury apartments, penthouses, and villas in Thane & Mumbai. From tailored living lounges to serene private suites.",
    image: "/client-work/interiors/img6.jpeg",
    subservices: [
      "Living & Entertainment Spaces",
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
    tagline: "Distinctive spaces designed to elevate brands, businesses and guest experiences.",
    description: "Boutique offices, corporate headquarters, executive suites, and dining environments designed to maximize engagement, workflow efficiency, and signature brand prestige.",
    image: "/client-work/interiors/img10.jpeg",
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
    tagline: "Where architecture, proportion, light and material come together.",
    description: "Transformative structural reconfiguration, light optimization, architectural millwork, custom ceiling designs, and refined natural material selections.",
    image: "/client-work/interiors/img12.jpeg",
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
    title: "Turnkey Interior ",
    tagline: "Seamless end-to-end execution from sketch to keys",
    description: "One single accountable team managing procurement, engineering, contractor supervision, craftsmanship, and on-schedule handover within your established budget.",
    image: "/client-work/interiors/img11.jpeg",
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
    tag: "01 / 05 · Living Room · Vivearea",
    title: "Living Space",
    subtitle: "A welcoming living area anchored by a dramatic marble TV wall, featuring rich brown leather sofas and contrasting mustard yellow armchairs.",
    image: "/client-work/interiors/img7.jpeg",
    aspect: "16/10"
  },
  {
    tag: "02 / 05 · Media Wall · Vivearea",
    title: "Media & Study",
    subtitle: "A multi-functional bedroom media wall integrating a sleek TV unit, backlit display shelving, and a dedicated workspace.",
    image: "/client-work/interiors/img2.jpeg",
    aspect: "16/10"
  },
  {
    tag: "03 / 05 · Bedroom Suite · Vivearea",
    title: "Master Suite",
    subtitle: "A striking bedroom composition defined by a bold blue tufted bed, set against an illuminated circular acoustic wall panel.",
    image: "/client-work/interiors/im1.jpeg",
    aspect: "16/10"
  },
  {
    tag: "04 / 05 · Dining Area · Vivearea",
    title: "Dining Interiors",
    subtitle: "An elegant dining space focused on a white marble table with sculptural gold bases, paired with textured curved dining chairs.",
    image: "/client-work/interiors/img8.jpeg",
    aspect: "16/10"
  },
  {
    tag: "05 / 05 · Study Area · Vivearea",
    title: "Work Alcove",
    subtitle: "A dedicated study desk featuring overhead olive green cabinetry, open display shelving, and integrated warm LED task lighting.",
    image: "/client-work/interiors/img5.jpeg",
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
    role: "Design + Execution",
    scope: "Bespoke Interior & Millwork",
    area: "2,400 sq ft",
    heroImage: "/client-work/projects/residential/bedroom-ilaf-01.jpg",
    intro: "A high-end residential apartment at Vivearea, Mumbai, showcasing custom millwork, fluted paneling, sage green tones, and modular layouts.",
    concept: "We optimized the TV wall unit with a marble slab backdrop and gold borders, while designing a master bedroom with fluted headboards and loft storage.",
    challenge: "Transforming a bare residential layout into a customized, high-functioning family residence with dedicated workspaces and storage without making the spaces feel small or cluttered.",
    approach: "We introduced a custom timber vocabulary, optimizing the layout to flow naturally between private bedrooms and shared living suites. Integrated secret doors, fluted wood paneling, and custom lighting schemes.",
    result: "A peaceful, cohesive home where every room is visually connected through timber details and natural stone highlights.",
    gallery: [
      { title: "Master Bedroom", caption: "Sage green fluted headboard with bedside hanging lamps", image: "/client-work/projects/residential/bedroom-ilaf-01.jpg", preset: "up" },
      { title: "TV Unit Option 1", caption: "Polished marble wall TV unit with gold trim", image: "/client-work/projects/residential/living-tv-unit-01.jpg", preset: "right" },
      { title: "Bespoke Console", caption: "Fluted wooden cabinet console detail", image: "/client-work/projects/residential/living-console-cabinet.jpg", preset: "left" },
      { title: "Bedroom Wardrobe", caption: "Beige wardrobes with long brass handles", image: "/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg", preset: "scale" },
      { title: "Bedroom Study", caption: "Compact desk area with integrated overhead shelf", image: "/client-work/projects/residential/bedroom-ilaf-study.webp", preset: "parallax" },
      { title: "TV Unit Option 2", caption: "Bespoke dark veneer and gold frame wall unit", image: "/client-work/projects/residential/living-tv-unit-02.webp", preset: "up" },
      { title: "Bedroom Elevation CAD", caption: "Technical wardrobe blueprint layout", image: "/client-work/projects/residential/bedroom-ilaf-cad.webp", preset: "right" },
      { title: "TV Unit Elevation CAD", caption: "Technical details of the marble backdrop", image: "/client-work/projects/residential/living-tv-unit-01-cad.webp", preset: "left" }
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
    role: "Space Planning & Interior Architecture",
    scope: "Space Planning & Corridor Flow Coordination",
    heroImage: "/client-work/projects/commercial/google-bkc-reception.webp",
    intro: "A premium corporate workspace designed for Google in BKC, Mumbai, centering around open flow, wave-patterned flooring, and acoustic glass partitions.",
    concept: "We optimized the corridor flow and reception area, pairing textured sand-tone wallpaper with curved concrete elements and stone washroom claddings.",
    challenge: "Designing a high-performance office space in BKC that optimizes flow and acoustics, aligning with corporate guidelines while maintaining local design identity.",
    approach: "We resolved the corridor layouts, positioned workstations for open communication, integrated acoustic panels, and custom-designed the reception wave-patterned terrazzo floor.",
    result: "A highly collaborative corporate environment featuring seamless flow, exceptional restroom vanity layouts, and sound-insulated zones.",
    gallery: [
      { title: "Google Reception", caption: "Curved wooden desk and terrazzo wave-pattern flooring", image: "/client-work/projects/commercial/google-bkc-reception.webp", preset: "up" },
      { title: "Workstations", caption: "Open-concept desk clusters with acoustic dividers", image: "/client-work/projects/commercial/google-bkc-office-01.webp", preset: "left" },
      { title: "Collaborative Zone", caption: "Creative workspace layout with linear ceiling fixtures", image: "/client-work/projects/commercial/google-bkc-office-02.webp", preset: "up" },
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
    role: "Turnkey Interior Design & Styling",
    scope: "Turnkey Interior Design & Execution",
    heroImage: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
    intro: "A serene wellness clinic and spa for Pachouli in Andheri, combining light timber textures, brass detailing, and calming wellness spaces.",
    concept: "We crafted a welcoming reception with wave-textured wall backdrops and gold branding, leading to private spa suites and styling bays.",
    challenge: "Creating a multi-sensory wellness clinic that induces calm and relaxation while accommodating technical clinic requirements and private treatment rooms.",
    approach: "We chose light timber textures and wave-like wall panels. Designed backlit corporate signage and dedicated spa suites with custom-engineered wet rooms and circular lighting profiles.",
    result: "A serene clinical sanctuary that blends clean hygiene requirements with quiet, natural hospitality aesthetics.",
    gallery: [
      { title: "Reception Lobby", caption: "Backlit timber counter with customized white-wave backdrop", image: "/client-work/projects/commercial/pachouli-wellness-reception.webp", preset: "up" },
      { title: "Consultation Cabin", caption: "Executive discussion space with leather chairs and wood screens", image: "/client-work/projects/commercial/pachouli-wellness-consultation.webp", preset: "left" },
      { title: "Om Therapy Suite", caption: "Serene treatment room featuring copper shirodhara vessel", image: "/client-work/projects/commercial/pachouli-wellness-om-room.webp", preset: "right" },
      { title: "Hair Salon Area", caption: "Styling chairs and vanity mirrors with circular lights", image: "/client-work/projects/commercial/pachouli-wellness-salon.webp", preset: "left" },
      { title: "Spa Suite", caption: "Relaxing massage bed alongside custom shower enclosure", image: "/client-work/projects/commercial/pachouli-wellness-shower.webp", preset: "scale" },
      { title: "Therapy Restroom", caption: "Bespoke stone basin and fluted glass paneling", image: "/client-work/projects/commercial/pachouli-wellness-washbasin.webp", preset: "up" }
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
    role: "Interior Design & Turnkey Execution",
    scope: "Interior Design & Turnkey Execution",
    heroImage: "/client-work/projects/commercial/lakme-salon-interior-01.webp",
    intro: "A premium retail styling salon for Lakme in Versova, showcasing industrial chic brick walls, copper lighting, and circular back-light mirrors.",
    concept: "We chose an industrial texture vocabulary, using dark brick cladding and concrete floors to create a high-contrast styling environment.",
    challenge: "Delivering an industrial-chic salon space with high client traffic capacity, requiring robust materials and optimal styling-station lighting.",
    approach: "We balanced high-contrast exposed brick walls with custom copper pendant fixtures, dark concrete flooring, and backlit vanity mirrors.",
    result: "A visually striking styling salon with dedicated treatment zones and high durability finishes.",
    gallery: [
      { title: "Styling Bay", caption: "Styling chairs framed by exposed brick walls and copper pendant lamps", image: "/client-work/projects/commercial/lakme-salon-interior-01.webp", preset: "up" },
      { title: "Reception Desk", caption: "Bespoke counter styling with dark accents", image: "/client-work/projects/commercial/lakme-salon-interior-02.webp", preset: "left" },
      { title: "Entrance Lobby", caption: "Glass doors and outdoor seating area", image: "/client-work/projects/commercial/lakme-salon-entrance.webp", preset: "right" }
    ],
    quote: "The salon styling stands out. The brick wall texture and copper styling details are perfect for our brand.",
    clientFeedback: "Lakme Salon Management"
  },
  {
    slug: "arun-classes",
    title: "Arun Classes, Thane",
    subtitle: "Premium Educational Space",
    category: "Commercial & Office",
    location: "Thane, Maharashtra",
    year: "2024",
    role: "Interior Space Planning & Branding",
    scope: "Space Layout & Lighting Plan",
    heroImage: "/client-work/projects/commercial/arun-classes-classroom.webp",
    intro: "A state-of-the-art coaching center designed to cultivate focused learning and student engagement in Thane.",
    concept: "We optimized classroom configurations for maximum seating efficiency and visual sightlines, incorporating custom acoustic wood panels and glare-free lighting systems.",
    challenge: "Optimizing a limited educational footprint to maximize seating capacity and focus, avoiding a cramped feeling.",
    approach: "We designed customized linear rows, integrated acoustic panels, and glare-free overhead lighting to improve student sightlines.",
    result: "An efficient classroom layout that elevates student attendance and visual engagement.",
    gallery: [
      { title: "Lecture Hall", caption: "Focused classroom rows with write-in desks and visual aids", image: "/client-work/projects/commercial/arun-classes-classroom.webp", preset: "up" },
      { title: "Discussion Suite", caption: "Private counseling chamber with linear lighting details", image: "/client-work/projects/commercial/arun-classes-meeting.webp", preset: "right" }
    ],
    quote: "The visual design and lighting have noticeably improved student focus and class attendance.",
    clientFeedback: "Arun Classes Management Team"
  },
  {
    slug: "atoz-studio",
    title: "A to Z Studio Office, Thane",
    subtitle: "Creative Design Workspace",
    category: "Commercial & Office",
    location: "Thane, Maharashtra",
    year: "2023",
    role: "Turnkey Design & Execution",
    scope: "Design, Procurement & Execution",
    heroImage: "/client-work/projects/commercial/atoz-studio-office-01.webp",
    intro: "A modern design office layout optimizing collaboration and workspace ergonomics in Bhayandarpada.",
    concept: "We designed a layout dividing open workstations and material libraries from cozy informal break areas, utilizing industrial grey overlays and fluted panels.",
    challenge: "Designing a modern creative workshop where materials and open design ideas can be organized, keeping the office flow uncluttered.",
    approach: "We divided linear work desks from informal breakout areas using grey overlays, fluted panels, and custom cabinets.",
    result: "A functional design office that serves as both a material library and a creative layout workspace.",
    gallery: [
      { title: "Creative Workspace", caption: "Ergonomic linear workstations with integrated cable routing", image: "/client-work/projects/commercial/atoz-studio-office-01.webp", preset: "up" },
      { title: "Breakout Area", caption: "Informal discussion desk beside materials library showcase", image: "/client-work/projects/commercial/atoz-studio-office-02.webp", preset: "left" }
    ],
    quote: "Altamountt turned our limited office square footage into a highly functional, creative design studio.",
    clientFeedback: "A to Z Studio Creative Director"
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
    quote:
      "Altamountt Space and Design is one of the best interior designers in GB Road, Thane. Their team transformed our 4 BHK flat into a modern and elegant home with perfect space planning. The finishing, materials, and modular design quality are excellent. Highly recommended for home interiors and renovations!",
    author: "Habib Jan",
    location: "Thane",
    rating: 5,
  },
  {
    quote:
      "Amazing experience working with Altamountt. Their designs are modern, functional, and luxurious. They helped us with full office renovation and interior decoration. Highly professional and creative team.",
    author: "Swati Prasad",
    location: "Thane West",
    rating: 5,
  },
  {
    quote:
      "One stop solution. The detailing and finishing is too good. Also pricing is reasonable. Highly recommended.",
    author: "Prashant Shetty",
    location: "Thane",
    rating: 5,
  },
  {
    quote:
      "I recently worked with Altamountt Space & Design and had a great experience from start to finish. If you're looking for professional interior designers in Thane, this team is definitely worth considering.",
    author: "Swapnil Patil",
    location: "Thane",
    rating: 5,
  },
  {
    quote:
      "We got this company from Google having very good service, design and material quality. The company is very flexible to achieve our dream home interior. We are satisfied with this company.",
    author: "Pranjal Gupta",
    location: "Thane",
    rating: 5,
  },
];