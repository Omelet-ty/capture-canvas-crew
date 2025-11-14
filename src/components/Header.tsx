import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import arteideasLogo from "@/assets/arteideas-logo-new.png";
import { useCart } from "@/contexts/CartContext";
import CartView from "./CartView";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const cartItemsCount = items.length;

  const navigationLinks = [
    { name: "Hogar", href: "/", icon: Home },
    { name: "Comprar todo", href: "#products" },
    { name: "Muestra", href: "#gallery" },
    { name: "Colecciones", href: "#collections" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={arteideasLogo} 
            alt="Arte e Ideas - Diseño Creativo" 
            className="h-12 w-auto drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              {link.icon && <link.icon size={16} />}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="pl-9"
            />
          </div>
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Cart */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Carrito de Compras</SheetTitle>
              </SheetHeader>
              <CartView />
            </SheetContent>
          </Sheet>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-9"
              />
            </div>
          </div>
          <nav className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon && <link.icon size={18} />}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
