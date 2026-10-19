const cvData = {
  profile: {
    name: "Dr. Kathirvel Alagesan",
    title: "Project Leader in Proteomics",
    institution: "Max Planck Unit for the Science of Pathogens, Berlin, Germany",
    tagline: "Advancing Proteomics Through Analytical Innovation.",
    taglineSubtitle: "Developing mass spectrometry methods, workflows, and open-source tools to characterize proteins, site-specific post-translational modifications, and molecular interactions in complex biological systems.",
    email: "alagesan@mpusp.mpg.de",
    website: "www.mpusp.mpg.de",
    orcid: "0000-0002-7596-5558",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Alagesan+K%5BAuthor%5D&sort=date",
    googleScholarUrl: "https://scholar.google.com/scholar?q=kathirvel+alagesan",
    about: "<strong>In cellular systems, proteins rarely act in isolation</strong>: their biological functions are governed by dynamic post-translational modifications and macromolecular networks. As Project Leader in Proteomics at MPUSP, I direct the proteomics platform while pursuing independent research in <strong>analytical glycoproteomics and host–pathogen glycobiology</strong>.\n\nOver the past 15 years, I have developed mass spectrometry-based approaches in large-scale proteomics, glycoproteomics, and structural glycomics, with core <strong>expertise in site-specific glycopeptide analysis and isomeric glycan characterization</strong>. At MPUSP, I have expanded this foundation to broader post-translational modifications(PTMs), investigating PTM crosstalk, protein–RNA complexes, extracellular vesicles, and bacterial and human secretomes.\n\nMy approach combines automated robotics and microscale SP3 workflows with advanced hybrid mass spectrometry & fragmentation, and ion mobility separation. In parallel, as an Open Science Ambassador for the Max Planck Society, I develop open informatics tools, including the <strong>Karuppar MS-QC system</strong> within SILAMBU, championing <strong>FAIR data practices</strong> to advance reproducibility across proteomics, glycomics, and glycoproteomics.",
    profileImage: "profile.jpg",
    resumeLink: "Alagesan_CV_2026.pdf",
    lastUpdated: "19 Oct 2026"
  },

  platform: [
    {
      title: "Proteomics Platform Leadership",
      description: "I manage state-of-the-art mass spectrometry operations providing end-to-end analytical services to >30 researchers across MPUSP and collaborating institutes. Since 2021, the platform has delivered results for over 200 registered project submissions and 25 external collaborations, backed by automated liquid-handling robotics, our Karuppar automated LC-MS/MS QC system, and FAIR-compliant data dissemination.",
      image: "images/exploris480.jpeg",
      tags: ["Infrastructure Management", "Orbitrap MS", "High-Throughput Workflows", "Collaborative Science"],
      link: "platform-details.html"
    }
  ],

  researchPillars: [
    {
      id: "systems-glycobiology",
      title: "Systems Glycobiology & Host-Pathogen Interactions",
      description: "My core research investigates how protein glycosylation influences microbial pathogenesis and host immunity. By mapping complex human glycoproteomes—such as the GlycoAtlas initiative and blood group-specific plasma profiling—we aim to uncover how pathogens like S. pyogenes exploit or evade host glycan signatures during infection. This systems-level approach bridges fundamental glycobiology with translational infection dynamics.",
      image: "images/Glyco_bacteria.jpg",
      tags: ["Systems Glycobiology", "Infection Dynamics", "Human GlycoAtlas", "Host-Microbe"],
      link: "research-glycobiology.html"
    },
    {
      id: "next-gen-proteomics",
      title: "Next-Generation Proteomic Technologies",
      description: "To tackle the immense micro- and macro-heterogeneity of glycoproteins, we develop robust, high-throughput analytical methodologies. We are breaking traditional analytical norms to improve glycopeptide coverage and resolve complex isomeric glycan structures in clinical and biological samples.",
      image: "images/Glyco_illu.jpg",
      tags: ["Method Development", "Protease Multiplexing", "Isomeric Resolution", "Analytical Chemistry"],
      link: "research-technologies.html"
    },
    {
      id: "proteome-informatics",
      title: "Advanced Proteome Informatics",
      description: "(Glyco)Proteomics is a data-rich field, but extracting biological meaning requires sophisticated tools. We are building the SILAMBU modular ecosystem—including VizGlyProt and Magnum—to seamlessly translate raw mass spectrometry data into structured biological knowledge. This framework emphasizes interactive data visualization, reproducible pipelines, and FAIR principles, culminating in the Proteomics Knowledgebase.",
      image: "",
      tags: ["FAIR Data", "Bioinformatics", "Data Visualization", "Open Science"],
      link: "research-informatics.html"
    }
  ],

  researchSubpages: {
    glycobiology: {
      title: "Infection Glycobiology",
      subtitle: "Systems Glycoproteomics & Host-Pathogen Interactions",
      quote: "Glycosylation is ubiquitous, yet its roles in host-pathogen interactions remain one of the least understood areas in molecular biology. We are changing that.",
      mission: "We develop and apply high-end analytics to decipher the complex \"glycocode\" — decoding the structural diversity and functional implications of glycoconjugates produced by both host and pathogen.",
      focusHeading: "Core Research Focus",
      boxes: [
        {
          color: "navy",
          title: "The Human GlycoAtlas Initiative",
          text: "Defining the baseline of human glycosylation is essential for understanding infection. We are comprehensively mapping site-specific N- and O-glycosylation across human tissues and plasma to establish a definitive reference framework — elucidating the precise receptor topologies that pathogens exploit for adhesion, invasion, and immune evasion."
        },
        {
          color: "peach",
          title: "Infection Glycodynamics",
          text: "Pathogens, including <em>S. pyogenes</em>, exploit highly specific glycan-lectin interactions to adhere, invade, and evade host immunity. We deploy advanced glycoproteomics to capture dynamic alterations in both host and bacterial glycoproteomes during infection — uncovering the molecular dialects that dictate virulence and inflammatory responses."
        }
      ],
      caseStudyHeading: "Translational Impact",
      caseStudy: {
        reverseLayout: true,
        image: "", // <-- Add your figure path here (e.g., "images/glycan_network.png")
        placeholderText: "Figure Placeholder<br>Glycan Interaction Network",
        eyebrow: "npj Vaccines · 2025",
        title: "Glycoconjugate Vaccine Engineering",
        paragraphs: [
          "Translating fundamental glycobiology into clinical therapeutics requires absolute structural certainty. By leveraging our next-generation MS analytical platforms, we guide the development of recombinant glycoconjugate vaccines for Group A <em>Streptococcus</em>.",
          "We provide rigorous validation of <em>in vivo</em> carrier protein glycosylation — analyzing complex glycan heterogeneity, resolving isomeric structures, and confirming precise site occupancy. Our FAIMS-assisted nanoLC-MS/MS workflows detected glycopeptides containing up to <strong>41 rhamnose residues</strong> with full structural confirmation."
        ],
        tags: ["Vaccine Development", "Glycoconjugates", "FAIMS-MS", "Structural Validation"]
      }
    },

    technologies: {
      title: "Next-Generation Technologies",
      subtitle: "Analytical Method Development & Workflow Innovation",
      quote: "To tackle the immense micro- and macro-heterogeneity of glycoconjugates, we develop robust, high-throughput analytical methodologies that break traditional norms.",
      mission: "From protease multiplexing to EThcD fragmentation strategies — we continuously expand glycopeptide coverage and resolve complex isomeric structures.",
      focusHeading: "Our Methodological Innovations",
      boxes: [
        {
          color: "navy",
          title: "Sample Preparation",
          text: "We apply and develop novel sample preparation strategies, including SP3, Mag-Resyn bead-based workflows, and multi-protease digestion strategies. Protease multiplexing with enzymes beyond trypsin — Lys-C, Glu-C, Asp-N — dramatically expands sequence coverage and exposes glycosylation sites hidden from conventional workflows."
        },
        {
          color: "peach",
          title: "MS Acquisition & Fragmentation",
          text: "Advanced fragmentation strategies including stepped-HCD (sHCD) and Electron-Transfer/Higher-energy Collision Dissociation (EThcD) allow simultaneous backbone and glycan fragmentation. Coupled with FAIMS Pro ion mobility separation and DIA acquisition modes, we achieve unprecedented depth in glycoproteome characterization from clinical and biological samples."
        }
      ],
      caseStudyHeading: "Case Study",
      caseStudy: {
        reverseLayout: false,
        image: "", // <-- Add your figure path here (e.g., "images/hcd_spectra.png")
        placeholderText: "Figure Placeholder<br>HCD Spectra — NanA Glycopeptide",
        eyebrow: "npj Vaccines · 2025 · Collaboration with Dorfmueller Lab, Dundee",
        title: "Glycoconjugate Vaccine Development",
        paragraphs: [
          "PROT contributed to a landmark study developing a recombinant production platform for Group A <em>Streptococcus</em> glycoconjugate vaccines — cost-effective, scalable vaccines generated through <em>in vivo</em> glycosylation of carrier proteins in <em>E. coli</em>.",
          "Our FAIMS-assisted nanoLC-MS/MS workflow delivered site-specific glycopeptide identification, glycan heterogeneity analysis, and glycoprotein integrity validation — including the detection of glycopeptides carrying up to <strong>41 rhamnose residues</strong>. Full structural confirmation at this scale is a remarkable methodological achievement."
        ],
        tags: ["FAIMS-MS/MS", "Glycopeptides", "Structural Validation", "Vaccine Platform"]
      }
    },

    informatics: {
      title: "Advanced Proteome Informatics",
      subtitle: "Data Science, Visualization & FAIR Principles",
      quote: "(Glyco)Proteomics is a data-rich field — but extracting biological meaning requires sophisticated, reproducible, and open tools.",
      mission: "We build the SILAMBU modular ecosystem — translating raw mass spectrometry data into structured, FAIR-compliant biological knowledge.",
      focusHeading: "Core Informatics Capabilities",
      boxes: [
        {
          color: "navy",
          title: "Software Tools & Pipelines",
          text: "Development of robust bioinformatics pipelines for efficient data processing, peptide and protein identification, and quantification. We continuously evaluate multiple software strategies to optimize workflows — recognizing that no one-size-fits-all solution exists in proteomics data science."
        },
        {
          color: "peach",
          title: "Interactive KnowledgeBase",
          text: "Building interactive knowledge bases to facilitate comprehensive data exploration, visualization, and dissemination. Improved FAIRness — Findability, Accessibility, Interoperability, and Reusability — is actively implemented across all our proteomics projects, culminating in the MPUSP Proteomics Knowledgebase."
        }
      ],
      caseStudyHeading: "Featured Tool",
      caseStudy: {
        reverseLayout: true,
        image: "", // <-- Add your figure path here (e.g., "images/magnum_tool.png")
        placeholderText: "Figure Placeholder<br>Magnum Peptide Investigator",
        eyebrow: "SILAMBU Ecosystem · Visualization Module",
        title: "Magnum Peptide Investigator",
        paragraphs: [
          "Protein sequence coverage maps are essential to proteomics — showing how peptides distribute across their parent protein. <strong>Magnum</strong> was developed as an independent, interactive tool for visualizing peptide sequence coverage across multiple samples, while providing a comprehensive heatmap overview of individual peptide intensities.",
          "<em>Example: Peptide mapping of Fetuin across 10 human tissue lysates with interactive protein detection side panel.</em>"
        ],
        tags: ["Open Source", "Visualization", "FAIR Data", "Sequence Coverage"]
      }
    }
  },

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
    },
    {
      title: "Stress-induced ribosome degradation in Bacillus subtilis is mediated by the RNase Y-specificity complex",
      journal: "Nature Communications · 2026",
      significance: "Revealed molecular mechanisms of bacterial stress adaptation and ribosome degradation, highlighting the platform's high-sensitivity quantitative microbial proteomics capabilities.",
      image: "",
      link: "https://doi.org/10.1038/s41467-026-73310-x"
    }
  ],

  experience: [
    {
      role: "Project Leader",
      organization: "Proteomics Research Platform, MPUSP, Berlin",
      duration: "July 2022 – Present",
      description: [
        "Lead the Proteomics Research Platform, providing end-to-end LC-MS services to >30 researchers across MPUSP and collaborating institutes (200 registered project submissions, 25 external collaborations since 2021).",
        "Developed Karuppar, an automated LC-MS/MS quality-control and monitoring system for continuous assessment of instrument performance, alongside the SILAMBU modular ecosystem."
      ]
    },
    {
      role: "Post-Doctoral Research Fellow",
      organization: "MPUSP, Berlin (Mentor: Prof. Emmanuelle Charpentier)",
      duration: "Sep 2020 – June 2022",
      description: [
        "Established the 'Glycoproteomics' research theme within MPUSP.",
        "Developed systems-wide glycoproteome workflows for host-pathogen interaction studies.",
      ]
    },
    {
      role: "Post-Doctoral Research Fellow",
      organization: "Institute for Biomedicine and Glycomics (formerly Institute for Glycomics), Griffith University, Australia",
      duration: "Mar 2017 – Aug 2020",
      description: [
        "Actively involved in planning and establishment of an advanced mass spectrometry facility.",
        "Developed chemo-enzymatic workflow for diversification of N-glycopeptides.",
        "Built automated glycan analysis tools for clinical samples."
      ]
    }
  ],

  education: [
    {
      degree: "Doctor of Natural Sciences (Dr.rer.nat)",
      institution: "Max Planck Institute of Colloids and Interfaces / Freie Universität Berlin",
      duration: "2012 – 2016",
      description: "Thesis: 'The Mass Spectrometry Toolkit for Glycoprotein Characterisation: Novel Analytical Methods for Glycomics and Glycoproteomics.'"
    },
    {
      degree: "M.Sc. Biochemistry — Protein Science & Biotechnology",
      institution: "University of Oulu, Finland",
      duration: "2010 – 2012",
      description: "Thesis: 'Novel methods for monosaccharide identification by mass spectrometry.'"
    },
    {
      degree: "B.Tech Biotechnology",
      institution: "Kumaraguru College of Technology, India (Affiliated to Anna University)",
      duration: "2005 – 2009",
      description: "Thesis: 'Isolation and identification of α-glucosidase inhibitors from medicinal plants.'"
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
    "MPUSP-UCMR Mini-Symposium, Germany (2026) — 'The molecular playbook of bacterial survival: decoding proteome and glycome remodeling during stress and infection'",
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
