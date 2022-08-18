import Button from './Button';

const SimplifySection = () => {
  return (
    <section className="bg-brightRed py-12">
      <div className="px-5 container mx-auto md:flex justify-between lg:max-w-5xl">
        <h2 className="px-3 text-center text-4xl font-bold text-white mb-5 max-w-xs mx-auto leading-snug md:mx-0 md:max-w-md md:text-left">
          Simplify how your team works today.
        </h2>
        <div className="flex justify-center">
          <Button buttonType="inverted" className="self-center">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SimplifySection;
