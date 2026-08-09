document.addEventListener("DOMContentLoaded", () => {
    if (!window.cvData) {
        console.error("CV data not found. Make sure data.js is loaded first.");
        return;
    }

    const data = window.cvData;

    // Profile Setup
    document.getElementById("profile-name").textContent = data.profile.name;
    document.getElementById("profile-title").textContent = data.profile.title;
    document.getElementById("profile-institution").textContent = `${data.profile.institution}, ${data.profile.location}`;
    document.getElementById("profile-about").textContent = data.profile.about;
    document.getElementById("profile-location").textContent = data.profile.location;
    
    document.getElementById("profile-image").src = data.profile.profileImage;
    document.getElementById("profile-resume").href = data.profile.resumeLink;
    document.getElementById("profile-email").href = `mailto:${data.profile.email}`;
    
    document.getElementById("profile-website").href = `https://${data.profile.website}`;
    document.getElementById("profile-website").textContent = data.profile.website;
    
    document.getElementById("profile-orcid").href = `https://orcid.org/${data.profile.orcid}`;
    document.getElementById("profile-orcid").textContent = `ORCID: ${data.profile.orcid}`;
    
    document.getElementById("footer-name").textContent = data.profile.name;

    // Projects Setup
    const projectsContainer = document.getElementById("projects-container");
    data.projects.forEach((proj, index) => {
        // Alternate layout direction based on index (even/odd)
        const layoutClass = index % 2 !== 0 ? 'row-reverse' : '';
        
        const projectEl = document.createElement("div");
        projectEl.className = `project-card ${layoutClass}`;
        
        const tagsHtml = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

        const imageHtml = proj.image ? 
            `<img src="${proj.image}" alt="${proj.title}" class="project-img" style="width:100%; height:350px; object-fit:cover; border-radius:20px; box-shadow: var(--shadow-sm);">` : 
            `<div class="project-image-placeholder"><span>${proj.title.split(' ')[0]} Visual</span></div>`;

        projectEl.innerHTML = `
            <div class="project-image-wrapper">
                ${imageHtml}
            </div>
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectEl);
    });

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
                <h3>${exp.role}</h3>
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
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <p>${edu.description}</p>
            </div>
        `;
        eduContainer.appendChild(item);
    });

    // Publications Setup
    const pubContainer = document.getElementById("publications-container");
    data.publications.forEach(pub => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p>${pub.citation}</p>
            <a href="${pub.link}" target="_blank" class="pub-link">View DOI &rarr;</a>
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
