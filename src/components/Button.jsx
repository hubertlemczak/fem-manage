const Button = ({ otherProps, children, className }) => {
  return (
    <button
      className={`lg:flex py-3 px-6 bg-brightRed rounded-3xl text-white font-bold text-xs hover:bg-brightRedLight ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
