import { Camera, Phone, Mail, MapPin, Facebook, Instagram, Twitter, CreditCard } from "lucide-react";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="text-primary" size={32} />
              <h3 className="text-3xl font-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  FOTOPRIX
                </span>
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Capturamos momentos, creamos recuerdos inolvidables y convertimos tus fotografías en arte.
            </p>
            <p className="text-primary font-semibold italic text-sm">
              Imprimiendo la vida local
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-300 hover:text-primary transition-colors">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Av. Principal 123, Tu Ciudad, España</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <span>hola@fotoprix.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Nuestros Servicios
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Galería
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Promociones
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal & Payment */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ayuda & Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  Envíos y Entregas
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <p className="text-xs text-slate-400 mb-3">Métodos de pago:</p>
              <div className="flex flex-wrap gap-2">
                <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <CreditCard size={16} className="text-primary" />
                </div>
                <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">VISA</span>
                </div>
                <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary">MC</span>
                </div>
                <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">PP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © 2024 Fotoprix. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Diseñado con 
              <span className="text-primary">♥</span> 
              por <span className="text-primary font-semibold">Thory Vera</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
