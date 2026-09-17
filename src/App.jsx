import './App.css'

function App() {
  const projects = [
    {
      title: 'AI Image Studio',
      description:
        'AI-powered image processing and format conversion application.',
      tech: 'Python • Streamlit • Pillow',
    },
    {
      title: 'AI Intelligence Pipeline',
      description:
        'AI pipeline for collecting, processing and presenting structured intelligence.',
      tech: 'Python • AI/ML • APIs',
    },
    {
      title: 'Build Your Own Redis',
      description:
        'Redis-style database server built from scratch in Java.',
      tech: 'Java • Networking • Data Structures',
    },
  ]

  return (
    <div className="app">

      <nav className="navbar">
        <h2 className="logo">Abhi.dev</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>

        <section className="hero">

          <p className="hero-label">
            AI ENGINEER • DEVELOPER • CLOUD
          </p>

          <h1 className="hero-name">

            <span className="intro-text">
              Hi, I'm
            </span>

            <span className="name-line">

              <span className="first-name">
                ABHI
              </span>

              <span className="last-name">
                THAKUR
              </span>

            </span>

          </h1>

          <h2 className="hero-title">
            Building intelligent applications with AI and Cloud.
          </h2>

          <p className="hero-description">
            Computer Science student working with Artificial Intelligence,
            Machine Learning, Java, React and AWS.
          </p>

          <div className="buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href="https://github.com/AbhiThakur16"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

          </div>

          <div className="aws-badge">
            ☁ Deployed on AWS EC2 using Nginx
          </div>

        </section>


        <section
          id="about"
          className="content-section"
        >

          <p className="section-label">
            ABOUT
          </p>

          <h2 className="section-title">
            About Me
          </h2>

          <p className="section-description">
            I am a Computer Science student specializing in Data Science
            and working toward becoming an AI Engineer. I enjoy building
            complete applications and deploying them on cloud infrastructure.
          </p>

        </section>


        <section
          id="skills"
          className="content-section"
        >

          <p className="section-label">
            TECH STACK
          </p>

          <h2 className="section-title">
            Skills & Technologies
          </h2>

          <p className="section-subtitle">
            Technologies and tools I use for AI, software development
            and cloud deployment.
          </p>

          <div className="cards-grid">

            <article className="card">

              <div className="card-icon">
                AI
              </div>

              <h3 className="card-title">
                AI & Data
              </h3>

              <div className="skill-list">
                <p>Python</p>
                <p>Machine Learning</p>
                <p>Pandas & NumPy</p>
              </div>

            </article>


            <article className="card">

              <div className="card-icon">
                &lt;/&gt;
              </div>

              <h3 className="card-title">
                Development
              </h3>

              <div className="skill-list">
                <p>Java</p>
                <p>React</p>
                <p>Git & GitHub</p>
              </div>

            </article>


            <article className="card">

              <div className="card-icon">
                AWS
              </div>

              <h3 className="card-title">
                Cloud
              </h3>

              <div className="skill-list">
                <p>AWS EC2</p>
                <p>Ubuntu Linux</p>
                <p>Nginx</p>
              </div>

            </article>

          </div>

        </section>


        <section
          id="projects"
          className="content-section"
        >

          <p className="section-label">
            PROJECTS
          </p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-subtitle">
            Some projects I have built while learning AI,
            backend development and cloud technologies.
          </p>

          <div className="cards-grid">

            {projects.map((project) => (

              <article
                className="card project-card"
                key={project.title}
              >

                <div className="project-line"></div>

                <h3 className="card-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-tech">
                  {project.tech}
                </p>

              </article>

            ))}

          </div>

        </section>


        <section className="aws-section">

          <div className="aws-content">

            <p className="section-label">
              AWS DEPLOYMENT
            </p>

            <h2 className="section-title">
              Running Live on AWS
            </h2>

            <p className="section-description">
              This React + Vite application is hosted on an Ubuntu
              EC2 instance and served through the Nginx web server.
              The application is deployed in the Asia Pacific
              (Mumbai) AWS Region.
            </p>

          </div>


          <div className="server-card">

            <div className="server-header">
              <span className="server-dot"></span>
              LIVE SERVER
            </div>

            <h3>
              Amazon EC2
            </h3>

            <strong className="online-status">
              ● Online
            </strong>

            <p>
              Region: Asia Pacific (Mumbai)
            </p>

            <p>
              Operating System: Ubuntu
            </p>

            <p>
              Web Server: Nginx
            </p>

            <p>
              Frontend: React + Vite
            </p>

          </div>

        </section>

      </main>


      <footer>

        <p>
          © 2026 Abhi Thakur
        </p>

        <p>
          React • AWS EC2 • Nginx
        </p>

      </footer>

    </div>
  )
}

export default App
