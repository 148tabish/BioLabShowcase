import { Link } from "wouter";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-text mb-6">Terms & Privacy Policy</h1>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-text">Terms of Use</h2>
          <div className="space-y-4 text-text-light">
            <p>
              Welcome to the BioLab Products website. By accessing and using this website, you accept and agree 
              to be bound by the terms and provisions of this agreement. These terms apply to all visitors, 
              users, and others who access or use the website.
            </p>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Product Usage</h3>
            <p>
              All products sold by BioLab Products are intended for laboratory research use only. Our products 
              are not for human use or consumption, veterinary use, household use, or for use in diagnostic 
              procedures. Products should only be handled by qualified and properly trained professionals.
            </p>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Intellectual Property</h3>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to the Site 
              are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, 
              redistribution, use, or publication by you of any such matters or any part of the Site is 
              strictly prohibited without our express prior written permission.
            </p>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Limitation of Liability</h3>
            <p>
              BioLab Products shall not be liable for any special or consequential damages that result from 
              the use of, or the inability to use, the materials on this site or the performance of the 
              products, even if BioLab Products has been advised of the possibility of such damages.
            </p>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-text">Privacy Policy</h2>
          <div className="space-y-4 text-text-light">
            <p>
              BioLab Products is committed to protecting your privacy. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Information We Collect</h3>
            <p>
              We may collect information about you in a variety of ways. The information we may collect 
              via the website includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <span className="font-medium">Personal Data:</span> When you contact us or purchase products, 
                we collect personally identifiable information, such as your name, email address, shipping 
                address, and telephone number.
              </li>
              <li>
                <span className="font-medium">Technical Data:</span> Information about your browser type, 
                IP address, time zone, and the pages you visit on our site.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Use of Your Information</h3>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, 
              and customized experience. Specifically, we may use information collected about you via the 
              website to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Process orders and send information about your transactions.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>Send you technical notices, updates, and support messages.</li>
              <li>Deliver targeted advertising, newsletters, and promotions.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
            </ul>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Cookies</h3>
            <p>
              We use cookies to collect information about your browsing patterns and preferences. 
              Cookies are small data files that are stored on your device and allow us to recognize 
              you when you return to our website. You can set your browser to refuse all or some 
              browser cookies, but this may prevent you from accessing certain parts of our website.
            </p>
            
            <h3 className="text-lg font-medium text-text mt-6 mb-2">Third-Party Disclosure</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information 
              to outside parties except as described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                We may share your information with trusted third parties who assist us in operating 
                our website, conducting our business, or servicing you, so long as those parties 
                agree to keep this information confidential.
              </li>
              <li>
                We may release your information when we believe release is appropriate to comply 
                with the law, enforce our site policies, or protect ours or others' rights, property, 
                or safety.
              </li>
            </ul>
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
  );
}