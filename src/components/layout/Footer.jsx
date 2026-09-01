
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Programs", href: "#programs" },
      { label: "Instructors", href: "#instructors" },
      { label: "Learning Path", href: "#learning-path" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Become an Instructor", href: "#instructor" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Help Center", href: "#help" },
      { label: "FAQ", href: "#faq" },
      { label: "Success Stories", href: "#success-stories" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  }
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_2fr] lg:py-16">
          {/* Brand + Newsletter */}
          <div className="max-w-md">
            <a
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="EduLearn Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <span className="text-lg font-bold">E</span>
              </div>

              <span className="text-xl font-bold tracking-tight">
                Edu<span className="text-primary">Learn</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
              Learn practical skills from industry experts and build
              the knowledge you need to move your career forward.
            </p>

            {/* Newsletter */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-foreground">
                Stay updated
              </p>

              <form className="flex max-w-sm gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <Button
                  type="submit"
                  size="sm"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EduLearn. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="#privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>

            <a
              href="#cookies"
              className="transition-colors hover:text-foreground"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
