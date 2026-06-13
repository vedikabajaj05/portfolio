import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Birla Institute of Technology, Mesra",
        year: "2022 – 2026",
        grade: "CGPA: 8.2",
        details: "Undergraduate program in Computer Science & Engineering",
    },
    {
        degree: "Class XII — CBSE",
        institution: "Kendriya Vidyalaya, Kathmandu",
        year: "2021 – 2022",
        grade: "89.8%",
        details: "PCM with Computer Science",
    },
    {
        degree: "Class X — CBSE",
        institution: "Kendriya Vidyalaya, Kathmandu",
        year: "2019 – 2020",
        grade: "93.8%",
        details: "Secondary School Certificate",
    },
];

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Education</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    My academic background and qualifications.
                </p>

                <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                    <div className="space-y-10">
                        {education.map((edu, index) => (
                            <div key={index} className="relative flex gap-6">
                                {/* dot */}
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                </div>

                                {/* card */}
                                <div className="flex-1 bg-card border border-border/50 rounded-xl p-6 shadow-sm">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {edu.degree}
                                        </h3>
                                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                            {edu.grade}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground font-medium mb-1">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {edu.details}
                                    </p>
                                    <span className="text-xs text-muted-foreground/70 border border-border/40 px-2 py-0.5 rounded-md">
                                        {edu.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
