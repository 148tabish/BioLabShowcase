import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <i className="fas fa-flask"></i>
          BioLab Products
        </Link>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 p-4 md:p-0">
            <li>
              <Link href="/" className="text-text hover:text-primary font-medium block py-2 md:py-0">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vision" className="text-text hover:text-primary font-medium block py-2 md:py-0">
                Our Vision
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-text hover:text-primary font-medium block py-2 md:py-0">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-text hover:text-primary font-medium block py-2 md:py-0">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button 
            className="text-text p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
