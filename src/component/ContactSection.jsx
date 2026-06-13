import {
    Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex justify-center">
          <div className="space-y-8 max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            {/* ONE LINE INFO */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-center">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>vedikabajaj07@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 8961176405</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">
                Connect With Me
              </h4>

              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/vedika-bajaj-46a13920b" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/vedikabajaj05" target="_blank">
                  <Github />
                </a>
                <a href="https://instagram.com/vedika__bajaj" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};