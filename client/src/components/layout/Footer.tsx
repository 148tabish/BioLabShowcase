export default function Footer() {
  return (
    <footer className="bg-text py-8 text-white mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BioLab Products</h3>
            <p className="text-sm text-gray-300">
              Providing high-quality laboratory products for research professionals worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product Categories</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Research Peptides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Laboratory Equipment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Analytical Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Reference Materials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shipping Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>info@biolabproducts.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Science Park, Research City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} BioLab Products. All rights reserved. For research purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
