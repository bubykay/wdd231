const portfolio = {
  name: "Kayode Ayodele Adetayo",
  title: "Full Stack Developer",
  bio: "Highly skilled Frontend Engineer with over 5 years of experience in developing secure, scalable, and user-centric web applications. Adept at creating intuitive, responsive interfaces using modern frameworks like React and Next.js. Passionate about delivering seamless digital experiences by leveraging expertise in TypeScript, Redux, and advanced frontend tooling. Proven track record in optimizing performance and collaborating with cross-functional teams to bring impactful digital solutions to life.",
  contact: {
    email: "johndoe@example.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  skills: ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "GraphQL"],
  projects: [
    {
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://example.com/ecommerce",
      github: "https://github.com/johndoe/ecommerce",
    },
    {
      name: "Portfolio Website",
      description:
        "A sleek and responsive personal portfolio website showcasing my projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://johndoe.com",
      github: "https://github.com/johndoe/portfolio",
    },
    {
      name: "Task Manager",
      description:
        "A task management app to help users organize their daily tasks and increase productivity.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://example.com/taskmanager",
      github: "https://github.com/johndoe/taskmanager",
    },
    {
      name: "Blog Platform",
      description:
        "A blogging platform where users can create, edit, and delete their blog posts.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://example.com/blogplatform",
      github: "https://github.com/johndoe/blogplatform",
    },
    {
      name: "Weather App",
      description:
        "A weather forecasting app that provides real-time weather updates for any location.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://example.com/weatherapp",
      github: "https://github.com/johndoe/weatherapp",
    },
    {
      name: "Chat Application",
      description:
        "A real-time chat application built with WebSocket for instant messaging.",
      technologies: ["Node.js", "WebSocket", "HTML", "CSS"],
      link: "https://example.com/chatapp",
      github: "https://github.com/johndoe/chatapp",
    },
  ],
  experience: [
    {
      company: "TechCorp",
      role: "Frontend Developer",
      period: "2022 - Present",
      responsibilities: [
        "Developed and maintained company’s web applications",
        "Improved site performance and user experience",
        "Collaborated with backend team to integrate APIs",
      ],
    },
    {
      company: "StartupX",
      role: "Software Engineer",
      period: "2020 - 2022",
      responsibilities: [
        "Built full-stack applications using React and Node.js",
        "Implemented authentication and security features",
        "Worked in an Agile development environment",
      ],
    },
  ],
  education: {
    degree: "B.Sc. in Computer Science",
    institution: "University of California, Berkeley",
    year: "2019",
  },
};

const fullName = document.querySelector(".name");
const bio = document.querySelector(".bio");

const projectsContainer = document.querySelector(".projects");

portfolio.projects.forEach((project) => {
  if (projectsContainer) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;
    projectElement.appendChild(projectName);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectElement.appendChild(projectDescription);

    const projectTechnologies = document.createElement("p");
    projectTechnologies.textContent = `Technologies: ${project.technologies.join(
      ", "
    )}`;
    projectElement.appendChild(projectTechnologies);

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.innerHTML = "View Project <span>|</span> ";
    projectElement.appendChild(projectLink);

    const projectGithub = document.createElement("a");
    projectGithub.href = project.github;
    projectGithub.textContent = "GitHub Repository";
    projectElement.appendChild(projectGithub);

    projectsContainer.appendChild(projectElement);
  }
});

const experienceContainer = document.querySelector(".experience");

portfolio.experience.forEach((job) => {
  const jobElement = document.createElement("div");
  if (experienceContainer) {
    jobElement.classList.add("job");

    const jobTitle = document.createElement("h3");
    jobTitle.textContent = `${job.role} at ${job.company}`;
    jobElement.appendChild(jobTitle);

    const jobPeriod = document.createElement("p");
    jobPeriod.textContent = job.period;
    jobElement.appendChild(jobPeriod);

    const jobResponsibilities = document.createElement("ul");
    job.responsibilities.forEach((responsibility) => {
      const responsibilityItem = document.createElement("li");
      responsibilityItem.textContent = responsibility;
      jobResponsibilities.appendChild(responsibilityItem);
    });
    jobElement.appendChild(jobResponsibilities);

    experienceContainer.appendChild(jobElement);
  }
});

// contact section

const contactContainer = document.querySelector(".contact");

if (contactContainer) {
  const contactEmail = document.createElement("p");
  contactEmail.textContent = `Email: ${portfolio.contact.email}`;
  contactContainer.appendChild(contactEmail);

  const contactPhone = document.createElement("p");
  contactPhone.textContent = `Phone: ${portfolio.contact.phone}`;
  contactContainer.appendChild(contactPhone);

  const contactLocation = document.createElement("p");
  contactLocation.textContent = `Location: ${portfolio.contact.location}`;
  contactContainer.appendChild(contactLocation);
  const contactSocials = document.createElement("div");
  contactSocials.classList.add("contact-socials");

  Object.entries(portfolio.contact.social).forEach(([platform, url]) => {
    const socialLink = document.createElement("a");
    socialLink.href = url;
    socialLink.textContent =
      platform.charAt(0).toUpperCase() + platform.slice(1);
    contactSocials.appendChild(socialLink);
  });

  contactContainer.appendChild(contactSocials);
}

// footer section

const footer = document.querySelector("footer");

const socialLinks = document.createElement("div");
socialLinks.classList.add("social-links");

Object.entries(portfolio.contact.social).forEach(([platform, url]) => {
  const socialLink = document.createElement("a");
  socialLink.href = url;
  socialLink.classList.add("social-link");

  const socialIcon = document.createElement("img");
  socialIcon.src = `images/${platform}.png`;
  socialIcon.alt = `${platform} icon`;
  socialIcon.classList.add("social-icon");
  socialIcon.width = 16;

  socialLink.appendChild(socialIcon);
  socialLinks.appendChild(socialLink);
});

footer.appendChild(socialLinks);

if (fullName && bio) {
  fullName.textContent = portfolio.name;
  bio.textContent = portfolio.bio;
}
const navLinks = document.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});

const observer = new MutationObserver(() => {
  navLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.style.color = "white";
    } else {
      link.style.color = "";
    }
  });
});

observer.observe(document.body, { attributes: true, subtree: true });
