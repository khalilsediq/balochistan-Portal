export const DEPARTMENTS = [
  {
    id: "home-department",
    slug: "home",
    icon: "🏠",
    name: "Home Department",
    urduName: "محکمہ داخلہ",
    minister: "Zia Ullah Langau",
    secretary: "Bashir Ahmed Bazai",
    website: "#",
    overview: "The Home Department is responsible for maintaining law and order, internal security, and administration of justice in Balochistan. It oversees the police, prisons, and other law enforcement agencies. The department also coordinates with federal security agencies for provincial safety.",
    keyFunctions: [
      "Maintenance of public peace and security",
      "Administration of police and prisons",
      "Coordination with federal law enforcement",
      "Issuance of arms licenses",
      "Control of criminal elements and anti-state activities"
    ],
    contact: {
      address: "Civil Secretariat, Zarghoon Road, Quetta",
      phone: "+92-81-9201555",
      email: "info.home@balochistan.gov.pk"
    }
  },
  {
    id: "finance-department",
    slug: "finance",
    icon: "💰",
    name: "Finance Department",
    urduName: "محکمہ خزانہ",
    minister: "Shoaib Nosherwani",
    secretary: "Babar Khan",
    website: "#",
    overview: "The Finance Department manages the public finances of the Government of Balochistan. It regulates provincial expenditures, prepares the annual budget, and oversees revenue collection and financial policies.",
    keyFunctions: [
      "Preparation of provincial budget",
      "Management of public accounts",
      "Regulation of provincial taxes",
      "Allocation of funds to departments",
      "Coordination with Federal Finance Ministry"
    ],
    contact: {
      address: "Civil Secretariat, Zarghoon Road, Quetta",
      phone: "+92-81-9201111",
      email: "finance@balochistan.gov.pk"
    }
  },
  {
    id: "education-department",
    slug: "education",
    icon: "📚",
    name: "Education Department",
    urduName: "محکمہ تعلیم",
    minister: "Raheela Hameed Khan Durrani",
    secretary: "Saleem Awan",
    website: "#",
    overview: "The Education Department is dedicated to providing quality education across the province. It focuses on improving literacy rates, building educational infrastructure, and ensuring access to primary and secondary schooling.",
    keyFunctions: [
      "Implementation of education policies",
      "Management of public schools",
      "Teacher training and capacity building",
      "Curriculum development",
      "Promotion of female education"
    ],
    contact: {
      address: "Civil Secretariat, Zarghoon Road, Quetta",
      phone: "+92-81-9202222",
      email: "education@balochistan.gov.pk"
    }
  },
  {
    id: "health-department",
    slug: "health",
    icon: "🏥",
    name: "Health Department",
    urduName: "محکمہ صحت",
    minister: "Sardarzada Faisal Jamali",
    secretary: "Abdullah Khan",
    website: "#",
    overview: "The Health Department ensures the provision of quality healthcare services to the citizens of Balochistan. It manages provincial hospitals, dispensaries, and public health initiatives.",
    keyFunctions: [
      "Management of provincial hospitals and clinics",
      "Implementation of public health programs",
      "Procurement of medicines and medical equipment",
      "Disease surveillance and control",
      "Regulation of private health facilities"
    ],
    contact: {
      address: "Civil Secretariat, Zarghoon Road, Quetta",
      phone: "+92-81-9203333",
      email: "health@balochistan.gov.pk"
    }
  },
  { id: "works-services", slug: "works-services", icon: "🏗", name: "Works & Services Department", urduName: "ورکس اینڈ سروسز", minister: "Saleem Khoso", secretary: "Ali Akbar", website: "#", overview: "Infrastructure and development of public buildings.", keyFunctions: ["Road construction", "Public infrastructure development", "Government buildings maintenance"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "agriculture", slug: "agriculture", icon: "🌾", name: "Agriculture, Livestock & Fisheries", urduName: "زراعت، لائیو سٹاک اور فشریز", minister: "Mir Asadullah Baloch", secretary: "Tariq Baloch", website: "#", overview: "Promotion of agriculture and fisheries in Balochistan.", keyFunctions: ["Crop production", "Livestock management", "Fisheries regulation"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "energy-power", slug: "energy", icon: "⚡", name: "Energy & Power Department", urduName: "محکمہ توانائی", minister: "Hashim Notezai", secretary: "Pasha", website: "#", overview: "Development of energy resources.", keyFunctions: ["Power generation", "Alternative energy", "Electrification"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "law", slug: "law", icon: "⚖", name: "Law Department", urduName: "محکمہ قانون", minister: "Sardar Abdul Rehman Khetran", secretary: "Akbar Hussain", website: "#", overview: "Legal advisory to the government.", keyFunctions: ["Drafting legislation", "Legal advice", "Court representation"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "planning-development", slug: "planning", icon: "📊", name: "Planning & Development Department", urduName: "منصوبہ بندی اور ترقی", minister: "Mir Zahoor Buledi", secretary: "Muzammil Hussain", website: "#", overview: "Provincial economic planning.", keyFunctions: ["Development projects", "PSDP planning", "Economic strategy"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "industries", slug: "industries", icon: "🏭", name: "Industries Department", urduName: "محکمہ صنعت", minister: "Mir Shoaib", secretary: "Yasir", website: "#", overview: "Promoting industrial growth.", keyFunctions: ["Industrial estates", "Commerce promotion", "Trade facilitation"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "information-technology", slug: "it", icon: "💻", name: "Information Technology", urduName: "انفارمیشن ٹیکنالوجی", minister: "Sardar Babar Musakhel", secretary: "Roshan", website: "#", overview: "Digital transformation of the province.", keyFunctions: ["E-governance", "IT parks", "Digital literacy"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "forests-wildlife", slug: "forests", icon: "🌲", name: "Forests & Wildlife", urduName: "جنگلات اور جنگلی حیات", minister: "Nawabzada Tariq Magsi", secretary: "Dostain", website: "#", overview: "Conservation of nature.", keyFunctions: ["Afforestation", "Wildlife protection", "Hunting regulation"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "irrigation", slug: "irrigation", icon: "💧", name: "Irrigation Department", urduName: "محکمہ آبپاشی", minister: "Sadiq Umrani", secretary: "Naseer", website: "#", overview: "Water resources management.", keyFunctions: ["Canal management", "Dams construction", "Water distribution"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "police", slug: "police", icon: "🚓", name: "Police Department", urduName: "محکمہ پولیس", minister: "Zia Ullah Langau", secretary: "Moazzam Jah Ansari (IGP)", website: "#", overview: "Law enforcement.", keyFunctions: ["Crime control", "Traffic management", "VIP security"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "social-welfare", slug: "social-welfare", icon: "🤝", name: "Social Welfare Department", urduName: "سماجی بہبود", minister: "Asad Baloch", secretary: "Abdul Rauf", website: "#", overview: "Welfare of the marginalized.", keyFunctions: ["Child protection", "Women empowerment", "Disability support"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "housing", slug: "housing", icon: "🏘", name: "Housing & Town Planning", urduName: "ہاؤسنگ اور ٹاؤن پلاننگ", minister: "Mir Arif Jan Hassani", secretary: "Qamber", website: "#", overview: "Urban development.", keyFunctions: ["City master plans", "Public housing", "Zoning"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "revenue", slug: "revenue", icon: "📜", name: "Revenue & Estate Department", urduName: "ریونیو اور اسٹیٹ", minister: "Mir Saleem Khoso", secretary: "Rauf", website: "#", overview: "Land management and taxes.", keyFunctions: ["Land record", "Tax collection", "Property registration"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "labour", slug: "labour", icon: "👷", name: "Labour & Manpower", urduName: "لیبر اور مین پاور", minister: "Sardar Sarfaraz Domki", secretary: "Waqas", website: "#", overview: "Workers rights.", keyFunctions: ["Labour laws enforcement", "Technical training", "Employment facilitation"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "mines-minerals", slug: "mines", icon: "⛰", name: "Mines & Minerals Development", urduName: "کان کنی اور معدنیات", minister: "Mir Shafiq-ur-Rehman Mengal", secretary: "Saad", website: "#", overview: "Mineral resource extraction.", keyFunctions: ["Mining leases", "Royalty collection", "Geological surveys"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "communication-works", slug: "cw", icon: "🚧", name: "Communication & Works", urduName: "مواصلات و تعمیرات", minister: "Sardar Mohammad Aslam Bizenjo", secretary: "Hashim", website: "#", overview: "Highways and heavy infrastructure.", keyFunctions: ["Provincial highways", "Bridges", "Toll collection"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "information-pr", slug: "information", icon: "📰", name: "Information & Public Relations", urduName: "اطلاعات اور تعلقات عامہ", minister: "Jan Achakzai", secretary: "Hamza", website: "#", overview: "Government media communications.", keyFunctions: ["Press releases", "Media relations", "Public awareness"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "sports", slug: "sports", icon: "⚽", name: "Sports Department", urduName: "محکمہ کھیل", minister: "Nawabzada Jamal Raisani", secretary: "Ishaq", website: "#", overview: "Promotion of athletics.", keyFunctions: ["Sports facilities", "Youth engagement", "Tournaments"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "culture-tourism", slug: "culture", icon: "🎭", name: "Culture & Tourism", urduName: "ثقافت اور سیاحت", minister: "Mir Asadullah Baloch", secretary: "Manzoor", website: "#", overview: "Heritage and tourism promotion.", keyFunctions: ["Heritage preservation", "Tourism development", "Cultural events"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "higher-education", slug: "higher-education", icon: "🎓", name: "Higher Education Department", urduName: "اعلیٰ تعلیم", minister: "Mir Zahoor Buledi", secretary: "Hafiz", website: "#", overview: "Universities and colleges.", keyFunctions: ["Colleges administration", "Universities coordination", "Scholarships"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "elementary-secondary", slug: "esc-education", icon: "🎒", name: "Elementary & Secondary Education", urduName: "ابتدائی اور ثانوی تعلیم", minister: "Raheela Hameed Khan", secretary: "Saleem", website: "#", overview: "Schools administration.", keyFunctions: ["Primary schools", "Matriculation boards", "Teachers hiring"], contact: { address: "Quetta", phone: "-", email: "-" } },
  { id: "food", slug: "food", icon: "🌾", name: "Food Department", urduName: "محکمہ خوراک", minister: "Zamurak Khan", secretary: "Dost", website: "#", overview: "Food security.", keyFunctions: ["Wheat procurement", "Silos management", "Price control"], contact: { address: "Quetta", phone: "-", email: "-" } }
];
