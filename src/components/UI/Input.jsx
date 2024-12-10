const Input = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  className,
  required,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 ${className}`}
    />
  );
};

export default Input;
