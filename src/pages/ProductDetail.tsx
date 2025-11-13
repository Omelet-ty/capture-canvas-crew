import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
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

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = location.state?.product || {
    image: mugImage,
    altImage: mugAltImage,
    title: "TAZA BÁSICA PERSONALIZADA CON FOTOS",
    description: "Resistente, bonita, colorida y muy divertida! Tu foto favorita en cada sorbo.",
    price: 11.95,
    oldPrice: 15.95,
    badge: "¡Regalo!",
  };

  const images = [product.image, product.altImage];

  const relatedProducts = [
    {
      image: puzzleImage,
      altImage: puzzleAltImage,
      title: "PUZZLES PERSONALIZADOS",
      description: "¡Diviértete con los puzzles más personales y exclusivos!",
      price: "29.95€",
      oldPrice: "35.95€",
      badge: "¡Nuevo!",
      badgeVariant: "secondary" as const,
    },
    {
      image: cushionImage,
      altImage: cushionAltImage,
      title: "COJÍN PERSONALIZADO CON FOTOS",
      description: "¡Ideales para decorar cualquier lugar!",
      price: "24.95€",
      oldPrice: "29.95€",
      badge: "¡TOP!",
      badgeVariant: "destructive" as const,
    },
    {
      image: cardsImage,
      altImage: cardsAltImage,
      title: "BARAJA DE CARTAS PERSONALIZADA",
      description: "Transforma cada juego en una experiencia inolvidable!",
      price: "19.95€",
      oldPrice: "24.95€",
      badge: "¡Regalo!",
      badgeVariant: "default" as const,
    },
    {
      image: calendarImage,
      altImage: calendarAltImage,
      title: "CALENDARIO PERSONALIZADO CON FOTOS",
      description: "Organiza tu año con estilo!",
      price: "16.95€",
      oldPrice: "21.95€",
      badge: "¡Nuevo!",
      badgeVariant: "secondary" as const,
    },
  ];

  const calculateTotal = () => {
    let discount = 0;
    if (quantity >= 10) discount = 0.25;
    else if (quantity >= 5) discount = 0.15;
    else if (quantity >= 3) discount = 0.1;

    return (product.price * quantity * (1 - discount)).toFixed(2);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.title,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: quantity,
    });
    
    toast.success(`${quantity} ${product.title} agregado${quantity > 1 ? 's' : ''} al carrito`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-2 border-border/50">
              <img 
                src={images[selectedImage]} 
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </Card>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <Card 
                  key={idx}
                  className={`cursor-pointer overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-border/50'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-32 object-cover" />
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.badge && (
              <Badge className="text-base px-4 py-2">{product.badge}</Badge>
            )}
            
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {product.title}
            </h1>
            
            <p className="text-lg text-muted-foreground">{product.description}</p>
            
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-primary">{product.price}€</span>
              {product.oldPrice && (
                <span className="text-2xl text-muted-foreground line-through">{product.oldPrice}€</span>
              )}
            </div>

            {/* Quantity Selector */}
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>Cantidad</h3>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={20} />
                </Button>
                <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={20} />
                </Button>
              </div>
              
              {/* Promotional Pricing */}
              <div className="space-y-2 pt-4 border-t">
                <h4 className="font-semibold text-primary">¡Promociones especiales!</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>🎁 Compra 3+ unidades: 10% descuento</li>
                  <li>🎁 Compra 5+ unidades: 15% descuento</li>
                  <li>🎁 Compra 10+ unidades: 25% descuento</li>
                </ul>
              </div>
            </Card>

            {/* Total */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Total:</span>
                <span className="text-4xl font-black text-primary">{calculateTotal()}€</span>
              </div>
            </Card>

            <Button 
              size="lg"
              className="w-full gradient-vibrant text-white hover:opacity-90 transition-all shadow-glow-primary text-xl py-8 rounded-full font-bold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2" size={24} />
              Agregar al Carrito
            </Button>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              OTROS PRODUCTOS CON FOTOS IMPRESAS
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct, idx) => (
              <div key={idx} onClick={() => navigate("/product", { state: { product: { ...relProduct, price: parseFloat(relProduct.price.replace('€', '')) } } })}>
                <ProductCard {...relProduct} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
