import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar as CalendarIcon, Package } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity, total } = location.state || {};
  
  const orderNumber = `FP${Date.now().toString().slice(-8)}`;
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  
  const [date] = useState<Date | undefined>(deliveryDate);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-8">
            <NavLink to="/" className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FOTOPRIX
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Message */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-6 shadow-glow-primary">
            <CheckCircle size={60} className="text-white" />
          </div>
          
          <h1 className="text-5xl font-black mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ¡COMPRA EXITOSA!
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">
            Tu pedido ha sido procesado correctamente
          </p>
          <p className="text-lg font-semibold text-primary">
            Número de pedido: {orderNumber}
          </p>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <Package className="text-primary" size={28} />
              <h2 className="text-2xl font-bold">Detalles del Pedido</h2>
            </div>
            
            <div className="flex gap-4">
              <img 
                src={product?.image} 
                alt={product?.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-sm">{product?.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Cantidad: {quantity}</p>
                <p className="text-sm text-muted-foreground">Precio unitario: {product?.price}€</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between text-xl font-bold">
                <span>Total Pagado:</span>
                <span className="text-primary">{total}€</span>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm font-semibold text-primary mb-2">📦 Estado del Pedido</p>
              <p className="text-sm">En preparación</p>
            </div>
          </Card>

          {/* Delivery Calendar */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3 border-b pb-4">
              <CalendarIcon className="text-primary" size={28} />
              <h2 className="text-2xl font-bold">Fecha de Entrega</h2>
            </div>
            
            <p className="text-muted-foreground">
              Tu pedido estará listo para recoger en:
            </p>
            
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                className="rounded-md border shadow-md"
                modifiers={{
                  delivery: [deliveryDate]
                }}
                modifiersStyles={{
                  delivery: {
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'white',
                    fontWeight: 'bold'
                  }
                }}
              />
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 text-center">
              <p className="font-bold text-lg text-primary">
                {deliveryDate.toLocaleDateString('es-ES', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                🎉 Recogida gratuita en tienda
              </p>
            </div>
          </Card>
        </div>

        {/* Confirmation Message */}
        <Card className="p-8 text-center bg-gradient-to-r from-background to-muted/50">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ¡Gracias por confiar en Fotoprix!
          </h3>
          <p className="text-muted-foreground mb-6">
            Recibirás un email de confirmación con todos los detalles de tu pedido.
            <br />
            Te notificaremos cuando tu producto esté listo para recoger.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/")}
              className="gradient-vibrant text-white hover:opacity-90 transition-all shadow-glow-primary px-8 rounded-full font-semibold"
            >
              Volver al inicio
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 rounded-full font-semibold"
            >
              Ver más productos
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;
