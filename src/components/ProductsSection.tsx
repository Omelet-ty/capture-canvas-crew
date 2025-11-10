import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mugImage from "@/assets/product-mug.jpg";
import puzzleImage from "@/assets/product-puzzle.jpg";
import cushionImage from "@/assets/product-cushion.jpg";
import cardsImage from "@/assets/product-cards.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: mugImage,
      title: "TAZA BÁSICA PERSONALIZADA CON FOTOS",
      description: "Resistente, bonita, colorida y muy divertida! Tu foto favorita en cada sorbo.",
      price: "11.95€",
      oldPrice: "15.95€",
      badge: "¡Regalo!",
      badgeVariant: "default" as const,
    },
    {
      image: puzzleImage,
      title: "PUZZLES PERSONALIZADOS",
      description: "¡Diviértete con los puzzles más personales y exclusivos! Arma tus recuerdos pieza a pieza.",
      price: "29.95€",
      oldPrice: "35.95€",
      badge: "¡Nuevo!",
      badgeVariant: "secondary" as const,
    },
    {
      image: cushionImage,
      title: "COJÍN PERSONALIZADO CON FOTOS",
      description: "¡Ideales para decorar cualquier lugar! Suave, decorativo y lleno de recuerdos.",
      price: "24.95€",
      oldPrice: "29.95€",
      badge: "¡TOP!",
      badgeVariant: "destructive" as const,
    },
    {
      image: cardsImage,
      title: "BARAJA DE CARTAS PERSONALIZADA CON FOTOS",
      description: "Transforma cada juego en una experiencia inolvidable! Cada carta cuenta tu historia.",
      price: "19.95€",
      oldPrice: "24.95€",
      badge: "¡Regalo!",
      badgeVariant: "default" as const,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¡CREA REGALOS MEMORABLES!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Productos personalizados que convierten tus momentos en arte
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full shadow-medium bg-background hover:bg-primary hover:text-primary-foreground hidden md:flex"
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full shadow-medium bg-background hover:bg-primary hover:text-primary-foreground hidden md:flex"
          >
            <ChevronRight size={24} />
          </Button>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {products.map((product, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 rounded-full"
          >
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
