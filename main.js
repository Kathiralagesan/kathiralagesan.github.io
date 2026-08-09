document.addEventListener("DOMContentLoaded", () => {
    if (!window.cvData) {
        console.error("CV data not found. Make sure data.js is loaded first.");
        return;
    }

    const data = window.cvData;

    // Profile Setup
    document.getElementById("profile-name").textContent = data.profile.name;
    document.getElementById("profile-title").textContent = data.profile.title;
    document.getElementById("profile-institution").textContent = `${data.profile.institution}`;
    document.getElementById("profile-about").textContent = data.profile.about;
    document.getElementById("profile-location").textContent = data.profile.location;
    
    document.getElementById("profile-image").src = data.profile.profileImage || "assets/placeholder.jpg";
    document.getElementById("profile-resume").href = data.profile.resumeLink;
    document.getElementById("profile-email").href = `mailto:${data.profile.email}`;
    
    document.getElementById("profile-website").href = `https://${data.profile.website}`;
    document.getElementById("profile-website").textContent = data.profile.website;
    
    document.getElementById("profile-orcid").href = `https://orcid.org/${data.profile.orcid}`;
    document.getElementById("profile-orcid").textContent = `ORCID: ${data.profile.orcid}`;
    
    document.getElementById("footer-name").textContent = data.profile.name.split(',')[0]; // Just the name for footer

    // Platform Setup
    if (data.platform) {
        document.getElementById("platform-title").textContent = data.platform.title;
        document.getElementById("platform-description").textContent = data.platform.description;
        
        const compContainer = document.getElementById("competencies-container");
        data.platform.competencies.forEach(comp => {
            const el = document.createElement("div");
            el.className = "competency-card";
            el.innerHTML = `
                <h3>${comp.title}</h3>
                <p>${comp.description}</p>
            `;
            compContainer.appendChild(el);
        });
    }

    // Projects Setup
    const projectsContainer = document.getElementById("projects-container");
    data.projects.forEach((proj, index) => {
        const layoutClass = index % 2 !== 0 ? 'row-reverse' : '';
        const projectEl = document.createElement("div");
        projectEl.className = `project-card ${layoutClass}`;
        
        const tagsHtml = proj.tags ? proj.tags.map(tag => `<span class="tag">${tag}</span>`).join("") : "";
        
        let modulesHtml = "";
        if (proj.modules && proj.modules.length > 0) {
            modulesHtml = `<div class="project-modules">` + 
                proj.modules.map(mod => `
                    <div class="module-item">
                        <strong>${mod.name}:</strong> ${mod.desc}
                    </div>
                `).join("") + 
                `</div>`;
        }

        const imageHtml = proj.image ? 
            `<img src="${proj.image}" alt="${proj.title}" class="project-img">` : 
            `<div class="project-image-placeholder"><span>${proj.title.split(' ')[0]} Figure</span></div>`;

        projectEl.innerHTML = `
            <div class="project-image-wrapper">
                ${imageHtml}
            </div>
            <div class="project-info">
                <h3 class="serif-title">${proj.title}</h3>
                <p>${proj.description}</p>
                ${modulesHtml}
                <div class="project-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectEl);
    });

    // Publication Highlights Setup
    const highlightsContainer = document.getElementById("highlights-container");
    if (data.publicationHighlights && data.publicationHighlights.length > 0) {
        data.publicationHighlights.forEach(pub => {
            const pubEl = document.createElement("a");
            pubEl.className = "highlight-card";
            pubEl.href = pub.link;
            pubEl.target = "_blank";
            
            const imageHtml = pub.image ? 
                `<img src="${pub.image}" alt="${pub.title}" class="highlight-img">` : 
                `<div class="highlight-image-placeholder"><span>Graphical Abstract</span></div>`;

            pubEl.innerHTML = `
                <div class="highlight-image-wrapper">
                    ${imageHtml}
                </div>
                <div class="highlight-info">
                    <span class="highlight-journal">${pub.journal}</span>
                    <h3 class="serif-title small">${pub.title}</h3>
                    <p>${pub.significance}</p>
                    <span class="read-more">View Publication &rarr;</span>
                </div>
            `;
            highlightsContainer.appendChild(pubEl);
        });
    }

    // Experience Setup
    const expContainer = document.getElementById("experience-container");
    data.experience.forEach(exp => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        
        const descHtml = exp.description.map(desc => `<li>${desc}</li>`).join("");

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

    // Education Setup
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

    // Publications Setup (Full List)
    const pubContainer = document.getElementById("publications-container");
    data.publications.forEach(pub => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p>${pub.citation}</p>
            <a href="${pub.link}" target="_blank" class="pub-link">DOI Link &rarr;</a>
        `;
        pubContainer.appendChild(li);
    });

    // Talks Setup
    const talksContainer = document.getElementById("talks-container");
    data.talks.forEach(talk => {
        const li = document.createElement("li");
        li.textContent = talk;
        talksContainer.appendChild(li);
    });
});
