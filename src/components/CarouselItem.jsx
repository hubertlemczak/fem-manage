const CarouselItem = ({ name, profilePic, review }) => {
  return (
    <div className="grid place-items-center gap-6 max-w-xs md:max-w-sm mx-auto">
      <div>
        <img src={profilePic} alt="" className="h-16 w-16" />
      </div>
      <p className="font-bold text-darkBlue">{name}</p>
      <p className="text-center text-veryLightGray">{review}</p>
    </div>
  );
};

export default CarouselItem;
