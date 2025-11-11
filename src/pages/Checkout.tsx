import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity, total } = location.state || {};
  
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      navigate("/order-confirmation", {
        state: { product, quantity, total }
      });
    }, 1500);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted;
  };

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
        <h1 className="text-5xl font-black text-center mb-12" style={{ fontFamily: 'Impact, sans-serif' }}>
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            FINALIZAR COMPRA
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="p-6 space-y-6 h-fit">
            <h2 className="text-2xl font-bold border-b pb-4">Resumen del Pedido</h2>
            
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
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-semibold">{(product?.price * quantity).toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Descuento:</span>
                <span className="font-semibold text-green-600">
                  -{(product?.price * quantity - parseFloat(total)).toFixed(2)}€
                </span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 border-t">
                <span>Total:</span>
                <span className="text-primary">{total}€</span>
              </div>
            </div>
          </Card>

          {/* Payment Form */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Pago Seguro</h2>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                    required
                  />
                  <CreditCard className="absolute right-3 top-3 text-muted-foreground" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                <Input
                  id="cardName"
                  placeholder="NOMBRE APELLIDO"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value.toUpperCase())}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Fecha Expiración</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/AA"
                    value={expiry}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '');
                      if (value.length >= 2) {
                        value = value.slice(0, 2) + '/' + value.slice(2, 4);
                      }
                      setExpiry(value);
                    }}
                    maxLength={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                    maxLength={3}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full gradient-vibrant text-white hover:opacity-90 transition-all shadow-glow-primary text-xl py-6 rounded-full font-bold mt-8"
              >
                <Lock className="mr-2" size={20} />
                Confirmar Pago {total}€
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                🔒 Tu información está protegida con encriptación SSL
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
