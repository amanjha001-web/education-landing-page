
import { Moon, Sun, Menu } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import useTheme from "../../hooks/useTheme";
import { navigation } from "../../constants/navigation";

const Header = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Education Platform Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <span className="text-lg font-bold">E</span>
            </div>

            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Edu<span className="text-primary">Learn</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Desktop Auth */}
            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="ghost" size="sm">
                Login
              </Button>

              <Button size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={onMenuClick}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;