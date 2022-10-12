import Button from './Button';
import Carousel from './Carousel';

const UserReviews = () => {
  return (
    <section className="">
      <h2 className="text-center text-4xl font-bold text-darkBlue mb-5">
        What they've said
      </h2>
      <Carousel />
      <div className="flex justify-center mb-40">
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default UserReviews;
