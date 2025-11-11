import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  altImage?: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const ProductCard = ({ 
  image, 
  altImage,
  title, 
  description, 
  price, 
  oldPrice,
  badge,
  badgeVariant = "default"
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden hover-lift cursor-pointer border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {badge && (
          <Badge 
            className="absolute top-4 left-4 z-10 font-semibold px-3 py-1"
            variant={badgeVariant}
          >
            {badge}
          </Badge>
        )}
        <img 
          src={isHovered && altImage ? altImage : image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-3">
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              desde {oldPrice}
            </span>
          )}
          <span className="text-2xl font-bold text-primary">
            {price}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
