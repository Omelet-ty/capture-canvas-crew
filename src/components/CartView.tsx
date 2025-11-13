import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Trash2, Upload, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CartView = () => {
  const { items, removeFromCart, updateCartItem, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePhotoUpload = (itemId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateCartItem(itemId, { photo: reader.result as string });
        toast.success("Foto agregada al producto");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (itemId: string, color: string) => {
    updateCartItem(itemId, { color });
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Tu carrito está vacío");
      return;
    }
    navigate("/checkout", { state: { cartItems: items } });
  };

  if (items.length === 0) {
    return (
      <div className="mt-8 text-center text-muted-foreground">
        <ShoppingCart size={48} className="mx-auto mb-4 opacity-20" />
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-6">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex gap-4">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
              <p className="text-sm font-bold text-primary">
                {(item.price * item.quantity).toFixed(2)}€
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 size={18} />
            </Button>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor={`color-${item.id}`} className="flex items-center gap-2">
                <Palette size={16} />
                Color del producto
              </Label>
              <Input
                id={`color-${item.id}`}
                type="text"
                placeholder="Ej: Rosa, Azul, Rojo..."
                value={item.color || ""}
                onChange={(e) => handleColorChange(item.id, e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor={`photo-${item.id}`} className="flex items-center gap-2">
                <Upload size={16} />
                Subir tu foto
              </Label>
              <Input
                id={`photo-${item.id}`}
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(item.id, e)}
                className="mt-1"
              />
              {item.photo && (
                <div className="mt-2">
                  <img 
                    src={item.photo} 
                    alt="Vista previa" 
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-xs text-green-600 mt-1">✓ Foto agregada</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-primary">{getTotal().toFixed(2)}€</span>
        </div>

        <div className="space-y-2">
          <Button 
            className="w-full"
            size="lg"
            onClick={handleCheckout}
          >
            Proceder al Pago
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={clearCart}
          >
            Vaciar Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
