const cvData = {
  profile: {
    name: "Kathirvel Alagesan, Dr.rer.nat",
    title: "Head & Project Leader in Proteomics",
    institution: "Max Planck Unit for the Science of Pathogens",
    location: "Berlin, Germany",
    email: "alagesan@mpusp.mpg.de",
    website: "www.mpusp.mpg.de",
    orcid: "0000-0002-7596-5558",
    about: "I am a proteomics scientist with over 14 years of experience specializing in large-scale quantitative proteomics, glycoproteomics, and systems-level analyses. I lead the Proteomics Research Platform at MPUSP, where I develop advanced mass spectrometry workflows and FAIR-compliant data analysis pipelines to investigate host-pathogen interactions. My work bridges academic research and scalable platform management, combining biological insights with innovative analytical technology.",
    profileImage: "profile.jpg",
    resumeLink: "cv.pdf"
  },

  platform: {
    title: "Proteomics Research Platform (PROT)",
    description: "The platform focuses on microbial proteomics, utilizing state-of-the-art mass spectrometry and chemical tools to monitor protein dynamics in microbes exposed to nutrient deprivation and host interactions. We investigate dynamic changes in protein levels, localization, interaction partners, and post-translational modifications.",
    competencies: [
      {
        title: "Advanced Sample Preparation",
        description: "Implementing next-generation Single-Pot Solid-Phase-enhanced Sample Preparation (SP3) and automated robotic liquid-handling systems for robust, high-throughput proteomics."
      },
      {
        title: "Mass Spectrometry",
        description: "Operating state-of-the-art hybrid mass spectrometers (Orbitrap Exploris™ 480 and Fusion™ Lumos Tribrid) equipped with FAIMS PRO for expanded proteome coverage and single-site PTM identification."
      },
      {
        title: "Proteome Informatics",
        description: "Offering comprehensive statistical and informatics analyses, from quality control and function annotation to extended pathways and biological significance explanation."
      }
    ]
  },
  
  projects: [
    {
      title: "SILAMBU Modular Pipeline",
      description: "An ecosystem of integrated, modular informatics systems designed to support end-to-end proteomics workflows. This comprehensive suite ensures full reproducibility, transparency, and seamless knowledge transfer across collaborative research projects.",
      image: "", // Add your ecosystem image path here
      tags: ["Data Pipelines", "Informatics", "FAIR Data", "Multi-omics"],
      modules: [
        {
          name: "VizGlyProt",
          desc: "Facilitates the exploration and visualization of multi-run glycoproteomics and fractionated proteomics data, automating N- and O-glycosylation pathway mapping."
        },
        {
          name: "Magnum Peptide Investigator",
          desc: "An independent tool for the visualization of peptide sequence coverage across various samples, providing interactive heatmaps of individual peptide intensities."
        },
        {
          name: "KArupar",
          desc: "A specialized module within the SILAMBU ecosystem for deep, structured biological interpretation and proteomics data integration."
        }
      ]
    },
    {
      title: "Glycoconjugate Vaccine Development",
      description: "A landmark collaboration developing a recombinant production platform for Group A Streptococcus glycoconjugate vaccines. Using FAIMS-assisted nanoLC-MS/MS workflows, we provided site-specific identification of glycopeptides and analyzed glycan heterogeneity.",
      image: "", // Add your structural/vaccine image path here
      tags: ["Glycoproteomics", "Vaccines", "Host-Pathogen"],
      modules: []
    }
  ],

  publicationHighlights: [
    {
      title: "Recombinant production platform for Group A Streptococcus glycoconjugate vaccines",
      journal: "npj Vaccines (2025)",
      significance: "Demonstrated how proteomics directly supports vaccine development by confirming accurate epitope presentation and glycan composition (up to 41 rhamnose residues).",
      image: "", // Add graphical abstract image path here
      link: "https://doi.org/10.1038/s41541-025-01068-2"
    },
    {
      title: "Streptococcus pyogenes EVs induce the alternative inflammasome via caspase-4/-5 in human monocytes",
      journal: "EMBO Rep (2025)",
      significance: "Detailed investigation into host-pathogen interactions and immune-mediated damage driven by microbial extracellular vesicles.",
      image: "", // Add graphical abstract image path here
      link: "https://doi.org/10.1038/s44319-025-00558-7"
    }
  ],

  experience: [
    {
      role: "Project Leader in Proteomics",
      organization: "Max Planck Unit for the Science of Pathogens (MPUSP)",
      duration: "July 2022 – Present",
      description: [
        "Development and evaluation of high-throughput proteomic workflows from sample preparation to data analysis & data visualization.",
        "Project management and LC-MS-based bioanalytical services for >30 scientists across multiple institutes.",
        "Establish and provide access to advanced proteomic technologies for comprehensive system-wide characterization of proteins, PTMs, and interactions."
      ]
    },
    {
      role: "Post-Doctoral Research Fellow",
      organization: "Max Planck Unit for the Science of Pathogens (MPUSP)",
      duration: "Sep 2020 – June 2022",
      description: [
        "Established Glycoproteomics research theme to investigate host-pathogen interaction.",
        "Mentored under Nobel Laureate Emmanuelle Charpentier.",
        "Developed tools and techniques to study bacterial post-translational modifications."
      ]
    },
    {
      role: "Post-Doctoral Research Fellow",
      organization: "Institute for Glycomics, Griffith University",
      duration: "Mar 2017 – Aug 2020",
      description: [
        "Established 'Glycomics & Glycoproteomics in Cancer and Evolution' research group.",
        "Developed new tools for automated glycan analysis from clinical samples.",
        "Established chemo-enzymatic workflow for diversification of N-glycopeptides."
      ]
    }
  ],

  education: [
    {
      degree: "Doctor of Natural Sciences (Dr.rer.nat)",
      institution: "Max Planck Institute of Colloids and Interfaces & Freie Universität Berlin",
      duration: "2012 – 2016",
      description: "Thesis: 'The Mass Spectrometry Toolkit for Glycoprotein Characterisation: Development of Novel Analytical Methods and Technologies for Glycomics and Glycoproteomics'."
    },
    {
      degree: "Master of Science (M.Sc.) in Biochemistry",
      institution: "University of Oulu, Finland",
      duration: "2010 – 2012",
      description: "Major: Protein Science and Biotechnology. Thesis on novel methods for monosaccharide identification."
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Biotechnology",
      institution: "Kumaraguru College of Technology, India",
      duration: "2005 – 2009",
      description: "Thesis: 'Isolation and identification of α-glucosidase inhibitors from medicinal plants'."
    }
  ],

  publications: [
    {
      citation: "Yu Y, Alagesan K, Frahm D, Charpentier E, Iatsenko I (2026) 'Microbiota-induced fatty acid synthesis facilitates intestinal infection and immune-mediated damage in Drosophila' bioRxiv",
      link: "https://doi.org/10.64898/2026.04.14.718535"
    },
    {
      citation: "Ignatov D, Shanmuganathan V, Ahmed-Begrich R, Alagesan K, Hanke K, Wang C, Krause K, Cornejo FA, Funke K, Erhardt M, Frese CK, and Charpentier E (2025) 'RNA-binding protein YebC enhances translation of proline-rich amino acid stretches in bacteria'. Nat Commun",
      link: "https://doi.org/10.1038/s41467-025-60687-4"
    },
    {
      citation: "Alagesan K and Charpentier E (2023) 'Systems-Wide Site-Specific Analysis of Glycoproteins' In Mass Spectrometry-Based Proteomics. Springer US",
      link: "https://doi.org/10.1007/978-1-0716-3457-8_9"
    },
    {
      citation: "Kawahara R, ..., Alagesan K, ... Thaysen-Andersen M (2021) 'Community evaluation of glycoproteomics informatics solutions reveals high-performance search strategies for serum glycopeptide analysis' Nat Methods",
      link: "https://doi.org/10.1038/s41592-021-01309-x"
    }
  ],

  talks: [
    "AICTE Training and Learning Academy (2026) - 'From Amino to Glyco: The sweet side of proteomics'",
    "IZW Seminar series (2024) - 'Sugar, Spice & Spectral Insights: (Glyco)Proteomics Unwarapped'",
    "Technische Universität Berlin seminar series (2021) - 'The sweet side of proteomics'",
    "ASBMB/EB Glycobiology Interest Group (2021) - 'Improved glycopeptide identification using FAIMS'"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = cvData;
} else {
  window.cvData = cvData;
}
