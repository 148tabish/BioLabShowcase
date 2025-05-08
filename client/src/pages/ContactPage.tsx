import { Link } from "wouter";
import { useEffect } from "react";
export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-text mb-6">Contact Us</h1>

        <div className="mb-8">
          <p className="text-text-light mb-4">
            If you have any questions about our products or would like to
            request a quote, please don't hesitate to contact us using the
            information below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-text">Email</h3>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <a
                  href="mailto:info@biolabproducts.com"
                  className="text-primary hover:underline"
                >
                  info@biolabproducts.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-text">Phone</h3>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-primary hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-text">Hours</h3>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div className="text-text-light">
                  <div>Monday - Friday: 9:00 AM - 5:00 PM GMT</div>
                  <div>Saturday - Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-text">
              UK Headquarters
            </h3>
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div className="text-text-light">
                <p>123 Science Park</p>
                <p>Research City, RC4 2LP</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-text-light italic">
                For research inquiries and bulk orders, please contact our sales
                team directly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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
