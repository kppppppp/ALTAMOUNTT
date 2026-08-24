export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // split into paragraphs
  pullQuote?: string;
  category: "INTERIORS" | "ARCHITECTURE" | "MATERIALS" | "DESIGN PROCESS" | "COMMERCIAL SPACES" | "RESIDENTIAL";
  date: string;
  readTime: string;
  image: string;
  relatedSlugs: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "plan-home-interior-before-drawing",
    title: "How to Plan a Home Interior Before the First Drawing",
    excerpt: "Before layout pens touch paper, a home must be understood in habits, light, and the daily rituals of the people who inhabit it.",
    content: [
      "Every successful luxury interior design project begins not with a sketch or a mood board, but with a deep, diagnostic conversation. At Altamountt, we believe that space is secondary to lifestyle. When we sit down with a client in Thane or Mumbai, we ask questions about their mornings, their cooking habits, and how they wind down at night.",
      "This initial discovery phase is crucial. It reveals the ergonomic demands of the home. For instance, is the kitchen a social hub or a private cooking workshop? Do the master suites need integrated work alcoves, or should they be pure sanctuaries of rest? Only when these behavioral profiles are clear do we begin drawing.",
      "The layout should flow organically from these profiles. By setting behavioral parameters first, the final CAD layouts and elevations feel less like generic rooms and more like tailor-made architectural skins designed to support the rhythms of contemporary living."
    ],
    pullQuote: "Design is not what we draw; it is how we translate the physical movement of your day into permanent timber and stone.",
    category: "DESIGN PROCESS",
    date: "August 12, 2026",
    readTime: "4 min read",
    image: "/client-work/interiors/img9.jpeg", // Living Lounge
    relatedSlugs: ["designing-home-around-way-you-live", "lighting-changes-character-room"]
  },
  {
    slug: "five-material-decisions-luxury-interior",
    title: "5 Material Decisions That Define a Luxury Interior",
    excerpt: "Luxury is not about expense; it is about the honesty of materials, tactile contrast, and how light interacts with surfaces.",
    content: [
      "When planning high-end apartments or penthouses, material selection is the divider between a trendy space and a timeless home. The modern luxury aesthetic is quiet, focused on texture, depth, and structural authenticity.",
      "First is the selection of natural stone. Instead of highly polished surfaces, we opt for sandblasted, fluted, or honed marbles that scatter light softly. Second is timber grain: selecting open-grain oak or walnut veneer brings organic warmth. Third, metal finishes should remain brushed or oil-rubbed to avoid gaudy glare.",
      "Fourth, we look at the integration of architectural plaster and stucco wall finishes to add subtle structural depth. Finally, lighting glow: matching the materials against a color temperature of 2700K to 3000K ensures that every veneer grain and marble vein looks rich and inviting."
    ],
    pullQuote: "Timeless luxury is understated. It exists in the transition between cool stone and warm wood, illuminated by concealed light.",
    category: "MATERIALS",
    date: "July 28, 2026",
    readTime: "5 min read",
    image: "/client-work/interiors/img8.jpeg", // Dining Space
    relatedSlugs: ["plan-home-interior-before-drawing", "from-drawing-to-execution-site"]
  },
  {
    slug: "designing-commercial-spaces-strengthen-brand",
    title: "Designing Commercial Spaces That Strengthen a Brand",
    excerpt: "How corporate offices, styling salons, and wellness clinics act as physical manifestations of company credibility.",
    content: [
      "A commercial interior is not just a place where work happens—it is a physical business card. Whether we are designing a headquarters for Google in BKC, a Lakmé styling salon, or a Pachouli wellness clinic, our focus is translating brand values into spatial form.",
      "For corporate environments, this means structuring clear sightlines, planning efficient corridor paths, and prioritizing acoustic glass partitions to balance collaboration with executive privacy. The reception area is the main touchpoint, where custom terrazzo or stone work communicates stability and prestige.",
      "In retail and hospitality, the layout must control client pacing. Placing display alcoves, treatment rooms, or product rails in a sequence of discoveries makes the space feel curated. Brand consistency is maintained through customized millwork detailing and signature lighting."
    ],
    pullQuote: "A corporate workspace or retail salon should immediately communicate trust, capability, and brand identity the moment a visitor steps in.",
    category: "COMMERCIAL SPACES",
    date: "July 15, 2026",
    readTime: "6 min read",
    image: "/client-work/projects/commercial/google-bkc-reception.webp",
    relatedSlugs: ["from-drawing-to-execution-site", "five-material-decisions-luxury-interior"]
  },
  {
    slug: "from-drawing-to-execution-site",
    title: "From Drawing to Execution: What Happens on Site",
    excerpt: "Demystifying the complex turnkey transition from conceptual CAD blueprints to finished timber joinery on site.",
    content: [
      "A beautiful rendering is only as good as the execution team behind it. Turnkey interior delivery requires absolute alignment between the project designer, the structural engineers, and the master carpenters.",
      "On site in Thane or Mumbai, coordination starts with the civil survey. Before any timber panels are assembled, we verify wall plumb lines and floor levels. Any structural variation is factored into the shop drawings. Electrical routing and concealed lighting channels are carved out next.",
      "The final stage is modular assembly. Custom wardrobes, headboard panels, and fluted joineries designed in the studio are mounted to fit the structural alcoves. Regular site checks ensure that margins are minimal and surfaces are finished with absolute precision."
    ],
    pullQuote: "An architect's design is only complete when the keys are handed over, and every drawer glide and light switch operates with silent ease.",
    category: "DESIGN PROCESS",
    date: "June 30, 2026",
    readTime: "5 min read",
    image: "/client-work/interiors/drawing1.png", // technical drawing
    relatedSlugs: ["five-material-decisions-luxury-interior", "designing-commercial-spaces-strengthen-brand"]
  },
  {
    slug: "lighting-changes-character-room",
    title: "How Lighting Changes the Character of a Room",
    excerpt: "Concealed LEDs, sculptural highlights, and matching color temperatures. The invisible architectural force.",
    content: [
      "Lighting is the single most important, yet often overlooked, component of interior design. You can select the finest Calacatta marble and open-grain oak, but under harsh, uncalibrated white light, the space will look sterile and flat.",
      "To counter this, we design in layers. The first layer is architectural ambient lighting—utilizing trimless recessed downlights to highlight main pathways. The second is task lighting—focused beams for desks, kitchen counters, and reading chairs. The third and most dramatic layer is cove lighting.",
      "Concealed warm LED strips (2700K) running along ceiling coves, headboard panels, and joinery kickers soften the structural transitions. This creates a floating effect, making heavy architectural materials feel weightless and adding a sense of sanctuary."
    ],
    pullQuote: "Concealed light is architectural paint. It highlights textures, deepens shadows, and defines the mood of a home.",
    category: "INTERIORS",
    date: "May 18, 2026",
    readTime: "4 min read",
    image: "/client-work/interiors/im1.jpeg", // Circular Headboard Glow
    relatedSlugs: ["plan-home-interior-before-drawing", "designing-home-around-way-you-live"]
  },
  {
    slug: "designing-home-around-way-you-live",
    title: "Designing a Home Around the Way You Live",
    excerpt: "Moving away from templated plans. How we design residential sanctuaries shaped by proportion, flow, and personality.",
    content: [
      "A home should be a mirror of the family that owns it. Templated developer floorplans often separate spaces rigidly, resulting in underutilized rooms. At Altamountt, our approach focuses on spatial fluidity.",
      "We design open-plan dining and living areas that encourage social connection while keeping master bedrooms as sound-insulated, private suites. Custom joineries double as storage to keep paths completely clutter-free.",
      "The result of this design methodology is a residence that feels light, proportioned, and responsive to the needs of modern lifestyles. It is a home engineered for daily living, built around trust, and finished with precision."
    ],
    pullQuote: "Your home is the setting of your daily life. It should respond to your movements, clear away clutter, and welcome you back.",
    category: "RESIDENTIAL",
    date: "May 05, 2026",
    readTime: "5 min read",
    image: "/client-work/interiors/img11.jpeg", // striped master suite
    relatedSlugs: ["plan-home-interior-before-drawing", "lighting-changes-character-room"]
  }
];
