document.addEventListener("DOMContentLoaded", function () {
    fetch("../data/data.json")
        .then(response => response.json())
        .then(data => {
            // Populate Contact Section
            document.getElementById("contact").innerHTML = `
                <h2>Contact</h2>
                <p><i class="fas fa-envelope"></i> <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
                <p><i class="fas fa-phone"></i> <a href="tel:${data.contact.phone}">${data.contact.phone}</a></p>
                <p><i class="fas fa-map-marker-alt"></i> ${data.contact.location}</p>
                <p><i class="fab fa-linkedin"></i> <a href="${data.contact.linkedin}" target="_blank">nataliia-vakhovska</a></p>
            `;

            // Populate Education Section
            let educationHTML = "<h2>Education</h2><ul>";
            data.education.forEach(edu => {
                educationHTML += `<li><b>${edu.degree}</b> - ${edu.school} (${edu.years})</li>`;
            });
            educationHTML += "</ul>";
            document.getElementById("education").innerHTML = educationHTML;

            // Populate Skills Section
            let skillsHTML = "<h2>Skills</h2><ul>";
            for (const [category, skills] of Object.entries(data.skills)) {
                skillsHTML += `<li><b>${category.replace(/_/g, ' ')}:</b> ${skills.join(', ')}</li>`;
            }
            skillsHTML += "</ul>";
            document.getElementById("skills").innerHTML = skillsHTML;

            // Populate Experience Section
            let experienceHTML = "<h2>Work Experience</h2>";
            data.experience.forEach(exp => {
                experienceHTML += `<h3>${exp.title} - ${exp.company || ""} (${exp.years})</h3><ul>`;
                exp.responsibilities.forEach(res => {
                    experienceHTML += `<li>${res}</li>`;
                });
                experienceHTML += "</ul>";
            });
            document.getElementById("experience").innerHTML = experienceHTML;
        })
        .catch(error => console.error("Error loading data:", error));
});
