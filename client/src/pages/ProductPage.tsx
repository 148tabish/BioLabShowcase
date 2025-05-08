import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductDetail from "@/components/products/ProductDetail";
import ContactModal from "@/components/products/ContactModal";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export default function ProductPage() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/product/:id");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { toast } = useToast();

  const productId = match ? parseInt(params.id) : 0;

  const { data: product, isLoading: productLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${productId}`],
    enabled: !!productId,
  });

  const { data: allProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Get 4 related products from the same category
  const relatedProducts = allProducts
    .filter(p => p.id !== productId && p.category === product?.category)
    .slice(0, 4);

  // If we need more to make 4, add others
  if (relatedProducts.length < 4) {
    const otherProducts = allProducts
      .filter(p => p.id !== productId && p.category !== product?.category)
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...otherProducts);
  }

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const handleContactConfirm = () => {
    setContactModalOpen(false);
    toast({
      title: "Inquiry Sent",
      description: `Your inquiry about ${product?.name} has been sent. We'll contact you soon.`,
    });
  };

  if (error || (!productLoading && !product)) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Product Not Found</h1>
          <p className="text-text-light mb-6">
            Sorry, the product you are looking for does not exist or has been removed.
          </p>
          <button
            onClick={() => setLocation("/")}
            className="text-primary font-medium flex items-center gap-2 hover:text-primary-light"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  if (productLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Skeleton className="h-6 w-48" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-80 w-full rounded-lg" />
            <div>
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-6" />
              <Skeleton className="h-6 w-1/2 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-6" />
              <Skeleton className="h-10 w-full mt-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProductDetail 
        product={product!} 
        onContactClick={handleContactClick} 
        relatedProducts={relatedProducts}
      />
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        productName={product?.name || ""} 
        onConfirm={handleContactConfirm}
      />
    </>
  );
}
