import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants/routes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-18">
        <Link
          to="/"
          className="font-display text-xl font-bold text-foreground"
          onClick={closeMobileMenu}
        >
          {/* {APP_CONFIG.name} */}
          <img src="https://touchsky.in/img/Logo.png" alt="Touch Sky" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <Button
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  closeMobileMenu();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
