import { Link } from "wouter";
import { useEffect } from "react";
export default function VisionPage() {
      useEffect(() => {
   window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-text mb-6">Our Vision</h1>
        
        <div className="mb-10">
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
              alt="Laboratory vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex items-center">
              <div className="p-8 max-w-md">
                <h2 className="text-2xl font-bold text-white mb-2">Advancing Research Together</h2>
                <p className="text-white/90 text-sm">
                  Supporting scientific breakthroughs with premium quality products and services
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-text-light mb-4">
            At BioLab Products, our vision is to be at the forefront of supporting scientific discovery 
            and innovation in the UK and beyond. We strive to provide researchers with the highest quality 
            laboratory products that contribute to groundbreaking advancements in health, biotechnology, 
            and pharmaceutical sciences.
          </p>
          
          <p className="text-text-light mb-4">
            We envision a future where our products play a crucial role in developing new treatments, 
            understanding complex biological systems, and improving quality of life through scientific progress.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-text">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-flask text-xl"></i>
                </div>
                <h3 className="font-medium text-lg text-text">Scientific Excellence</h3>
              </div>
              <p className="text-text-light">
                We uphold the highest standards of scientific integrity in all our products. 
                Our commitment to excellence drives us to continually refine our processes 
                and improve our formulations.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <h3 className="font-medium text-lg text-text">Quality Assurance</h3>
              </div>
              <p className="text-text-light">
                We implement rigorous quality control measures to ensure that every product meets 
                the precise specifications researchers require. Nothing leaves our facility 
                without thorough testing and verification.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h3 className="font-medium text-lg text-text">Innovation</h3>
              </div>
              <p className="text-text-light">
                We stay at the cutting edge of research developments to anticipate the needs of 
                scientists. Our dedication to innovation helps us develop new products that 
                address emerging research challenges.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <h3 className="font-medium text-lg text-text">Partnership</h3>
              </div>
              <p className="text-text-light">
                We view our relationship with researchers as a partnership. By understanding 
                the specific needs of our customers, we can provide tailored solutions and 
                support that advance their important work.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-text">Looking to the Future</h2>
          <p className="text-text-light mb-4">
            As we continue to grow, we remain committed to expanding our product range to meet the 
            evolving needs of the scientific community. We invest in research and development to 
            create innovative solutions that help researchers overcome challenges and accelerate discovery.
          </p>
          <p className="text-text-light mb-4">
            Our UK-based facilities are continuously being upgraded with advanced technology and 
            equipment to enhance our capabilities and maintain our position as a leading supplier 
            of research products.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/">
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}