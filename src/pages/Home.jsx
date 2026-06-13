import { StarBackground } from "@/component/StarBackground";
import { Navbar } from "../component/Navbar";
import { HeroSection } from "../component/HeroSection";
import { AboutMe } from "../component/AboutMe";
import { SkillsSection } from "@/component/SkillsSection";
import { ProjectSection } from "@/component/ProjectSection";
import { ContactSection } from "@/component/ContactSection";
import { WorkExperienceSection } from "@/component/WorkExperience.jsx";
import { EducationSection } from "@/component/EducationSection";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar />
            <main>
                <HeroSection />
                <AboutMe />
                <EducationSection />
                <WorkExperienceSection />
                <ProjectSection />
                <SkillsSection />
                <ContactSection />
            </main>
        </div>
    );
}