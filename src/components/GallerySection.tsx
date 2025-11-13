import { useState } from "react";
import { Card } from "@/components/ui/card";
import printsImage from "@/assets/gallery-prints.jpg";
import albumsImage from "@/assets/gallery-albums.jpg";
import giftsImage from "@/assets/gallery-gifts.jpg";

const GallerySection = () => {
  const galleries = [
    {
      image: printsImage,
      altImage: albumsImage,
      title: "Impresiones que hablan",
      description: "Calidad profesional en cada impresión",
    },
    {
      image: albumsImage,
      altImage: giftsImage,
      title: "Álbumes y calendarios",
      description: "Organiza tus recuerdos con estilo",
    },
    {
      image: giftsImage,
      altImage: printsImage,
      title: "Regalos personalizados",
      description: "Sorprende con detalles únicos",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <p className="text-lg font-bold px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/50 text-primary">
              Nuestro Trabajo
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DISEÑO CREATIVO Y<br />FLYERS QUE IMPACTAN
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comunicación visual que marca la diferencia
          </p>
          <p className="text-lg text-muted-foreground italic mt-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            "Cada diseño cuenta tu historia de forma única"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {galleries.map((gallery, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <Card 
                key={index}
                className="group overflow-hidden hover-lift cursor-pointer border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={isHovered && gallery.altImage ? gallery.altImage : gallery.image} 
                    alt={gallery.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{gallery.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {gallery.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
