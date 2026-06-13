import { Award, Briefcase, Code } from "lucide-react"

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Passionate about Software and Data Science </h3>
                    <p className="text-muted-foreground"> {" "}
                        With about a year of experience, I have experience in machine
                        learning, data science, and full-stack web development.  
                    </p>
                    <p className="text-muted-foreground"> {" "}
                        My work bridges algorithms, backend engineering, and user-facing interfaces,
                        enabling real-world solutions from concept to deployment.
                    </p>
                    <p className="text-muted-foreground"> {" "}
                        I enjoy tackling challenging problems, optimizing code for performance,
                        and continuously exploring emerging technologies in ML and software
                        development.                 
                    </p>
                    <p className="text-muted-foreground"> {" "}
                        I actively participate in hackathons to expand my knowledge and sharpen my skills.                    </p>
                    <div className="flex felx-col sm:flex-row gap-4 pt-4 justify-center"> 
                        <a href="#contact"className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                        <a href="https://drive.google.com/file/d/1dmxKDKwcRNZH4w3fwOUmsnossGTafQjT/view?usp=sharing" 
                        target="_blank"
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Check My CV
                        </a>

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left"> 
                                <h4 className="font-semibold text-lg"> Software Development </h4>
                                <p className="text-muted-foreground"> uilding robust and scalable software applications to solve real-world problems. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left"> 
                                <h4 className="font-semibold text-lg"> Data science</h4>
                                <p className="text-muted-foreground"> Leveraging data science, AI, and machine learning to create intelligent, data-driven solutions. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left"> 
                                <h4 className="font-semibold text-lg"> Work Experience </h4>
                                <p className="text-muted-foreground"> About a year of experience in software development, building AI-driven applications and working with AWS-based data lakes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left"> 
                                <h4 className="font-semibold text-lg"> Achievements </h4>
                                <p className="text-muted-foreground"> Served as a Semi-Finalist in the Flipkart GRiD 7.0 along with participation in many renowned hackathons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}