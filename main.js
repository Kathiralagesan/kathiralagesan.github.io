document.addEventListener("DOMContentLoaded", () => {
    if (!window.cvData) {
        console.error("CV data not found. Make sure data.js is loaded first.");
        return;
    }
    const data = window.cvData;
    const p = data.profile;

    // ── Profile / Hero ──────────────────────────────────────────────
    document.getElementById("profile-name").textContent = p.name;
    document.getElementById("profile-title").textContent = p.title;
    document.getElementById("profile-institution").textContent = p.institution;
    document.getElementById("profile-tagline").textContent = p.tagline;
    document.getElementById("profile-about").textContent = p.about;
    document.getElementById("profile-image").src = p.profileImage || "";
    document.getElementById("profile-resume").href = p.resumeLink;

    // Email buttons
    ["profile-email","about-email","footer-email","nav-contact"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = `mailto:${p.email}`;
    });

    // ORCID links
    const orcidUrl = `https://orcid.org/${p.orcid}`;
    ["hero-orcid","about-orcid","footer-orcid"].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.href = orcidUrl; if (el.tagName === 'A') el.setAttribute('aria-label', 'ORCID Profile'); }
    });

    // Website
    const websiteUrl = `https://${p.website}`;
    ["hero-website","about-website"].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.href = websiteUrl; el.textContent = p.website; }
    });

    // PubMed
    ["hero-pubmed","pubmed-link","footer-pubmed"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = p.pubmedUrl;
    });

    // Scholar
    const scholarEl = document.getElementById("scholar-link");
    if (scholarEl) scholarEl.href = p.googleScholarUrl;

    // Footer
    const dateOpts = { day: '2-digit', month: 'short', year: 'numeric' };
    const today = new Date().toLocaleDateString('en-GB', dateOpts);
    document.getElementById("last-update").textContent = today;

    // ── Pillars Graphic ──────────────────────────────────────────────
    const pillarsContainer = document.getElementById("pillars-container");
    if (data.pillars && pillarsContainer) {
        data.pillars.forEach(pillar => {
            const el = document.createElement("div");
            el.className = `pillar-card pillar-${pillar.color}`;
            el.innerHTML = `
                <div class="pillar-icon"></div>
                <h3>${pillar.title}</h3>
                <p>${pillar.description}</p>
            `;
            pillarsContainer.appendChild(el);
        });
    }

    // ── Helper to Render Alternating Cards ────────────────────────────────────────
    function renderCards(containerId, itemsArray) {
        const container = document.getElementById(containerId);
        if (!container || !itemsArray) return;
        
        itemsArray.forEach((item, index) => {
            // Alternate layout left/right
            const layoutClass = index % 2 !== 0 ? 'row-reverse' : '';
            const cardEl = document.createElement("div");
            cardEl.className = `project-card ${layoutClass}`;

            const tagsHtml = (item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("");
            
            // Add a "Read More" button if a link is provided
            const readMoreHtml = item.link 
                ? `<a href="${item.link}" class="btn primary" style="margin-top:1.5rem; display:inline-block;">Read More</a>` 
                : "";

            const imageHtml = item.image
                ? `<img src="${item.image}" alt="${item.title}" class="project-img">`
                : `<div class="project-image-placeholder"><span>${item.tags && item.tags[0] ? item.tags[0] : 'Research'}</span></div>`;

            cardEl.innerHTML = `
                <div class="project-image-wrapper">${imageHtml}</div>
                <div class="project-info">
                    <h3 class="serif-title">${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="project-tags" style="margin-top: 1rem;">${tagsHtml}</div>
                    ${readMoreHtml}
                </div>
            `;
            container.appendChild(cardEl);
        });
    }

    // ── Platform Leadership ──────────────────────────────────────────────
    renderCards("platform-container", data.platform);

    // ── Independent Research ──────────────────────────────────────────────
    renderCards("research-container", data.researchPillars);

    // ── Publication Highlights ──────────────────────────────────────────────
    const highlightsContainer = document.getElementById("highlights-container");
    (data.publicationHighlights || []).forEach(pub => {
        const pubEl = document.createElement("a");
        pubEl.className = "highlight-card";
        pubEl.href = pub.link;
        pubEl.target = "_blank";
        pubEl.rel = "noopener noreferrer";

        const imageHtml = pub.image
            ? `<img src="${pub.image}" alt="${pub.title}" class="highlight-img">`
            : `<div class="highlight-image-placeholder"><span>Graphical Abstract</span></div>`;

        pubEl.innerHTML = `
            <div class="highlight-image-wrapper">${imageHtml}</div>
            <div class="highlight-info">
                <span class="highlight-journal">${pub.journal}</span>
                <h3 class="serif-title small">${pub.title}</h3>
                <p>${pub.significance}</p>
                <span class="read-more">View Publication →</span>
            </div>
        `;
        highlightsContainer.appendChild(pubEl);
    });

    // ── Leadership & Service ──────────────────────────────────────────────
    const leadershipContainer = document.getElementById("leadership-container");
    (data.leadershipAndService || []).forEach(item => {
        const el = document.createElement("div");
        el.className = "leadership-card";
        el.innerHTML = `
            <div class="leadership-year">${item.year}</div>
            <div class="leadership-content">
                <h3>${item.role}</h3>
                <p>${item.body}</p>
            </div>
        `;
        leadershipContainer.appendChild(el);
    });

    // ── Experience ──────────────────────────────────────────────
    const expContainer = document.getElementById("experience-container");
    data.experience.forEach(exp => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        const descHtml = exp.description.map(d => `<li>${d}</li>`).join("");
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.duration}</span>
                <h3 class="serif-title small">${exp.role}</h3>
                <h4>${exp.organization}</h4>
                <ul>${descHtml}</ul>
            </div>
        `;
        expContainer.appendChild(item);
    });

    // ── Education ──────────────────────────────────────────────
    const eduContainer = document.getElementById("education-container");
    data.education.forEach(edu => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${edu.duration}</span>
                <h3 class="serif-title small">${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <p>${edu.description}</p>
            </div>
        `;
        eduContainer.appendChild(item);
    });

    // ── Talks ──────────────────────────────────────────────
    const talksContainer = document.getElementById("talks-container");
    (data.talks || []).forEach(talk => {
        const li = document.createElement("li");
        li.className = "talk-item";
        li.textContent = talk;
        talksContainer.appendChild(li);
    });
});
