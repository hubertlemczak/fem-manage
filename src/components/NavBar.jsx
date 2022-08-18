import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import Button from './Button';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleMenu = () => {
    if (menuIsOpen) {
      setFadeOut(true);
    } else {
      setMenuIsOpen(true);
    }
  };
  return (
    <header className="py-14">
      <nav className="flex justify-between items-center ">
        <Logo
          className="cursor-pointer"
          style={{ fill: '#242D52' }}
          fill="#242D52"
        />
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
        <Button className="hidden lg:flex">Get Started</Button>
        <div
          className={`hamburger relative flex flex-col gap-1.5 lg:hidden cursor-pointer z-20 `}
          onClick={toggleMenu}
        >
          <span
            className={`${
              menuIsOpen && 'nav-menu-open-one'
            } w-6 h-0.5 bg-black ${fadeOut && 'fade-out-one'}`}
          ></span>
          <span
            className={`${
              menuIsOpen && 'nav-menu-open-two'
            } w-6 h-0.5 bg-black`}
          ></span>
          <span
            className={`${
              menuIsOpen && 'nav-menu-open-three'
            } w-6 h-0.5 bg-black ${fadeOut && 'fade-out-three'}`}
            onAnimationEnd={e => {
              if (e.animationName === 'threeB') {
                setFadeOut(false);
                setMenuIsOpen(false);
              }
            }}
          ></span>
        </div>
        {menuIsOpen && (
          <>
            <div className="duration-500 fixed inset-0 bg-gradient-to-b from-gray-50 to-black opacity-60 cursor-default"></div>
            <ul
              className={`animation-menu fixed z-10 px-28 py-20 bg-white rounded-md font-bold text-center space-y-3 ${
                fadeOut && 'nav-fade-out'
              }`}
            >
              <li className="cursor-pointer hover:text-darkGrayishBlue">
                Pricing
              </li>
              <li className="cursor-pointer hover:text-darkGrayishBlue">
                Product
              </li>
              <li className="cursor-pointer hover:text-darkGrayishBlue">
                About Us
              </li>
              <li className="cursor-pointer hover:text-darkGrayishBlue">
                Careers
              </li>
              <li className="cursor-pointer hover:text-darkGrayishBlue">
                Community
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
