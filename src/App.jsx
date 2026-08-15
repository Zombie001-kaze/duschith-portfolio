import { useEffect, useState } from "react";
import "./App.css";
import heroImage from "./assets/duschith.jpg";

const projects = [
  {
    number: "01",
    name: "CyberShield-FIM",
    category: "FILE INTEGRITY MONITOR",
    status: "ACTIVE",
    description:
      "A Python-based security tool designed to detect unauthorized changes to protected files.",
    problem:
      "File tampering can happen silently. I built this project to provide a lightweight way to establish a trusted file state and identify unexpected modifications.",
    built:
      "Python monitoring logic, cryptographic hashing, file-system scanning, integrity comparison, and security-focused reporting.",
    technical:
      "The system creates cryptographic hashes for monitored files and compares future file states against a trusted baseline. A hash mismatch indicates that the file contents have changed.",
    github: "https://github.com/Zombie001-kaze/CyberShield-FIM",
  },
  {
    number: "02",
    name: "Password Security Toolkit",
    category: "PASSWORD SECURITY",
    status: "ACTIVE",
    description:
      "A Python security toolkit that evaluates password strength using measurable security characteristics.",
    problem:
      "A simple weak-or-strong label doesn't explain why a password is risky. I built this toolkit to turn password characteristics into a structured security assessment.",
    built:
      "Python password analysis logic covering password length, character-set analysis, entropy estimation, strength scoring, and risk classification.",
    technical:
      "The analyzer evaluates password length and character diversity, estimates entropy, and combines those factors into a structured assessment rather than relying only on password length.",
    github:
      "https://github.com/Zombie001-kaze/Password-Security-Toolkit",
  },
];

const skills = [
  "Python",
  "Cybersecurity",
  "Linux",
  "Git & GitHub",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "Security Automation",
  "File Integrity",
  "Web Development",
];

function App() {
  const [command, setCommand] = useState("");

  const [terminalLines, setTerminalLines] = useState([
    "K R DUSCHITH SECURITY LAB v1.0",
    "Interactive terminal initialized.",
    "Type 'help' to see available commands.",
    "",
  ]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const runCommand = (event) => {
    event.preventDefault();

    const input = command.trim().toLowerCase();

    if (!input) return;

    let output = [];

    switch (input) {
      case "help":
        output = [
          "AVAILABLE COMMANDS",
          "──────────────────",
          "about → About Duschith",
          "projects → View projects",
          "skills → View technical skills",
          "security → Run security status",
          "contact → Contact information",
          "clear → Clear terminal",
        ];
        break;

      case "about":
        output = [
          "ABOUT",
          "K R DUSCHITH",
          "",
          "Cybersecurity-focused BCA Data Science student.",
          "Interested in security engineering, Python, Linux,",
          "automation and practical security tooling.",
        ];
        break;

      case "projects":
        output = [
          "PROJECTS",
          "01 → CyberShield-FIM",
          "02 → Password Security Toolkit",
        ];
        break;

      case "skills":
        output = [
          "TECHNICAL SKILLS",
          ...skills.map((skill) => `→ ${skill}`),
        ];
        break;

      case "security":
        output = [
          "SECURITY STATUS",
          "SYSTEM .............. OPERATIONAL",
          "THREAT LEVEL ......... LOW",
          "MONITORING ........... ACTIVE",
          "SIMULATED THREATS .... 0",
        ];
        break;

      case "contact":
        output = [
          "CONTACT",
          "Email → duschith578@gmail.com",
          "GitHub → github.com/Zombie001-kaze",
          "LinkedIn → linkedin.com/in/k-r-duschith-68993341b/",
        ];
        break;

      case "clear":
        setTerminalLines([]);
        setCommand("");
        return;

      default:
        output = [
          `Command not found: ${input}`,
          "Type 'help' to see available commands.",
        ];
    }

    setTerminalLines((previous) => [
      ...previous,
      `$ ${command}`,
      ...output,
      "",
    ]);

    setCommand("");
  };

  return (
    <div className="site">
      {/* NAVBAR */}

      <header className="navbar">
        <a className="logo" href="#home">
          K R DUSCHITH<span>_</span>
        </a>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#security-lab">SECURITY LAB</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="system-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>
      </header>

      <main>
        {/* HERO */}

        <section className="hero section" id="home">
          <div className="hero-content reveal">
            <div className="eyebrow">
              CYBERSECURITY / PYTHON / SOFTWARE DEVELOPMENT
            </div>

            <h1>
              BUILDING
              <br />
              <span>SECURITY</span>
              <br />
              SYSTEMS.
            </h1>

            <p className="hero-text">
              I build practical security tools and software while developing
              deeper expertise in cybersecurity, Linux, automation and modern
              web development.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                VIEW MY WORK
              </a>

              <a className="button secondary" href="#contact">
                CONTACT ME
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <span>FOCUS</span>
                <strong>CYBERSECURITY</strong>
              </div>

              <div>
                <span>PRIMARY LANGUAGE</span>
                <strong>PYTHON</strong>
              </div>

              <div>
                <span>PROJECTS</span>
                <strong>02</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="green">BUILDING</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="image-frame">
              <div className="image-label">
                <span>PROFILE</span>
                <span>01</span>
              </div>

              <img
                src={heroImage}
                alt="Duschith"
                className="hero-image"
              />

              <div className="image-scan"></div>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="section about-section" id="about">
          <div className="section-heading reveal">
            <span>01</span>
            <h2>ABOUT</h2>
          </div>

          <div className="about-grid">
            <div className="about-main reveal">
              <p className="large-text">
                I'm Duschith — a BCA Data Science student focused on building
                practical cybersecurity projects rather than just collecting
                certifications.
              </p>

              <p>
                My current focus is cybersecurity, with a particular interest
                in Python security tooling, Linux, automation, file integrity,
                password security and security fundamentals.
              </p>

              <p>
                I also work with modern web technologies because understanding
                how applications are built is an important part of becoming a
                stronger security professional.
              </p>
            </div>

            <div className="about-panel reveal">
              <div className="panel-row">
                <span>LOCATION</span>
                <strong>INDIA</strong>
              </div>

              <div className="panel-row">
                <span>FIELD</span>
                <strong>CYBERSECURITY</strong>
              </div>

              <div className="panel-row">
                <span>DEGREE</span>
                <strong>BCA / DATA SCIENCE</strong>
              </div>

              <div className="panel-row">
                <span>BUILDING WITH</span>
                <strong>PYTHON + JS</strong>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="section projects-section" id="projects">
          <div className="section-heading reveal">
            <span>02</span>
            <h2>PROJECTS</h2>
          </div>

          <div className="projects-intro reveal">
            <p>
              Security projects built to understand how systems actually work,
              not just to demonstrate a list of technologies.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article
                className="project-card reveal"
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-status">
                      ● {project.status}
                    </span>
                  </div>
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-details">
                  <div>
                    <span>THE PROBLEM</span>
                    <p>{project.problem}</p>
                  </div>

                  <div>
                    <span>WHAT I BUILT</span>
                    <p>{project.built}</p>
                  </div>

                  <div>
                    <span>TECHNICAL DETAIL</span>
                    <p>{project.technical}</p>
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW GITHUB ↗
                  </a>

                  <span>SECURITY / PYTHON</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECURITY LAB */}

        <section className="section lab-section" id="security-lab">
          <div className="section-heading reveal">
            <span>03</span>
            <h2>SECURITY LAB</h2>

            <div className="online-label">
              <span className="status-dot"></span>
              OPTIONAL
            </div>
          </div>

          <div className="lab-note reveal">
            <p>
              This terminal is an interactive bonus. All important portfolio
              content is available through the normal navigation.
            </p>
          </div>

          <div className="lab-grid">
            <div className="terminal reveal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>security-lab@duschith:~</span>
              </div>

              <div className="terminal-body">
                {terminalLines.map((line, index) => (
                  <div key={index} className="terminal-line">
                    {line}
                  </div>
                ))}

                <form
                  onSubmit={runCommand}
                  className="terminal-input"
                >
                  <span>$</span>

                  <input
                    value={command}
                    onChange={(event) =>
                      setCommand(event.target.value)
                    }
                    placeholder="type help..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                </form>
              </div>
            </div>

            <div className="lab-status">
              <div className="status-card reveal">
                <span>SYSTEM</span>
                <strong>OPERATIONAL</strong>
                <p>Portfolio systems running normally.</p>
              </div>

              <div className="status-card reveal">
                <span>SECURITY PROJECTS</span>
                <strong>02</strong>
                <p>Verified security projects.</p>
              </div>

              <div className="status-card reveal">
                <span>PRIMARY STACK</span>
                <strong>PYTHON</strong>
                <p>Security tools, automation and scripting.</p>
              </div>

              <div className="status-card reveal threat">
                <span>THREAT MONITOR</span>
                <strong>LOW</strong>
                <p>No simulated threats detected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <span>04</span>
            <h2>SKILLS</h2>
          </div>

          <div className="skills-grid reveal">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section className="section contact-section" id="contact">
          <div className="section-heading reveal">
            <span>05</span>
            <h2>CONTACT</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-copy reveal">
              <span className="eyebrow">
                OPEN TO OPPORTUNITIES
              </span>

              <h2>
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                <span>SECURE.</span>
              </h2>

              <p>
                For internships, cybersecurity projects, collaborations or
                technical opportunities, reach out directly.
              </p>
            </div>

            <div className="contact-links reveal">
              <a href="mailto:duschith578@gmail.com">
                <span>EMAIL</span>
                <strong>duschith578@gmail.com</strong>
                <b>↗</b>
              </a>

              <a
                href="https://github.com/Zombie001-kaze"
                target="_blank"
                rel="noreferrer"
              >
                <span>GITHUB</span>
                <strong>Zombie001-kaze</strong>
                <b>↗</b>
              </a>

              <a
                href="https://www.linkedin.com/in/k-r-duschith-68993341b/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LINKEDIN</span>
                <strong>K R Duschith</strong>
                <b>↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>K R DUSCHITH_</span>
        <span>CYBERSECURITY / SOFTWARE / BUILDING</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;