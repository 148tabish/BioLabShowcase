import { Link } from "wouter";
import { type Product } from "@shared/schema";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-text mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-secondary rounded-lg p-4 hover:bg-secondary-dark transition-colors cursor-pointer">
              <div className="aspect-square rounded overflow-hidden mb-3">
                <img 
                  src={product.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt={product.name} 
                />
              </div>
              <h3 className="font-medium text-text text-sm">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
