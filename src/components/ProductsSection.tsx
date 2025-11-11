import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import mugImage from "@/assets/product-mug.jpg";
import mugAltImage from "@/assets/product-mug-alt.jpg";
import puzzleImage from "@/assets/product-puzzle.jpg";
import puzzleAltImage from "@/assets/product-puzzle-alt.jpg";
import cushionImage from "@/assets/product-cushion.jpg";
import cushionAltImage from "@/assets/product-cushion-alt.jpg";
import cardsImage from "@/assets/product-cards.jpg";
import cardsAltImage from "@/assets/product-cards-alt.jpg";
import calendarImage from "@/assets/product-calendar.jpg";
import calendarAltImage from "@/assets/product-calendar-alt.jpg";
import magnetsImage from "@/assets/product-magnets.jpg";
import magnetsAltImage from "@/assets/product-magnets-alt.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: mugImage,
      altImage: mugAltImage,
      title: "TAZA BÁSICA PERSONALIZADA CON FOTOS",
      description: "Resistente, bonita, colorida y muy divertida! Tu foto favorita en cada sorbo.",
      price: "11.95€",
      oldPrice: "15.95€",
      badge: "¡Regalo!",
      badgeVariant: "default" as const,
    },
    {
      image: puzzleImage,
      altImage: puzzleAltImage,
      title: "PUZZLES PERSONALIZADOS",
      description: "¡Diviértete con los puzzles más personales y exclusivos! Arma tus recuerdos pieza a pieza.",
      price: "29.95€",
      oldPrice: "35.95€",
      badge: "¡Nuevo!",
      badgeVariant: "secondary" as const,
    },
    {
      image: cushionImage,
      altImage: cushionAltImage,
      title: "COJÍN PERSONALIZADO CON FOTOS",
      description: "¡Ideales para decorar cualquier lugar! Suave, decorativo y lleno de recuerdos.",
      price: "24.95€",
      oldPrice: "29.95€",
      badge: "¡TOP!",
      badgeVariant: "destructive" as const,
    },
    {
      image: cardsImage,
      altImage: cardsAltImage,
      title: "BARAJA DE CARTAS PERSONALIZADA CON FOTOS",
      description: "Transforma cada juego en una experiencia inolvidable! Cada carta cuenta tu historia.",
      price: "19.95€",
      oldPrice: "24.95€",
      badge: "¡Regalo!",
      badgeVariant: "default" as const,
    },
    {
      image: calendarImage,
      altImage: calendarAltImage,
      title: "CALENDARIO PERSONALIZADO CON FOTOS",
      description: "Organiza tu año con estilo! Cada mes una nueva foto para recordar momentos especiales.",
      price: "16.95€",
      oldPrice: "21.95€",
      badge: "¡Nuevo!",
      badgeVariant: "secondary" as const,
    },
    {
      image: magnetsImage,
      altImage: magnetsAltImage,
      title: "IMANES PERSONALIZADOS CON FOTOS",
      description: "Dale vida a tu refrigerador! Pequeños recuerdos magnéticos llenos de alegría.",
      price: "8.95€",
      oldPrice: "12.95€",
      badge: "¡Regalo!",
      badgeVariant: "default" as const,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ¡CREA REGALOS MEMORABLES!
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Productos personalizados que convierten tus momentos en arte
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <ProductCard {...product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="shadow-medium bg-background hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="shadow-medium bg-background hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 rounded-full font-semibold"
          >
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
