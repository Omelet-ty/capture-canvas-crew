import { Button } from "@/components/ui/button";
import { Camera, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-collage.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero">
        <img 
          src={heroImage} 
          alt="Collage de momentos felices capturados en fotografías" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-primary animate-float">
        <Camera size={60} className="opacity-20" />
      </div>
      <div className="absolute bottom-32 right-16 text-secondary animate-float-delayed">
        <Heart size={50} className="opacity-20" />
      </div>
      <div className="absolute top-40 right-32 text-accent animate-float">
        <Sparkles size={40} className="opacity-20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-primary/20">
          <Camera className="text-primary" size={20} />
          <span className="text-sm font-medium text-primary">Estudio Fotográfico Profesional</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ¡CAPTURA, CREA Y VIVE
          </span>
          <br />
          <span className="text-foreground">
            TUS MEJORES MOMENTOS! 💙📸
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Convierte cada instante en un recuerdo inolvidable. <br className="hidden md:block" />
          Personaliza tus fotos, imprime tus emociones y comparte tu historia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-vibrant text-white hover:opacity-90 transition-all shadow-glow-primary text-lg px-8 py-6 rounded-full font-semibold"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            Explora nuestras creaciones
            <Sparkles className="ml-2" size={20} />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6 rounded-full font-semibold"
          >
            Ver servicios
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          ✨ Imprime todas tus fotos favoritas con entrega en tienda gratis en pocos días
        </p>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" fillOpacity="0.9"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
