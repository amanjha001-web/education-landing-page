
import { X } from "lucide-react";
import Button from "../common/Button";
import { navigation } from "../../constants/navigation";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Menu Panel */}
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <a
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <span className="text-lg font-bold">E</span>
            </div>

            <span className="text-lg font-bold tracking-tight">
              Edu<span className="text-primary">Learn</span>
            </span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col overflow-y-auto p-5">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Login
            </Button>

            <Button
              fullWidth
              onClick={onClose}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;
