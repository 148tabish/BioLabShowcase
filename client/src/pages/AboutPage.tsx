import { Link } from "wouter";
import { useEffect } from "react";
export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-text mb-6">
            About BioLab Products
          </h1>

          <div className="mb-8">
            <p className="text-text-light mb-4">
              BioLab Products is a leading provider of high-quality laboratory
              research products based in the United Kingdom. Since our
              establishment in 2005, we have been committed to supporting
              scientific research and development with our premium range of
              peptides, research compounds, and laboratory equipment.
            </p>

            <p className="text-text-light mb-4">
              Our team consists of experienced scientists and industry
              professionals who understand the importance of reliable research
              materials. We work closely with leading research institutions and
              laboratories across the UK and Europe to ensure our products meet
              the highest standards of quality and purity.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-text">
              Our Commitment to Quality
            </h2>
            <p className="text-text-light mb-4">
              At BioLab Products, quality is our highest priority. Each product
              undergoes rigorous testing and quality control processes to ensure
              consistency, purity, and reliability. Our advanced testing methods
              include HPLC, mass spectrometry, and NMR analysis to verify the
              exact composition and structure of our compounds.
            </p>

            <div className="bg-secondary p-4 rounded-lg italic text-text-light my-6">
              "Our mission is to accelerate scientific discovery by providing
              researchers with the highest quality laboratory products and
              exceptional customer service."
            </div>

            <p className="text-text-light">
              We maintain strict quality management systems and our facility
              operates according to industry best practices. Our commitment to
              excellence has made us a trusted partner for research
              institutions, universities, and pharmaceutical companies
              throughout the UK.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6 text-text">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-medium text-lg text-text mb-2">
                Research & Development
              </h3>
              <p className="text-text-light mb-4">
                Our R&D team consists of PhD-level scientists with extensive
                experience in peptide synthesis, analytical chemistry, and
                molecular biology. They continuously work to expand our product
                range and improve existing formulations.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg text-text mb-2">
                Quality Assurance
              </h3>
              <p className="text-text-light mb-4">
                Our dedicated QA team ensures that every product meets our
                strict quality standards. They conduct thorough testing and
                documentation to certify the purity and identity of each batch
                we produce.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg text-text mb-2">
                Customer Support
              </h3>
              <p className="text-text-light mb-4">
                Our knowledgeable customer support team is available to assist
                with technical questions, product selection, and order
                inquiries. They work closely with our scientists to provide
                expert guidance on product applications.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg text-text mb-2">Operations</h3>
              <p className="text-text-light mb-4">
                Our operations team ensures efficient order processing, careful
                packaging, and prompt delivery of products. They maintain our
                inventory and handle logistics to provide a seamless experience
                for our customers.
              </p>
            </div>
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
    </div>
  );
}
