import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={`${product.name} product`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-text mb-2">{product.name}</h2>
        <p className="text-text-light text-sm mb-4 flex-grow">{product.shortDescription}</p>
        <Link href={`/product/${product.id}`}>
          <button className="text-primary font-medium flex items-center gap-1 hover:text-primary-light mt-auto">
            View Details
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </Link>
      </CardContent>
    </Card>
  );
}
