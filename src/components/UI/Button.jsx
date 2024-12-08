const Button = ({ type, children, className }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
