const cvData = {
  profile: {
    name: "Dr. Kathirvel Alagesan",
    title: "Head & Project Leader in Proteomics",
    institution: "Max Planck Unit for the Science of Pathogens, Berlin, Germany",
    tagline: "Microbial Proteomics enabled by innovations in Chemical Biology, Mass Spectrometry & Glycoproteome Informatics",
    email: "alagesan@mpusp.mpg.de",
    website: "mpusp.mpg.de",
    orcid: "0000-0002-7596-5558",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Alagesan+K%5BAuthor%5D&sort=date",
    googleScholarUrl: "https://scholar.google.com/scholar?q=kathirvel+alagesan",
    about: "I lead the Proteomics Research Platform (PROT) at the Max Planck Unit for the Science of Pathogens. My work balances two core missions: directing state-of-the-art mass spectrometry infrastructure that empowers institute-wide research, and driving an independent scientific vision focused on systems glycobiology. Through innovations in analytical methodologies and informatics, I explore the dynamic interplay between host and pathogen from a glyco-centric perspective.",
    profileImage: "profile.jpg",
    resumeLink: "Kathirvel_Alagesan_CV_2026_May.docx"
  },

  pillars: [
    {
      title: "Technology",
      description: "Sample preparation, New MS Instrumentation, Acquisition methods",
      color: "pink"
    },
    {
      title: "Informatics",
      description: "New bioinformatics pipeline and tools for quantitative proteomics, PTMs & integration of Omics data",
      color: "blue"
    },
    {
      title: "Biology",
      description: "Use of chemical and molecular biology to decode bacterial stress responses and pathogenesis",
      color: "green"
    }
  ],

  platform: [
    {
      title: "Proteomics Platform Leadership",
      description: "As Head of PROT, I manage cutting-edge mass spectrometry operations (Orbitrap Exploris 480 & Fusion Lumos with FAIMS PRO) to support almost all research topics across three MPUSP laboratories. Since 2019, the platform has enabled over 17 external collaborations, driving high-impact publications through bespoke proteomic workflows, automated liquid handling (Agilent Bravo), and rigorous FAIR-compliant data dissemination.",
      image: "",
      tags: ["Infrastructure Management", "Orbitrap MS", "High-Throughput Workflows", "Collaborative Science"],
      link: "platform-details.html"
    }
  ],

  researchPillars: [
    {
      id: "systems-glycobiology",
      title: "Systems Glycobiology & Host-Pathogen Interactions",
      description: "My core research investigates how protein glycosylation shapes microbial pathogenesis and host immunity. By mapping complex human glycoproteomes—such as the GlycoAtlas initiative and blood group-specific plasma profiling—we aim to uncover how pathogens like S. pyogenes exploit or evade host glycan signatures during infection. This systems-level approach bridges fundamental glycobiology with translational infection dynamics.",
      image: "",
      tags: ["Systems Glycobiology", "Infection Dynamics", "Human GlycoAtlas", "Host-Microbe"],
      link: "research-glycobiology.html"
    },
    {
      id: "next-gen-proteomics",
      title: "Next-Generation Proteomic Technologies",
      description: "To tackle the immense micro- and macro-heterogeneity of glycoconjugates, my group develops robust, high-throughput analytical methodologies. We are breaking traditional analytical norms through innovations like protease multiplexing and advanced MS fragmentation strategies (sHCD, EThcD) to dramatically expand glycopeptide coverage and resolve complex isomeric structures in clinical and biological samples.",
      image: "",
      tags: ["Method Development", "Protease Multiplexing", "Isomeric Resolution", "Analytical Chemistry"],
      link: "research-technologies.html"
    },
    {
      id: "proteome-informatics",
      title: "Advanced Proteome Informatics",
      description: "Proteomics is a data-rich field, but extracting biological meaning requires sophisticated tools. We are building the SILAMBU modular ecosystem—including VizGlyProt and Magnum—to seamlessly translate raw mass spectrometry data into structured biological knowledge. This framework emphasizes interactive data visualization, reproducible pipelines, and FAIR principles, culminating in the MPUSP Proteomics Knowledgebase.",
      image: "",
      tags: ["FAIR Data", "Bioinformatics", "Data Visualization", "Open Science"],
      link: "research-informatics.html"
    }
  ],

  publicationHighlights: [
    {
      title: "Recombinant production platform for Group A Streptococcus glycoconjugate vaccines",
      journal: "npj Vaccines · 2025",
      significance: "Demonstrated how advanced proteomics directly guides vaccine development by confirming complex glycan structures (up to 41 rhamnose residues) and epitope presentation using FAIMS-assisted nanoLC-MS/MS.",
      image: "",
      link: "https://doi.org/10.1038/s41541-025-01068-2"
    },
    {
      title: "S. pyogenes EVs induce the alternative inflammasome via caspase-4/-5 in human monocytes",
      journal: "EMBO Reports · 2025",
      significance: "Provided mechanistic proteomic insights into how streptococcal extracellular vesicles trigger human innate immunity, highlighting the platform's ability to resolve complex host-pathogen interactions.",
      image: "",
      link: "https://doi.org/10.1038/s44319-025-00558-7"
    },
    {
      title: "Community evaluation of glycoproteomics informatics solutions",
      journal: "Nature Methods · 2021",
      significance: "A landmark community effort that established gold standards for glycoproteomics informatics, cementing our workflows at the international frontier of the field.",
      image: "",
      link: "https://doi.org/10.1038/s41592-021-01309-x"
    }
  ],

  experience: [
    {
      role: "Project Leader & Head",
      organization: "Proteomics Research Platform, MPUSP, Berlin",
      duration: "July 2022 – Present",
      description: [
        "Lead and direct proteomics operations and research for >30 scientists across 3 labs and 17 external collaborations.",
        "Develop high-throughput proteomic workflows: SP3, SILAC, TMT, DIA-MS, glycoproteomics, and targeted assays.",
        "Manage two state-of-the-art Orbitrap MS systems (Exploris 480 & Lumos Fusion) with FAIMS PRO.",
        "Develop the SILAMBU modular bioinformatics ecosystem for FAIR-compliant data management and visualization."
      ]
    },
    {
      role: "Post-Doctoral Research Fellow",
      organization: "MPUSP, Berlin (Mentor: Prof. Emmanuelle Charpentier)",
      duration: "Sep 2020 – June 2022",
      description: [
        "Established the 'Glycoproteomics' research theme within MPUSP.",
        "Developed systems-wide glycoproteome workflows for host-pathogen interaction studies.",
        "Co-authored the GlycoAtlas initiative: site-specific N- and O-glycosylation of 10 human tissue lysates."
      ]
    },
    {
      role: "Post-Doctoral Research Fellow",
      organization: "Institute for Glycomics, Griffith University, Australia",
      duration: "Mar 2017 – Aug 2020",
      description: [
        "Established 'Glycomics & Glycoproteomics in Cancer and Evolution' research group.",
        "Developed chemo-enzymatic workflow for diversification of N-glycopeptides.",
        "Built automated glycan analysis tools for clinical samples."
      ]
    }
  ],

  education: [
    {
      degree: "Doctor of Natural Sciences (Dr.rer.nat)",
      institution: "MPI Colloids & Interfaces / Freie Universität Berlin",
      duration: "2012 – 2016",
      description: "Thesis: 'The Mass Spectrometry Toolkit for Glycoprotein Characterisation: Novel Analytical Methods for Glycomics and Glycoproteomics.'"
    },
    {
      degree: "M.Sc. Biochemistry — Protein Science & Biotechnology",
      institution: "University of Oulu, Finland",
      duration: "2010 – 2012",
      description: "Novel methods for monosaccharide identification by mass spectrometry."
    },
    {
      degree: "B.Tech Biotechnology",
      institution: "Kumaraguru College of Technology, India",
      duration: "2005 – 2009",
      description: "Isolation and identification of α-glucosidase inhibitors from medicinal plants."
    }
  ],

  leadershipAndService: [
    {
      role: "Expert Reviewer",
      body: "Dutch Research Council (NWO), Netherlands",
      year: "2025",
      icon: "◈"
    },
    {
      role: "Open Science Ambassador",
      body: "Max Planck Society — MPUSP",
      year: "Since 2024",
      icon: "◈"
    },
    {
      role: "Chair — MPUSP-HU Retreat",
      body: "'Regulatory Mechanisms in Bacteria', Berlin",
      year: "2024",
      icon: "◈"
    },
    {
      role: "Expert Reviewer",
      body: "GlycoMIP, National Science Foundation (NSF), USA",
      year: "2023",
      icon: "◈"
    },
    {
      role: "Co-Chair — Gordon Research Seminar (GRS)",
      body: "Glycobiology, co-chaired with Dr. Simon Wisnovsky",
      year: "2023",
      icon: "◈"
    },
    {
      role: "Science Communicator — Long Night of Sciences",
      body: "'Science Slam: Of Humans and Microbes', Berlin",
      year: "2023",
      icon: "◈"
    },
    {
      role: "Planning — Max Planck MS Core Unit Network",
      body: "Fostering collaboration across Max Planck Society MS platforms",
      year: "2022–",
      icon: "◈"
    }
  ],

  talks: [
    "20th Central & Eastern European Proteomic Conference, Zagreb (2026) — 'Rebel, Rebel: Breaking Norms with Protease Multiplexing for Glycoproteomics'",
    "AICTE Training & Learning Academy (2026) — 'From Amino to Glyco: The sweet side of proteomics'",
    "MPUSP-HU Retreat, Schwerin (2025) — 'From Amino to Glyco: The Evolution of the Proteomics Research Platform'",
    "IZW Seminar Series, Berlin (2024) — 'Sugar, Spice & Spectral Insights: (Glyco)Proteomics Unwrapped'",
    "Technische Universität Berlin (2021) — 'The sweet side of proteomics' (invited by Prof. Juri Rappsilber)",
    "ASBMB/EB Glycobiology Interest Group (2021) — 'Improved glycopeptide identification using FAIMS'"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = cvData;
} else {
  window.cvData = cvData;
}
