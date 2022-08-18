import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Hamburger } from '../assets/images/icon-hamburger.svg';
import Button from './Button';

const Navbar = () => {
  return (
    <header className="py-14">
      <nav className="flex justify-between items-center container mx-auto xl:max-w-7xl">
        <Logo />
        <ul className="hidden gap-8 font-bold text-sm lg:flex">
          <li className="cursor-pointer hover:text-darkGrayishBlue">Pricing</li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">Product</li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">
            About Us
          </li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">Careers</li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">
            Community
          </li>
        </ul>
        <Button>Get Started</Button>
        <Hamburger className="lg:hidden cursor-pointer">borgir</Hamburger>
      </nav>
    </header>
  );
};

export default Navbar;