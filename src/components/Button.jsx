const Button = ({ otherProps, children, className, buttonType }) => {
  const buttonTypes = {
    inverted:
      'bg-white text-brightRed hover:text-brightRedLight hover:bg-white',
  };

  return (
    <button
      className={`py-3 px-6  rounded-3xl font-bold text-xs lg:flex  ${className} ${
        buttonTypes[buttonType] ??
        'bg-brightRed text-white hover:bg-brightRedLight'
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
