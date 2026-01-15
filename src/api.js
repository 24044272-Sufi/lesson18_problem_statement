const diplomas = [
  {
    id: "dit",
    name: "Information Technology",
    description: "Focuses on software development, web technologies, and IT systems.",
    modules: [
      {
        id: "fop",
        name: "Fundamentals of Programming",
        description: "Introduction to programming concepts using modern languages.",
        credits: 4,
        lecturer: "Mr. Alan Tan",
      },
      {
        id: "wad",
        name: "Web Application Development",
        description: "Frontend and backend web development using JavaScript frameworks.",
        credits: 4,
        lecturer: "Ms. Cheryl Lim",
      },
    ],
  },
  {
    id: "dism",
    name: "Infocomm Security Management",
    description: "Covers cybersecurity, network security, and risk management.",
    modules: [
      {
        id: "nsf",
        name: "Network Security Fundamentals",
        description: "Basics of securing networks and communication systems.",
        credits: 4,
        lecturer: "Mr. Daniel Koh",
      },
      {
        id: "eth",
        name: "Ethical Hacking",
        description: "Techniques used to identify and mitigate system vulnerabilities.",
        credits: 4,
        lecturer: "Ms. Rebecca Ng",
      },
    ],
  },
  {
    id: "daai",
    name: "Applied AI & Analytics",
    description: "Data analytics, machine learning, and AI applications.",
    modules: [
      {
        id: "dsp",
        name: "Data Science Programming",
        description: "Python-based data analysis and visualization.",
        credits: 4,
        lecturer: "Dr. Jason Lee",
      },
      {
        id: "mlf",
        name: "Machine Learning Fundamentals",
        description: "Core machine learning concepts and practical use cases.",
        credits: 4,
        lecturer: "Dr. Priya Raman",
      },
    ],
  },
];


export function getDiplomas() {
  return diplomas.map(({name, id})=> ({name, id}))
}

export function getDiploma(id) {
  return diplomas.find(d => d.id === id) || null;
}

export function getModules() {
  return diplomas.flatMap(d =>
    d.modules.map(m => ({
      ...m,
      diplomaId: d.id,
      diplomaName: d.name,
    }))
  );
}

export function getDiplomaModules(diplomaId) {
  const diploma = getDiploma(diplomaId);
  return diploma ? diploma.modules : [];
}

export function getModule(diplomaId, moduleId) {
  const diploma = getDiploma(diplomaId);
  if (!diploma) return null;
  return diploma.modules.find(m => m.id === moduleId) || null;
}
