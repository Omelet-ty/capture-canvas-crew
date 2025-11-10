import { Camera, Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="text-primary" size={32} />
              <span className="text-2xl font-bold">Estudio Fotográfico</span>
            </div>
            <p className="text-background/80 mb-4">
              Capturamos momentos, creamos recuerdos inolvidables y convertimos tus fotografías en arte.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="text-primary" size={16} fill="currentColor" />
              <span className="text-background/70">Imprimiendo la vida local</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Tu Ciudad, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span>hola@estudiofotografico.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Nuestros Servicios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Galería</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-semibold"
                >
                  Ver en GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>© 2024 Estudio Fotográfico. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado con 💙 y creatividad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
