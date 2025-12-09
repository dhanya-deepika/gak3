"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ContactForm from "../ContactForm"; // import your form

export type Project = {
  name: string;
  companies: string[];
  image: string;
  description: string;
};

 // Placeholder: Replace with your actual projects data
  const projects: Project[] = [
    {
      name: "Financial District",
      companies: [
        "Sunshine Destino",
        "4 BHK",
        "Under-Construction",
        "2800 - 3500 SFT",
      ],
      image: "/images/sunshine.jpg",
      description:
        "Spread over approximately 5.5 acres in Nanakramguda's Financial District,Sunshine Destino is a high-rise,nature-blended residential oasis by Sunshine Developers.It offers thoughfully designed 3 & 4 BHK apartments in earthen tones and embraces biophilic,eco-friendly living with green balconies and lower carbon footprint features,all while louging in luxe.",
    },
    {
      name: "Financial District",
      companies: [
        "Sumadhura Olympus",
        "3 & 4 BHK",
        "1,670-3,000 SFT",
        "Under Construction",
      ],
      image: "/images/candeur.jpg",
      description:
        "Sumadhura's Olympus towers rise majestically as twin 44-storey skyscrapers,among Hyderabad's tallest, offering sweeping skyline views.It features ultra-luxury 3 & 4 BHK homes with a premium clubhouse - Club Zeus boasting over 80 lifestyle amenities like a sports bar,co-working zones,a mini-theatre,cafe,and wellness lounges.Set on 5.06 acres,this is where opulence flirts with biophilic charm and city connectivity.",
    },
    {
      name: "Financial District",
      companies: [
        "Raghava Cinq",
        "4 BHK",
        "3,575-3,644 SFT",
        "Under Constrction",
      ],
      image: "/images/dsr.jpg",
      description:
        "CINQ by Raghava is a vertical urban ecosystem across five grand towers with 61 floors each.It's a walk-to-work concept with stilt-level car-free zones,butterfly walkways,skate park,amphitheatre,infinity pools,sky lounges,a and a 55,000 sq ft nature, and community beautifully.",
    },
    {
      name: "Financial District",
      companies: [
        "Aurum/TARANG by Sree Varaaha",
        "4 BHK",
        "3,180-9,800 SFT",
        "Pre-Launch",
      ],
      image: "/images/myhome.jpg",
      description:
        "Aurum (also called TARANG) by Sree Vaaraha is a G+54 ultra-luxury residential development sprawled across 6 acrs,featuring four towers, a 50,000 sq ft clubhouse,and in-tower ground-level amenities.It promises uninterrupted views,neighbourhood harmon,and top-tier access via ORR exits.",
    },
    {
      name: "Kokapet",
      companies: [
        "My Home APAS",
        "3 BHK",
        "2,765-3860 SFT",
        "Under Construction",
      ],
      image: "/images/prinia.jpg",
      description:
        "Set gracefully across 13.52 acres,My Home Apas overlooks the tranquil vistas of kokapet and Osman Sagar lakes,offering a serene yet sophisticated retreat.Six slleek towers with generous 3 BHK residences deliver ultramodern,luxury living envelopedd in calm.",
    },
    {
      name: "kokapet",
      companies: [
        "DSR-The Classe",
        "3 & 4 BHK",
        "2,552-3,939 SFT",
        "Under Construction",
      ],
      image: "/images/dsr.jpg",
      description:
        "Nestled beside Gandipet Lake,The Classes is a statuesque 28-storey marvel(four towers) that reshapes Kokapet's skyline.its corner apartments boast abundant natural light,and a no-car stilt level enhances privacy and safety,rooted in luxury and timeless elegance",
    },
    {
      name: "Kokapet",
      companies: [
        "E-Infra & PVR Skyven",
        "4 BHK",
        "5,662-6,278 SFT",
        "Under Construction",
      ],
      image: "/images/rajpushpa.jpg",
      description:
        "The Skyven,Southern India's first 63-storey residdential structure(755 feet tall),delivers ultra-exclusivity with only 210 residencies.It boasts a two-level sky clubhouse,rooftop infinity pool,and india's first observatory within a home where sky meets swagger.",
    },
    {
      name: "Kokapet",
      companies: [
        "Rajapushpa Pristinia",
        "2,3 & 4 BHK",
        "1,380-4,595 SFT",
        "Under Construction",
      ],
      image: "/images/rajpushpa.jpg",
      description:
        "This gated community spans over 12.6 acres with over 1,780 well-designeeed apartments across six toweers.Expect a vast 60,000 SFT clubhouse,sweeping landscaped courtyards,amphitheatre,sports zones,and some of the lushest amenities in kokapet,wrapped in premium comfort and generous open space.",
    },
    {
      name: "Kokapet",
      companies: ["AVR Evania", "3.5 & 4 BHK", "Under Construction"],
      image: "/images/sunshine.jpg",
      description:
        "Tuckeed into a compact footprint,AVR Evania is small in scale but generous in offerings.A single elegant tower with luxe 3.5 & 4 BHK apartments boasts a clubhouse,swimming pool,a fitness center,landscaped gardens, and banquet facilities.Ideal for families seeking modern living with a serene ambiance.",
    },
    {
      name: "Kokapet",
      companies: [
        "Navanaami K3",
        "3.5 & 4 BHK",
        "2,437-3,379 SFT",
        "Under Construction",
      ],
      image: "/images/urbanrise.jpg",
      description:
        "This high-rise sensation rises 60 storeys and graces a rare 120-foot wide main road.Designed by singapore-based landscapers,K3 boasts skyline and lake views from above thee 4th floor,rooftop amenities on the 60th,and smart floor plans with maid quarters.",
    },
    {
      name: "Lingampally",
      companies: [
        "Candeur Crescent",
        "2.5 & 3 BHK",
        "1,333-2,656 SFT",
        "Under Construction",
      ],
      image: "/images/Vision.jpg",
      description:
        "This luxury skyscraper,justt 0.2 km from Lingampally station redefines veertical living with only five flats per floor (four are corner units),ensuring 180° views and top-tier privacy.Spanning 5.5 acres and 80% open space,it features a sprawling 62,000 sq ft clubhouse, lush landscaped gardens, and a host of amenities including indoor courts,jogging tracks,childrens play areas, and even a cinema-esque multipurpose hall.",
    },
    {
      name: "Moosapet",
      companies: [
        "SAS Soul of Earth",
        "3,3.5,4 & 4.5 BHK",
        "1,680-4,550 SFT",
        "Pre-Launch",
      ],
      image: "/images/yula.jpg",
      description:
        "Imagined as a slice of 'Central Park' in Hyderbad,this upcoming skyline statement delivers sweeping water views over its 25-acre expanse,featuring up to 11 towering heights,plush sky villas, and spacious 3-4.5 BHK apartments.While promotional info suggests 45 floors,other listings note G+27,either way,it's designed for grandeur.",
    },
    {
      name: "Manchirevula",
      companies: [
        "Rajapushpa Infina",
        "2 & 3 BHK",
        "1,326-2,257 SFT",
        "Under Construction",
      ],
      image: "/images/Vision.jpg",
      description:
        "A high-density vertical habitat spread across nearly 13 acres,Rajapushpa Infina delivers epic proportions with over 1,500 luxury apartments distributed across six soaring towers,each stretching 55 floors and offering expansive 3-4 BHK units that feel more like penthouses than flats.Expect bold architecture and a commanding presence.",
    },
    {
      name: "Manchirevula",
      companies: [
        "Verdant Bayleaf",
        "3 & 4 BHK",
        "1,695-2,595 SFT",
        "Under Construction",
      ],
      image: "/images/yula.jpg",
      description:
        "Verdant Bayleaf brings boutique residential charm to Manchirevula housing juust over 200 luxury 3 & 4 BHK apartments.At 2.17 acres,it's a compact yet refined offering featuring Vastu-compliant design,located strategically near ORR and IT hubs for that commuter-friendly life.",
    },
    {
      name: "Nanakramguda",
      companies: [
        "Rajapushpa Provincia",
        "2 & 3 BHK",
        "1,370-2,660 SFT",
        "Under Construction",
      ],
      image: "/images/Vision.jpg",
      description:
        "An expansive gated township, Rajapushpa Provincia sprawls across nearly 24 acres and is divided into two phases both nearing mass sell-out. Phase I promises luxury 2–3 BHK homes with premium pricing and Phase II brings slightly more attainable options. With nearly 3,500 units, it's a megaproject gaining traction from investors and homeowners alike.",
    },
    {
      name: "Nanakramguda",
      companies: [
        "Aparna Zenon",
        "2 & 3 BHK",
        "1,326-2,257 SFT",
        "Under Construction",
      ],
      image: "/images/yula.jpg",
      description:
        " Aparna Zenon sprawls over 30 acres and hosts nearly 3,700 luxurious 2–3 BHK homes across 14 mid-rise towers. With early 2026 possession and competitive pricing for Nanakramguda, it's positioned for buyers who want a prime location with premium facilities.  ",
    },

    {
      name: "Neopolis",
      companies: [
        "Yula & Globus - Plot No. 11",
        "3 & 4 BHK",
        "2,235-3,510 SFT",
        "Pre-Launch",
      ],
      image: "/images/Vision.jpg",
      description:
        "Yula Globus Neo (Plot No. 11) is one of the high-profile luxury launches in Neopolis,Kokapet. With two towers rising to 57 floors, it brings international-grade architecture and design to Hyderabad’s most premium micro-market. Each residence blends space efficiency with luxury, ensuring sweeping city views,branded specifications, and high lifestyle quotient.",
    },
    {
      name: "Neopolis",
      companies: [
        "Sattva Lakeridge",
        "3,4 & 5 BHK",
        "2,100-5,500 SFT",
        "Under Construction",
      ],
      image: "/images/yula.jpg",
      description:
        "Spread over 9.5 acres, Sattva Lakeridge offers luxury living with panoramic lake views. With 6 towers rising 37 floors high and a 65,000 sq ft clubhouse, it caters to those seeking a blend of exclusivity and convenience. Certified IGBC Gold for sustainability, the project boasts private lifts, large balconies, and high-end amenities, making it one of the landmark gated communities in Neopolis.",
    },
    {
      name: "Neopolis",
      companies: [
        "MSN Realty - One",
        "4 BHK",
        "5,250-7,460 SFT",
        "Under Construction",
      ],
      image: "/images/Vision.jpg",
      description:
        "One by MSN is a mega luxury development in Neopolis spanning 7.7 acres. With 6 skyscrapers housing just 655 residences, the project focuses on exclusivity. Homes are expansive 4 BHKs with private lobbies and premium finishes. A 1,00,000+ sq ft clubhouse and resort-style amenities position MSN One as an “address of privilege” designed for UHNI and luxury buyers. ",
    },
    {
      name: "Neopolis",
      companies: [
        "GHR Infra - The Cascades",
        "3,3.5,4 & 4.5 BHK",
        "2,500-4,800 SFT",
        "Under Construction",
      ],
      image: "/images/yula.jpg",
      description:
        "The Cascades is a joint venture by GHR Infra, Lakshmi Infratech, and UrbanBlocks Realty. Spread over 7.34 acres, the project has five 63-floor skyscrapers making it one of Hyderabad’s tallest luxury communities. With over 2 lakh sq. ft. of amenities including a 50,000+ sq ft clubhouse, helipads, and sky lounges, it redefines high-rise living. Cascades is designed around wellness, green landscapes, and iconic architecture. ",
    },

    {
      name: "Neopolis",
      companies: [
        "SSI - Fortune Surajbhan Grande",
        "3.5 & 4 BHK",
        "2,850-3,850 SFT",
        "Pre-Launch (EOI stage)",
      ],
      image: "/images/Vision.jpg",
      description:
        "Fortune Surajbhan Grande is a 12-acre luxury enclave with 6 towers and 1,326 residences. With all-corner apartments offering lake and park views, the project emphasizes openness, natural light, and premium finishes. Positioned in the emerging Neopolis corridor, it is set to be one of the sought-after pre-launch investments with amenities and location advantage.",
    },
    {
      name: "Osman Sagar",
      companies: ["DSR Altitudes", "3 BHK", "2,277 SFT", "Under Construction"],
      image: "/images/yula.jpg",
      description:
        "A soaring residential enclave by DSR Infra, DSR Altitudes brings approximately 980 spacious 3 BHK apartments across five towers. Positioned in serene Osman Nagar, it balances luxury with greenery boasting sprawling landscaped gardens, a well-appointed clubhouse, sporting courts, indoor leisure zones, mini-theatre, and robust 24/7 security. Each flat offers a harmonized lifestyle with about 75% open space, ensuring privacy and tranquillity amidst urban expansion ",
    },

    {
      name: "Osman Sagar",
      companies: [
        "West City - Vajra",
        "2.5,3 & 4 BHK",
        "1,420-4,400 SFT",
        "Under Construction",
      ],
      image: "/images/Vision.jpg",
      description:
        "Vajra West City unfolds across a monumental 13-acre campus just off the ORR service road. Six G+39 towers house a sweeping range of units from cozy 2.5 BHKs to palatial 4 BHKs. Experience an enormous 1.35 lakh SFT stepway clubhouse,rooftop infinity pool, sky-deck lounge, and wellness zones. Plus, thoughtful lifestyle touches include on-campus schooling, a temple, EV charging, co-working space, and even a vegetable market.",
    },
    {
      name: "Osman Sagar",
      companies: [
        "Ananda Homes SKY 49",
        "3 & 4 BHK",
        "2,000-3,500 SFT",
        "Pre-Launch",
      ],
      image: "/images/myhome.jpg",
      description:
        "SKY 49 by Ananda Homes rising approximately 48 floors is a pre-launch vertical narrative targeting luxury seekers. With impressive unit sizes (some up to 3,500 SFT), the project elevates living, blending sky-high views with expansive floor plans. Though full spec and amenity details are under wraps, it’s shaping up to be a standout in the Osman Sagar skyline",
    },

    {
      name: "Tellapur",
      companies: [
        "Vision Arsha",
        ",22.5,3 & 3.5 BHK",
        "1,390-2,700 SFT",
        "Under Construction(Pre-Launch)",
      ],
      image: "/images/Vision.jpg",
      description:
        "Vision Arsha is an 11-acre high-rise gated community situated prominently along Tellapur’s 100 ft road. Spread across seven DS+28 storey towers and housing around 1,561 apartments, the project offers expansive 180° views and a living experience that feels like a permanent resort. With over 90 amenities including a 45,000 sq ft clubhouse, 10,000 sq ft sports complex, 3.5-acre central park, and double-height stilt amenities designed for car-free ground movement, it’s built for lifestyle without compromise. Additionally, the architecture embraces sustainability and light-filled design, with 78% open space enhancing comfort and connectivity.",
    },
    {
      name: "Tellapur",
      companies: [
        "Anvita High 9",
        "2, 3 & 4 BHK",
        "1,355–2,610 SFT",
        "Under Construction",
      ],
      image: "/images/anvita.jpg",
      description:
        "Anvita High 9 is an expansive 15-acre gated development featuring nine 30-floor towers that blend smart living with expressive design. With over 80% open space,sky plazas, a skywalk connecting towers, sky villas, and lush communal amenities,this project elevates everyday life. ",
    },

    {
      name: "Tellapur",
      companies: [
        "Vision Arsha",
        "22.5,3 & 3.5 BHK",
        "1,390-2,700 SFT",
        "Under Construction(Pre-Launch)",
      ],
      image: "/images/Vision.jpg",
      description:
        "Vision Arsha is an 11-acre high-rise gated community situated prominently along Tellapur’s 100 ft road. Spread across seven DS+28 storey towers and housing around 1,561 apartments, the project offers expansive 180° views and a living experience that feels like a permanent resort. With over 90 amenities including a 45,000 sq ft clubhouse, 10,000 sq ft sports complex, 3.5-acre central park, and double-height stilt amenities designed for car-free ground movement, it’s built for lifestyle without compromise. Additionally, the architecture embraces sustainability and light-filled design, with 78% open space enhancing comfort and connectivity.",
    },
    {
      name: "Tellapur",
      companies: [
        "Anvita High 9",
        "2, 3 & 4 BHK",
        "1,355–2,610 SFT",
        "Under Construction",
      ],
      image: "/images/yula.jpg",
      description:
        "Anvita High 9 is an expansive 15-acre gated development featuring nine 30-floor towers that blend smart living with expressive design. With over 80% open space,sky plazas, a skywalk connecting towers, sky villas, and lush communal amenities,this project elevates everyday life. ",
    },

    {
      name: "Tellapur",
      companies: ["Prosper", "3 & 4 BHK", "1,492–2,800 SFT", "Pre-Launch"],
      image: "/images/Vision.jpg",
      description:
        "Prosper is a yet-to-launch residential project in Tellapur, a quickly growing satellite town prized for its proximity to IT hubs like Gachibowli and direct ORR access. It promises spacious 3 & 4 BHK flats designed for families looking to blend suburban serenity with city ease.",
    },
    {
      name: "Kollur",
      companies: [
        "Anvita Ivana: Phase I",
        "2, 3 & 4 BHK",
        "1,260–4,440 SFT",
        "Ready to Move",
      ],
      image: "/images/yula.jpg",
      description:
        "Anvita Ivana’s Phase I is a boutique project delivering once-in-a-lifetime sky villas and flats wrapped within lush landscaping and plush amenities. Perfect for those who want to move in yesterday with modern comfort immediately.",
    },

    {
      name: "kollur",
      companies: [
        "Anvita Ivana: Phase II",
        "2,3 & 4 BHK",
        "1,260–5,070 SFT",
        "Under Construction",
      ],
      image: "/images/anvita.jpg",
      description:
        "The second act of Anvita Ivana dramatically scales up, doubling down on spaciousness with over 1,400 homes and 40 exclusive cloud villas. You get resort-grade amenities and sky-high design tailored for families who believe in more space and more life.",
    },
    {
      name: "Rajendranagar",
      companies: [
        "Godrej Regal Pavilion",
        "2.5, 3, 3.5 & 4 BHK",
        "1,300–3,571 SFT",
        "Expression of Interest (New Launch)",
      ],
      image: "/images/yula.jpg",
      description:
        "This is where urban elegance meets scale. Spread over 12.5 acres, the gated community features nine high-rise towers with over 1,600 well-appointed apartments. Enjoy amenities kike a clubhouse, infinity pool, greenery, and connectivity to OR & Hyderabad’s key. landmarks.",
    },
    {
      name: "Rajendranagar",
      companies: [
        "Ramky",
        "3 & 4 BHK",
        "2,290–4,100 SFT",
        "Expression of Interest (EOI) | Pre-Launch",
      ],
      image: "/images/Vision.jpg",
      description:
        "Another Rajendranagar gem in the pre-launch phase, Ramky’s offering brings spacious 3 and 4 BHK layouts in premium finishes. Positioned for early adopters looking to secure intelligently designed homes in a growing corridor.",
    },
    {
      name: "Miyapur",
      companies: [
        "Urbanrise Sky Habitat",
        "3 BHK Apartments",
        "1,509–1,839 SFT",
        "Under Construction",
      ],
      image: "/images/urbanrise.jpg",
      description:
        "Standing tall at 42 stories, Urbanrise Sky Habitat is a landmark gated community reshaping Miyapur’s skyline. Nestled beside a 100-acre lake, it spans over 10.67 acres and boasts 200+ world-class amenities, a 100,000 SFT clubhouse, sky lounges, podium gardens, an elevated ‘Skywalk,' and even a dedicatedd children's learning hub known as Urbanrise Genius.Living here is less about four walls,and more about soaring experiences.",
    },

    {
      name: "Kismatpur",
      companies: [
        "SDG Prinia",
        "2466 - 2577 SFT",
        "Planning Stage (HMDA Approval)",
      ],
      image: "/images/prinia.jpg",
      description:
        "Tucked into the rapidly developing Kismatpur, SDG Prinia is the newest project from Suvarna Durga Group. Known for iconic developments elsewhere, they’re poised to weave another luxury residential narrative here. While specifics are limited, you can expect spacious layouts, gated-community amenities, and the area’s accelerated infrastructure growth working in its favor.",
    },
  ];
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [search, setSearch] = useState("");
  const [appliedQuery, setAppliedQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [searchTags, setSearchTags] = useState<string[]>([]);

  // Mobile view logic
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCardClick = () => setShowFormModal(true);
  const closeModal = () => setShowFormModal(false);

  // Tags
  const tags = ["Moosapet", "Sunshine Destino", "4 BHK", "Pre Launch", ">1680 sqft", "Label"];

  const handleTagClick = (tag: string) => {
    let updatedTags: string[];

    if (searchTags.includes(tag)) {
      updatedTags = searchTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...searchTags, tag];
    }

    const newSearch = updatedTags.join(", ");
    setSearchTags(updatedTags);
    setSearch(newSearch);
    setAppliedQuery(updatedTags.length ? updatedTags.join(", ") : "");

    setTimeout(() => {
      const el = inputRef.current;
      el?.focus();
      const len = newSearch.length;
      try {
        el?.setSelectionRange(len, len);
      } catch {}
    }, 0);
  };

  const handleInputChange = (value: string) => {
    setSearch(value);
    const parts = value.split(",").map((p) => p.trim()).filter(Boolean);
    setSearchTags(parts);
    if (value.trim() === "") setAppliedQuery("");
  };

  const handleApplySearch = () => setAppliedQuery(search.trim());
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleApplySearch();
    }
  };

  const filteredProjects = projects.filter((project) => {
    const rawQuery = appliedQuery.toLowerCase().trim();
    if (!rawQuery) return true;
    return (
      project.name.toLowerCase().includes(rawQuery) ||
      project.description.toLowerCase().includes(rawQuery) ||
      project.companies.join(" ").toLowerCase().includes(rawQuery)
    );
  });

  // Only show 5 cards on mobile unless expanded
  const visibleProjects =
    isMobile && !showAllMobile ? filteredProjects.slice(0, 5) : filteredProjects;

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <main
        className="relative flex-1 px-6 sm:px-6 lg:px-12 pt-15 pb-12 z-10"
        style={{
          backgroundImage: "url(/lines/projectline.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 190px",
          backgroundSize: "calc(130%) auto",
        }}
      >
        <section className="w-full max-w-[1100px] mx-auto mb-10">
          <h3 className="text-3xl sm:text-5xl font-light text-black mb-12 mt-24 text-center sm:text-left sm:ml-5">
            OUR PROJECTS
          </h3>

          {/* Search and Tags */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 w-full md:max-w-[450px]">
              <div className="rounded-full p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51]" style={{ width: "368px", height: "45px" }}>
                <div className="relative flex items-center bg-white rounded-full px-3 gap-2" style={{ width: "100%", height: "41px" }}>
                  <button
                    type="button"
                    aria-label="Apply search"
                    onClick={handleApplySearch}
                    className="absolute right-3 flex items-center"
                  >
                    <Image src="/icons/search.svg" alt="search" width={18} height={18} className="opacity-100" />
                  </button>

                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="3bhk, Moosapet, Pre-launch"
                    value={search}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    className="pl-2 pr-8 flex-grow bg-transparent outline-none text-[14px] font-sora text-black placeholder:text-[#00000033] min-w-[100px]"
                    style={{ height: "41px" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 border rounded-[8px] text-sm cursor-pointer transition ${
                    searchTags.includes(tag)
                      ? "bg-[#B74254] text-white border-[#B74254]"
                      : "bg-white text-black border-[#ccc]"
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Cards */}
        <div className="flex justify-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch w-full max-w-[1200px] px-4 md:px-10 lg:px-4 xl:px-10 mx-auto">
            {visibleProjects.map((project, idx) => (
              <div
                key={idx}
                className="cursor-pointer rounded-[40px] p-[1px] w-full h-auto sm:h-[725px] flex flex-col"
                style={{ background: "linear-gradient(90deg, #B74254 0%, #231F51 100%)" }}
              >
                <div className="bg-white rounded-[39px] w-full h-full p-6 flex flex-col overflow-y-auto scrollbar-hide">
                  <div
                    className="relative w-full aspect-[4/5] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setShowFormModal(true);
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover rounded-[32px] transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>

                  <h3 className="font-source-sans text-[20px] font-semibold tracking-[-0.02em] leading-[100%] text-black mt-4">
                    {project.companies[0]}
                  </h3>

                  <div className="space-y-2 text-[15px] text-black mt-2">
                    {/* Location */}
                    <p className="flex items-center gap-2">
                      <Image src="/icons/location.png" alt="location" width={20} height={20} />
                      {project.name}
                    </p>

                    {/* BHK - detect from companies[] */}
                    <p className="flex items-center gap-2">
                      <Image src="/icons/bed.png" alt="bhk" width={20} height={20} />
                      {project.companies.find((item) =>
                        item.toLowerCase().includes("bhk")
                      ) || "BHK Not Available"}
                    </p>

                    {/* Status */}
                    <p className="flex items-center gap-2">
                      <Image src="/icons/time.png" alt="status" width={20} height={20} />
                      {project.companies.find((item) =>
                        ["under", "ready", "pre"].some((key) =>
                          item.toLowerCase().includes(key)
                        )
                      ) || "Status Not Available"}
                    </p>

                    {/* SFT / Area */}
                    <p className="flex items-center gap-2">
                      <Image src="/icons/slide.png" alt="area" width={20} height={20} />
                      {project.companies.find((item) =>
                        item.toLowerCase().includes("sft")
                      ) || "Area Not Available"}
                    </p>
                  </div>


                  <div className="mt-3 text-sm text-gray-600 flex flex-col flex-grow">
                    {expandedCard === idx ? (
                      <p>
                        {project.description}{" "}
                        <span
                          onClick={() => setExpandedCard(null)}
                          className="cursor-pointer font-light text-[#0042F7]"
                        >
                          Read Less
                        </span>
                      </p>
                    ) : (
                      <p className="line-clamp-4">
                        {project.description.slice(0, 120)}...
                        <span
                          onClick={() => setExpandedCard(idx)}
                          className="cursor-pointer font-light text-[#0042F7]"
                        >
                          Read More
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Toggle Arrow */}
        {isMobile && filteredProjects.length > 5 && (
          <div className="flex justify-center mt-4">
            <button
              aria-label="Toggle Projects"
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="text-black text-[20px] font-bold leading-none cursor-pointer transition-transform duration-300 hover:opacity-80"
            >
              {showAllMobile ? "▲" : "▼"}
            </button>
          </div>
        )}

        {/* Modal */}
        {showFormModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-6 sm:p-8 max-w-sm w-full relative shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200/50 transition"
              >
                &times;
              </button>
              <ContactForm />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}