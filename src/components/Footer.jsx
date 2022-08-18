import { ReactComponent as Logo } from '../assets/images/logo-white.svg';
import { ReactComponent as Facebook } from '../assets/images/icon-facebook.svg';
import { ReactComponent as YouTube } from '../assets/images/icon-youtube.svg';
import { ReactComponent as Twitter } from '../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../assets/images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../assets/images/icon-instagram.svg';
import Button from './Button';

const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <footer className="bg-veryDarkBlue py-12 relative">
      <div className="relative px-5 container mx-auto lg:max-w-5xl md:flex md:flex-row-reverse md:justify-between">
        <form className="flex justify-center gap-3" onSubmit={handleSubmit}>
          <input
            className="rounded-full outline-none px-3 py-2 placeholder:text-sm self-start"
            type="email"
            name="inbox"
            id="inbox"
            placeholder="Updates in your inbox..."
            required
          />
          <label htmlFor="inbox">
            <Button>GO</Button>
          </label>
        </form>
        <ul className="flex flex-wrap leading-8 max-w-xs mx-auto pl-10 my-10 text-left text-white md:m-0 md:p-0 md:ml-10 lg:ml-20">
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              Home
            </span>
          </li>
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              Careers
            </span>
          </li>
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              Pricing
            </span>
          </li>
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              Community
            </span>
          </li>
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              Products
            </span>
          </li>
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              Privacy Policy
            </span>
          </li>
          <li className="basis-1/2 w-fit">
            <span className="cursor-pointer hover:text-darkGrayishBlue">
              About Us
            </span>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center gap-10 md:flex-col-reverse md:justify-between">
          <div className="flex gap-10 md:gap-3">
            <Facebook className="scale-125 md:scale-100 cursor-pointer fill-white hover:fill-brightRedLight" />
            <YouTube className="scale-125 md:scale-100 cursor-pointer fill-white hover:fill-brightRedLight" />
            <Twitter className="scale-125 md:scale-100 cursor-pointer fill-white hover:fill-brightRedLight" />
            <Pinterest className="scale-125 md:scale-100 cursor-pointer fill-white hover:fill-brightRedLight" />
            <Instagram className="scale-125 md:scale-100 cursor-pointer fill-white hover:fill-brightRedLight" />
          </div>
          <Logo />
        </div>
        <span className="text-gray-500 flex justify-center text-xs mt-10 md:absolute right-5 bottom-0">
          Copyright 2022. All Rights Reserved
        </span>
      </div>
      <div
        className="absolute bottom-3 right-1/2 translate-x-1/2 text-darkGrayishBlue opacity-50 text-center"
        style={{ fontSize: '10px' }}
      >
        <span>Challenge by </span>
        <a
          className="text-white"
          href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5"
          target="_blank"
          rel="noreferrer noopener"
        >
          Frontend Mentor
        </a>
        <span>. Coded by Hubert Lemczak.</span>
      </div>
    </footer>
  );
};

export default Footer;
