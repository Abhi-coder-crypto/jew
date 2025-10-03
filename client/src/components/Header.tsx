import { Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

export default function Header({ isMenuOpen, toggleMenu, showBackButton = false, onBack }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="w-10">
          {showBackButton && onBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Go back"
              data-testid="button-back"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          )}
        </div>

        <Link href="/">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-center flex-1 cursor-pointer" data-testid="text-brand-name">
            <span className="text-primary">Jewelry</span>{" "}
            <span className="text-foreground">Catalog</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="WhatsApp"
            data-testid="link-whatsapp-header"
          >
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={`hamburger p-2 hover:bg-muted rounded-lg transition-colors ${
              isMenuOpen ? "hamburger-active" : ""
            }`}
            aria-label="Toggle menu"
            data-testid="button-toggle-menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="hamburger-line h-0.5 w-full bg-foreground rounded" />
              <span className="hamburger-line h-0.5 w-full bg-foreground rounded" />
              <span className="hamburger-line h-0.5 w-full bg-foreground rounded" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
