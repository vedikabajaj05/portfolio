import { ArrowRight, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Haleon - Software Engineering Intern",
    description:
      "Developed a face detection-based healthcare assistance application that identifies potential diseases from facial inputs and recommends appropriate medicines available at partnered stores. Worked on integrating ML-based detection with a user-friendly interface and real-world healthcare workflow.",
    image: "/experience/haleon.png",
    tags: [
      "Face Detection",
      "Machine Learning",
      "Healthcare AI",
      "React",
      "System Integration",
    ],
    demoUrl: "#",
    companyUrl: "https://www.haleon.com/",
  },
  {
    id: 2,
    title: "Xuno - Data Science Intern",
    description:
      "Built and managed a scalable AWS-based data lake for the organization. Performed data preprocessing, transformation, and analysis using Python libraries to generate actionable business insights and support data-driven decision making.",
    image: "/experience/xuno.png",
    tags: [
      "AWS",
      "Data Lake",
      "Python",
      "Data Analysis",
      "Pandas",
      "Data Science",
    ],
    demoUrl: "#",
    companyUrl: "https://www.xuno.co/",
  },
  {
    id: 3,
    title: "GirlScript Summer of Code (GSSoC 2026)",
    description:
      "Open-source contributor across multiple repositories, working on UI/UX improvements, Clerk authentication integration, bug fixes, and feature development. Collaborated with maintainers using Git and GitHub workflows in a distributed team environment.",
    image: "/experience/gssoc.png",
    tags: [
      "Open Source",
      "Git",
      "GitHub",
      "React",
      "Clerk Auth",
      "UI/UX",
    ],
    demoUrl: "#",
    companyUrl: "https://gssoc.girlscript.tech/",
  },
];

export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My professional and open-source experience across software development,
          internships, and collaborative engineering environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {exp.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Visit
                  </a>
                </div>
              
            </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};