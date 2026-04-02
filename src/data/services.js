export const SERVICES = [
  {
    category: "Certificates & Documents",
    items: [
      { id: "s1", title: "Domicile Certificate", desc: "Apply for or renew your permanent residence certificate.", isOnline: true },
      { id: "s2", title: "Character Certificate", desc: "Obtain police clearance and character certificate.", isOnline: true },
      { id: "s3", title: "Birth Registration", desc: "Register a newborn and obtain a birth certificate.", isOnline: false },
      { id: "s4", title: "Death Certificate", desc: "Register a deceased citizen for official records.", isOnline: false }
    ]
  },
  {
    category: "Government Transparency",
    items: [
      { id: "s5", title: "RTI Portal", desc: "Submit a Right to Information request.", isOnline: true },
      { id: "s6", title: "Budget Documents", desc: "View and download provincial budget datasets.", isOnline: true },
      { id: "s7", title: "PSDP Projects", desc: "Track provincial development projects online.", isOnline: true },
      { id: "s8", title: "Audit Reports", desc: "Access the latest departmental audit reports.", isOnline: true }
    ]
  },
  {
    category: "Quick Access",
    items: [
      { id: "s9", title: "Job Vacancies", desc: "Find recent government job openings.", isOnline: true, link: "/jobs" },
      { id: "s10", title: "Tenders", desc: "View active procurement notices.", isOnline: true, link: "/tenders" },
      { id: "s11", title: "Scholarship Portal", desc: "Apply for CM educational endowment funds.", isOnline: true },
      { id: "s12", title: "Complaint Registration", desc: "Register a grievance with the CMIT.", isOnline: true }
    ]
  }
];
