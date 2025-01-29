document.addEventListener("DOMContentLoaded", function () {
    fetch("../data/data.json") 
        .then(response => response.json())
        .then(data => {
            // CONTACT SECTION
            const contactHTML = `
                <p class="contact-email"><i class="fa fa-envelope contactIcon"></i>
                    <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                </p>
                <p class="contact-phone"><i class="fa fa-phone contactIcon"></i>
                    <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                </p>
                <p class="contact-location"><i class="fa fa-map-marker contactIcon"></i> ${data.contact.location}</p>
                <p class="contact-linkedin"><i class="fa fa-linkedin-square contactIcon"></i>
                    <a href="${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a>
                </p>
            `;
            document.querySelector(".pdf-contact").innerHTML = contactHTML;

            // EDUCATION SECTION
            let educationHTML = "";
            data.education.forEach(edu => {
                educationHTML += `
                    <div class="pdf-education">
                        <p class="education-degree bolded white">${edu.degree}</p>
                        <p class="education-school">${edu.school}</p>
                        <p class="education-years">${edu.years}</p>
                    </div>
                `;
            });
            document.querySelector(".pdf-education-container").innerHTML = educationHTML;

            // SKILLS SECTION
            // Check if skills data exists and is an object
            if (data.skills && typeof data.skills === "object") {
                let skillsHTML = "";
                Object.entries(data.skills).forEach(([category, items]) => {
                    skillsHTML += `<li class="pdf-skill-category"><b class="bolded white">${category.replace(/_/g, ' ')}:</b> ${items.join(', ')}</li>`;
                });
                document.querySelector(".pdf-skills").innerHTML = skillsHTML;
            } else {
                console.error("❌ Skills data is missing or invalid!");
            }


            // EXPERIENCE SECTION
            let experienceHTML = "<h2>Work Experience</h2><ul>";
            data.experience.forEach(exp => {
                experienceHTML += `
                    <li class="pdf-experience">
                        <div class="jobPosition bolded pdf-job-title">
                            <span class="bolded pdf-job-name" style="font-size: large">${exp.title}</span>
                            <span class="pdf-job-years">${exp.years}</span>
                        </div>
                        <div class="projectName bolded pdf-company">
                            <span>${exp.company || ""} ${exp.location || ""}</span>
                        </div>
                        <div class="smallText pdf-job-responsibilities">
                            <ul>
                                ${exp.responsibilities.map(res => `<li class="pdf-job-task">${res}</li>`).join("")}
                            </ul>
                        </div>
                    </li>
                `;
            });
            experienceHTML += "</ul>";
            document.querySelector(".pdf-experience-container").innerHTML = experienceHTML;
        })
        .catch(error => console.error("Error loading data:", error));
});
