import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../component/ThemeToggle";

const navItems = [
    { name: "Home",     href: "#hero"       },
    { name: "About",    href: "#about"      },
    { name: "Skills",   href: "#skill"      },
    { name: "Work",     href: "#experience" },
    { name: "Projects", href: "#projects"   },
    { name: "Contact",  href: "#contact"    },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled
                ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg"
                : "py-5 bg-background/20 backdrop-blur-sm"
        )}>
            <div className="container flex items-center justify-between">

                {/* Logo */}
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Tech</span> Portfolio
                    </span>
                </a>

                {/* Desktop nav + theme toggle */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile hamburger + theme toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>

                {/* Mobile dialogue */}
                <div className={cn(
                    "fixed inset-0 z-40 flex items-center justify-center md:hidden",
                    "transition-all duration-300",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Box */}
                    <div className="relative z-50 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl px-6 pt-10 pb-6 mx-6 w-full max-w-sm">

                        {/* Close button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-3 right-3 p-1 text-foreground/60 hover:text-foreground transition-colors"
                            aria-label="Close Menu"
                        >
                            <X size={18} />
                        </button>

                        {/* Nav links */}
                        <div className="flex flex-col">
                            {navItems.map((item, key) => (
                                <a
                                    key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-2 rounded-lg text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};