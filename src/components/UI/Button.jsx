const Button = ({ type, children, className }) => {
  return (
    <button
      type={type}
      className={`bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
