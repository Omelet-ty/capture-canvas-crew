import { Card } from "@/components/ui/card";
import { Camera, Heart, Sparkles, Image, Gift, Calendar } from "lucide-react";

const AboutSection = () => {
  const products = [
    { icon: Camera, title: "Impresiones Premium", color: "text-primary" },
    { icon: Gift, title: "Regalos Personalizados", color: "text-secondary" },
    { icon: Image, title: "Álbumes Fotográficos", color: "text-accent" },
    { icon: Calendar, title: "Calendarios Creativos", color: "text-primary" },
    { icon: Heart, title: "Decoración Fotográfica", color: "text-secondary" },
    { icon: Sparkles, title: "Productos Exclusivos", color: "text-accent" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 text-primary/10 animate-float">
        <Camera size={120} />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/10 animate-float-delayed">
        <Heart size={100} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-5xl font-black leading-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Con FOTOPRIX,
              </span>
              <br />
              <span className="text-foreground">
                tus fotos serán aún más especiales
              </span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Fotoprix</strong> es tu estudio fotográfico de confianza donde transformamos momentos en recuerdos tangibles que duran para siempre.
              </p>
              
              <p>
                Desde hace años, nos especializamos en crear productos fotográficos personalizados de alta calidad. Ya sea que busques imprimir tus fotos favoritas, diseñar regalos únicos o decorar tu hogar con tus mejores recuerdos, estamos aquí para hacer realidad tus ideas.
              </p>
              
              <p>
                Nuestro compromiso es ofrecerte la mejor calidad de impresión, materiales premium y un servicio excepcional. Cada producto es cuidadosamente elaborado con atención al detalle para garantizar que tus fotos luzcan espectaculares.
              </p>

              <p className="font-semibold text-primary italic">
                "Imprimiendo la vida local - Tus recuerdos, nuestra pasión"
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover-lift cursor-pointer border-2 border-border/50 hover:border-primary/50 transition-all duration-300 text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`${product.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-sm group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Badge */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
            <p className="text-lg font-semibold">
              <span className="text-primary">✓</span> Calidad fotográfica profesional
              <span className="mx-4">•</span>
              <span className="text-secondary">✓</span> Entrega rápida y gratuita
              <span className="mx-4">•</span>
              <span className="text-accent">✓</span> Garantía de satisfacción
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
