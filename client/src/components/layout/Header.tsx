import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <i className="fas fa-flask"></i>
          BioLab Products
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-text hover:text-primary font-medium">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="text-text hover:text-primary font-medium">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-text hover:text-primary font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-text hover:text-primary font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-text p-2">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
