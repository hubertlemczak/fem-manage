const Button = ({ otherProps, children }) => (
  <button
    className="hidden lg:flex py-3 px-6 bg-brightRed rounded-3xl text-white font-bold text-xs hover:bg-brightRedLight"
    {...otherProps}
  >
    {children}
  </button>
);
export default Button;
