import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Upload, Scissors, Wand2, X } from "lucide-react";
import Header from "@/components/Header";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const PhotoCustomization = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [selectedSize, setSelectedSize] = useState("11x15");
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [paperType, setPaperType] = useState("mate");
  const [projectName, setProjectName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState("none");
  const [cropMode, setCropMode] = useState(false);
  const [showSizeConfig, setShowSizeConfig] = useState(false);
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const product = location.state?.product;

  const sizes = [
    { value: "9x13", label: "9x13 cm", price: 0.70 },
    { value: "10x15", label: "10x15 cm", price: 0.75 },
    { value: "11x15", label: "11x15 cm", price: 0.80 },
    { value: "13x13", label: "13x13 cm", price: 0.85 },
    { value: "13x18", label: "13x18 cm", price: 0.90 },
    { value: "15x15", label: "15x15 cm", price: 0.95 },
    { value: "15x20", label: "15x20 cm", price: 1.00 },
    { value: "20x20", label: "20x20 cm", price: 1.20 },
    { value: "personalizado", label: "Personalizado", price: 1.50 },
  ];

  const colorPalette = [
    "#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF",
    "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080",
    "#FFC0CB", "#A52A2A", "#808080", "#FFD700", "#C0C0C0",
  ];

  const filters = [
    { name: "none", label: "Sin Filtro" },
    { name: "grayscale", label: "Blanco y Negro" },
    { name: "sepia", label: "Sepia" },
    { name: "brightness", label: "Brillo" },
    { name: "contrast", label: "Contraste" },
    { name: "vintage", label: "Vintage" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          // Initialize crop area to center
          setCropArea({
            x: img.width / 4,
            y: img.height / 4,
            width: img.width / 2,
            height: img.height / 2,
          });
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFilter = (ctx: CanvasRenderingContext2D, filterName: string) => {
    if (filterName === "grayscale") {
      ctx.filter = "grayscale(100%)";
    } else if (filterName === "sepia") {
      ctx.filter = "sepia(100%)";
    } else if (filterName === "brightness") {
      ctx.filter = "brightness(1.2)";
    } else if (filterName === "contrast") {
      ctx.filter = "contrast(1.3)";
    } else if (filterName === "vintage") {
      ctx.filter = "sepia(50%) contrast(1.1) brightness(1.1)";
    } else {
      ctx.filter = "none";
    }
  };

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = 600;
        canvas.height = 600;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        applyFilter(ctx, filter);
        
        if (cropMode) {
          // Draw full image
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          
          // Draw overlay
          ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Clear crop area
          const scaleX = canvas.width / image.width;
          const scaleY = canvas.height / image.height;
          ctx.clearRect(
            cropArea.x * scaleX,
            cropArea.y * scaleY,
            cropArea.width * scaleX,
            cropArea.height * scaleY
          );
          
          // Redraw image in crop area
          applyFilter(ctx, filter);
          ctx.drawImage(
            image,
            cropArea.x,
            cropArea.y,
            cropArea.width,
            cropArea.height,
            cropArea.x * scaleX,
            cropArea.y * scaleY,
            cropArea.width * scaleX,
            cropArea.height * scaleY
          );
          
          // Draw crop border
          ctx.strokeStyle = "#ff6b35";
          ctx.lineWidth = 3;
          ctx.strokeRect(
            cropArea.x * scaleX,
            cropArea.y * scaleY,
            cropArea.width * scaleX,
            cropArea.height * scaleY
          );
        } else {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
      }
    }
  }, [image, filter, cropMode, cropArea]);

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!cropMode || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    const imgScaleX = canvas.width / image!.width;
    const imgScaleY = canvas.height / image!.height;
    
    // Check if click is inside crop area
    if (
      x >= cropArea.x * imgScaleX &&
      x <= (cropArea.x + cropArea.width) * imgScaleX &&
      y >= cropArea.y * imgScaleY &&
      y <= (cropArea.y + cropArea.height) * imgScaleY
    ) {
      setIsDragging(true);
      setDragStart({ x: x / imgScaleX - cropArea.x, y: y / imgScaleY - cropArea.y });
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || !canvasRef.current || !image) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    const imgScaleX = canvas.width / image.width;
    const imgScaleY = canvas.height / image.height;
    
    let newX = x / imgScaleX - dragStart.x;
    let newY = y / imgScaleY - dragStart.y;
    
    // Constrain to image bounds
    newX = Math.max(0, Math.min(newX, image.width - cropArea.width));
    newY = Math.max(0, Math.min(newY, image.height - cropArea.height));
    
    setCropArea(prev => ({ ...prev, x: newX, y: newY }));
  };

  const handleCanvasMouseUp = () => {
    setIsDragging(false);
  };

  const updateCropSize = () => {
    if (!image) return;
    
    let width, height;
    
    if (selectedSize === "personalizado") {
      width = parseInt(customWidth) || 100;
      height = parseInt(customHeight) || 100;
    } else {
      const [w, h] = selectedSize.split("x").map(Number);
      width = w * 10;
      height = h * 10;
    }
    
    // Calculate scaled dimensions while maintaining aspect ratio
    const aspectRatio = width / height;
    const imageAspect = image.width / image.height;
    
    let newWidth, newHeight;
    
    if (aspectRatio > imageAspect) {
      newWidth = Math.min(width * 5, image.width * 0.8);
      newHeight = newWidth / aspectRatio;
    } else {
      newHeight = Math.min(height * 5, image.height * 0.8);
      newWidth = newHeight * aspectRatio;
    }
    
    setCropArea(prev => ({
      x: (image.width - newWidth) / 2,
      y: (image.height - newHeight) / 2,
      width: newWidth,
      height: newHeight,
    }));
  };

  const calculatePrice = () => {
    const sizeData = sizes.find(s => s.value === selectedSize);
    let basePrice = sizeData?.price || 1.50;
    
    if (selectedSize === "personalizado") {
      const area = (parseInt(customWidth) || 10) * (parseInt(customHeight) || 10);
      basePrice = 0.01 * area;
    }
    
    return (basePrice * quantity).toFixed(2);
  };

  const handleAddToCart = () => {
    if (!image) {
      toast.error("Por favor, sube una foto primero");
      return;
    }
    
    if (!projectName.trim()) {
      toast.error("Por favor, ingresa un nombre para el proyecto");
      return;
    }
    
    // Create final canvas with crop and filter
    const finalCanvas = document.createElement("canvas");
    const ctx = finalCanvas.getContext("2d");
    if (ctx) {
      finalCanvas.width = cropArea.width;
      finalCanvas.height = cropArea.height;
      applyFilter(ctx, filter);
      ctx.drawImage(
        image,
        cropArea.x,
        cropArea.y,
        cropArea.width,
        cropArea.height,
        0,
        0,
        cropArea.width,
        cropArea.height
      );
      
      const finalImage = finalCanvas.toDataURL();
      
      addToCart({
        id: `${product?.title}-${Date.now()}`,
        title: product?.title || "Foto Personalizada",
        image: finalImage,
        price: parseFloat(calculatePrice()) / quantity,
        quantity: quantity,
        color: paperType,
        photo: projectName,
      });
      
      toast.success("Producto agregado al carrito");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Personaliza tu Foto</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Editor Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <Label htmlFor="photo-upload" className="flex items-center gap-2 cursor-pointer">
                <Upload size={20} />
                Subir Foto
              </Label>
              <Input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </Card>

            {image && (
              <>
                <Card className="p-6">
                  <canvas
                    ref={canvasRef}
                    className="w-full border-2 border-border rounded cursor-move"
                    onMouseDown={handleCanvasMouseDown}
                    onMouseMove={handleCanvasMouseMove}
                    onMouseUp={handleCanvasMouseUp}
                    onMouseLeave={handleCanvasMouseUp}
                  />
                </Card>

                <Card className="p-6 space-y-4">
                  <div className="flex gap-2">
                    <Button
                      variant={cropMode ? "default" : "outline"}
                      onClick={() => {
                        setCropMode(!cropMode);
                        setShowSizeConfig(!showSizeConfig);
                      }}
                      className="flex-1"
                    >
                      <Scissors className="mr-2" size={18} />
                      {cropMode ? "Aplicar Recorte" : "Recortar Foto"}
                    </Button>
                  </div>

                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Wand2 size={18} />
                      Filtros
                    </Label>
                    <div className="grid grid-cols-3 gap-2">
                      {filters.map((f) => (
                        <Button
                          key={f.name}
                          variant={filter === f.name ? "default" : "outline"}
                          onClick={() => setFilter(f.name)}
                          size="sm"
                        >
                          {f.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>
              </>
            )}
          </div>

          {/* Configuration Section */}
          <div className="space-y-6">
            {showSizeConfig && (
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Configuración de Recorte</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Formatos</Label>
                    <RadioGroup value={selectedSize} onValueChange={(value) => {
                      setSelectedSize(value);
                      if (value !== "personalizado") {
                        setTimeout(updateCropSize, 100);
                      }
                    }}>
                      {sizes.map((size) => (
                        <div key={size.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={size.value} id={size.value} />
                          <Label htmlFor={size.value} className="flex-1 cursor-pointer">
                            {size.label} - {size.price}€
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {selectedSize === "personalizado" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="custom-width">Ancho (cm)</Label>
                          <Input
                            id="custom-width"
                            type="number"
                            value={customWidth}
                            onChange={(e) => setCustomWidth(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="custom-height">Alto (cm)</Label>
                          <Input
                            id="custom-height"
                            type="number"
                            value={customHeight}
                            onChange={(e) => setCustomHeight(e.target.value)}
                          />
                        </div>
                      </div>
                      <Button 
                        onClick={updateCropSize}
                        className="w-full"
                        variant="outline"
                      >
                        Aplicar Dimensiones Personalizadas
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            )}

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Detalles del Producto</h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Color del Producto</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {colorPalette.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded border-2 transition-all ${
                          selectedColor === color ? "border-primary scale-110 shadow-lg" : "border-border hover:scale-105"
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Color seleccionado: {selectedColor}</p>
                </div>

                <div>
                  <Label htmlFor="paper-type">Tipo de Papel</Label>
                  <RadioGroup value={paperType} onValueChange={setPaperType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mate" id="mate" />
                      <Label htmlFor="mate" className="cursor-pointer">Mate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="brillante" id="brillante" />
                      <Label htmlFor="brillante" className="cursor-pointer">Brillante</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="project-name">Nombre del Proyecto</Label>
                  <Input
                    id="project-name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Ej: Vacaciones 2024"
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Cantidad: {quantity}</Label>
                  <Slider
                    id="quantity"
                    min={1}
                    max={100}
                    step={1}
                    value={[quantity]}
                    onValueChange={(value) => setQuantity(value[0])}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">Total:</span>
                <span className="text-4xl font-black text-primary">{calculatePrice()}€</span>
              </div>
              
              <div className="space-y-2">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!image}
                >
                  Agregar al Carrito
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate(-1)}
                >
                  Cancelar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCustomization;
