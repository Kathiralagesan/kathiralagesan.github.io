const cvData = {
  profile: {
    name: "Dr. Kathirvel Alagesan",
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
  
  projects: [
    {
      title: "FAIR-Compliant Proteomics Informatics Frameworks",
      description: "Developed integrated, modular informatics systems to support end-to-end proteomics workflows. This platform handles everything from raw LC-MS data processing to structured reporting and biological interpretation, ensuring full reproducibility, transparency, and seamless knowledge transfer across collaborative research projects.",
      image: "", // Add your image path here, e.g. "assets/project-fair.jpg"
      tags: ["Data Pipelines", "Informatics", "FAIR Data"]
    },
    {
      title: "Advanced Glycoproteomics Workflows",
      description: "Established a robust Glycoproteomics research theme to investigate host-pathogen interactions. Built specialized enrichment strategies for low-abundance proteins and post-translationally modified peptides (N- and O-glycopeptides, phosphopeptides) alongside optimized MS acquisition strategies for complex samples.",
      image: "", // Add your image path here, e.g. "assets/project-glyco.jpg"
      tags: ["Glycoproteomics", "Mass Spectrometry", "Method Development"]
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
      description: "Thesis: 'The Mass Spectrometry Toolkit for Glycoprotein Characterisation: Development of Novel Analytical Methods and Technologies for Glycomics and Glycoproteomics'. Won prestigious Beilstein Ph.D. fellowship and Journal of Mass Spectrometry (JMS) award."
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
      citation: "Krause K, Franch Arroyo S, Ugolini M, Kueck T, Sullivan TJ, Gálvez EJC, Muenzner M, Goosmann C, Brinkmann V, Frese CK, Alagesan K, Vierbuchen T, Heine H, Resch U, Sander LE and Charpentier E (2025) 'Streptococcus pyogenes EVs induce the alternative inflammasome via caspase-4/-5 in human monocytes' EMBO Rep",
      link: "https://doi.org/10.1038/s44319-025-00558-7"
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

// Export for node environments or attach to window for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cvData;
} else {
  window.cvData = cvData;
}
