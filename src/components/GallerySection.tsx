import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import printsImage from "@/assets/gallery-prints.jpg";
import albumsImage from "@/assets/gallery-albums.jpg";
import giftsImage from "@/assets/gallery-gifts.jpg";

const GallerySection = () => {
  const galleries = [
    {
      image: printsImage,
      title: "Impresiones que Hablan",
      description: "Fotografías impresas en diversos formatos premium",
    },
    {
      image: albumsImage,
      title: "Álbumes y Calendarios",
      description: "Tus momentos organizados con estilo y creatividad",
    },
    {
      image: giftsImage,
      title: "Regalos Personalizados",
      description: "Ideas únicas que transmiten amor y creatividad",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-2 rounded-full mb-6">
            <Sparkles className="text-accent" size={20} />
            <span className="text-sm font-medium text-accent-foreground">Nuestro Trabajo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              EXPERIENCIA VISUAL
            </span>
            <br />
            Y ARTE FOTOGRÁFICO
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Fotografía que emociona, arte que perdura
          </p>
          
          <p className="text-lg text-primary font-semibold italic">
            "Tu historia merece ser contada con luz y color"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {galleries.map((item, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover-lift cursor-pointer border-2 border-border/50 hover:border-accent/50 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            📸 Descubre todo nuestro portafolio y servicios
          </p>
          <Button 
            size="lg"
            className="gradient-vibrant text-white hover:opacity-90 transition-all shadow-glow-accent px-8 rounded-full font-semibold"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            Ver nuestro trabajo completo en GitHub
            <Sparkles className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
