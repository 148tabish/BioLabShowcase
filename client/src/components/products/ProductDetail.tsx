import { Link } from "wouter";
import { type Product } from "@shared/schema";
import RelatedProducts from "./RelatedProducts";

interface ProductDetailProps {
  product: Product;
  onContactClick: () => void;
  relatedProducts: Product[];
}

export default function ProductDetail({ product, onContactClick, relatedProducts }: ProductDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-primary hover:text-primary-light inline-flex items-center">
                <i className="fas fa-home mr-1"></i>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-text-light mx-2 text-xs"></i>
                <span className="text-text-light">{product.category}</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-text-light mx-2 text-xs"></i>
                <span className="text-text">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={`${product.name} product image`} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
              <div className="ml-4 text-text-light text-sm">
                Product ID: <span>BL-{product.id.toString().padStart(5, '0')}</span>
              </div>
            </div>
            <p className="text-text-light mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-text mb-2">Key Features</h3>
              <ul className="list-disc pl-5 text-text-light space-y-1">
                <li>99.9% purity guaranteed</li>
                <li>Validated by HPLC testing</li>
                <li>Suitable for research purposes only</li>
                <li>Available in multiple quantities</li>
                <li>Stable in laboratory conditions</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-text mb-2">Specifications</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-text-light">Format:</div>
                <div className="text-text">Lyophilized Powder</div>
                <div className="text-text-light">Storage:</div>
                <div className="text-text">-20°C</div>
                <div className="text-text-light">Shipping:</div>
                <div className="text-text">Ambient Temperature</div>
                <div className="text-text-light">Usage:</div>
                <div className="text-text">Research Only</div>
              </div>
            </div>
            
            <button 
              onClick={onContactClick}
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              Inquire About This Product
            </button>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
