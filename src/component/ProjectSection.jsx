import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bookie-Store: Modern Approach",
    description:
      "A full-stack online bookstore built using React, Vite, Convex, and Clerk Authentication. Features include Google Sign-In, admin dashboard for managing books, users and orders, secure checkout flow, responsive UI, dark/light mode, and real-time database integration.",
    image: "/projects/Bookiestore.png",
    tags: [
      "React",
      "Vite",
      "Convex",
      "Clerk",
      "JavaScript",
      "Tailwind CSS",
      "Gemini API",
    ],
    demoUrl: "https://bookie-mart.vercel.app/",
    githubUrl: "https://github.com/vedikabajaj05/bookie-mart",
  },
  {
    id: 2,
    title: "Atmospheric River - Detection , Prediction and Forecasting",
    description:
      "Research project focused on detection and prediction of Atmospheric River events using meteorological and climate datasets. Performed preprocessing, visualization using Panoply and Python tools, and applied ML models for forecasting atmospheric patterns.",
    image: "/projects/AR.png",
    tags: [
      "Python",
      "Machine Learning",
      "Climate Data Analysis",
      "Panoply",
      "Data Visualization",
      "Pandas",
      "Meteorological Data",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/vedikabajaj05/AR-detection",
  },
  {
    id: 3,
    title: "Open Source Contributions (GSSoC 2026)",
    description:
      "Open-source contributor in GirlScript Summer of Code 2026. Worked on UI/UX improvements, Clerk authentication integration, bug fixes, and feature development using Git and GitHub workflows.",
    image: "/projects/gssoc.png",
    tags: [
      "Open Source",
      "Git",
      "GitHub",
      "React",
      "JavaScript",
      "Collaboration",
      "CSS",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/vedikabajaj05",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The following projects highlight my experience in full-stack development,
          machine learning, scientific research, and open-source contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* IMAGE (uniform size fix) */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vedikabajaj05"
            rel="noopener noreferrer"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};