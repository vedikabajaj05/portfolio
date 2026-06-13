import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Programming Languages & Foundations
    { name: "SQL", level: 95, category: "programming" },
    { name: "C", level: 80, category: "programming" },
    { name: "C++", level: 88, category: "programming" },
    { name: "Python", level: 92, category: "programming" },
    { name: "Data Structures & Algorithms", level: 95, category: "programming" },
    { name: "OS", level: 84, category: "programming" },
    { name: "DBMS", level: 94, category: "programming" },
    { name: "OOPs", level: 82, category: "programming" },

    // Machine Learning & AI
    { name: "TensorFlow", level: 80, category: "ML-AI" },
    { name: "PyTorch", level: 85, category: "ML-AI" },
    { name: "Python Libraries", level: 95, category: "ML-AI" },
    { name: "Linear & Non-linear Algorithms", level: 97, category: "ML-AI" },
    { name: "Data Science", level: 95, category: "ML-AI" },

    // Development (Web & App)
    { name: "React", level: 70, category: "development" },
    { name: "Tailwind CSS", level: 75, category: "development" },
    { name: "HTML/CSS", level: 85, category: "development" },
    { name: "Backend ", level: 89, category: "development" },

    // Cloud & Tools
    { name: "AWS (Lambda, Glue, S3, Athena)", level: 89, category: "tools" },
    { name: "Git/Github", level: 92, category: "tools" },
    { name: "Convex", level: 96, category: "tools" },
    { name: "Clerk", level: 97, category: "tools" },
    
    // Soft Skills
    { name: "Leadership", level: 99, category: "soft-skills" },
    { name: "Problem Solving", level: 98, category: "soft-skills" },
    { name: "Team Collaboration", level: 99, category: "soft-skills" },
    { name: "Adaptability", level: 100, category: "soft-skills" },
];

const categories = ["all", "programming" , "ML-AI", "development" ,"tools", "soft-skills" ];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill)=> activeCategory === "all" || skill.category === activeCategory 
    );

    return <section 
    id="skill" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl"> 
            <h2 className="text-3xl md:text-4xl font-bold md-12 text-center mb-12">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=> setActiveCategory(category)}
                    className={cn 
                    ("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key)=>(
                    <div key = {key}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3> 
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rouded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out"
                            style={{width: skill.level + "%"}}/>
                        </div>
                        <div className=" text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
        </section>;
};