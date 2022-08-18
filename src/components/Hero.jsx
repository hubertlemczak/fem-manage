import Button from './Button';
import HeroSVG from '../assets/images/illustration-intro.svg';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse  justify-between items-center mb-20 md:mt-10 md:flex-row">
      <div className="max-w-sm lg:max-w-md flex md:block flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold text-darkBlue md:text-left lg:text-5xl mb-8">
          Bring everyone together to build better products.
        </h1>
        <p className="px-5 md:px-0 text-center md:text-left mb-8 max-w-xs mx-auto md:mx-0 ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="">
        <img src={HeroSVG} alt="" />
      </div>
    </section>
  );
};

export default Hero;
