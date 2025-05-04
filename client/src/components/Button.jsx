const Button = ({ variant = 'filled', children, ...props }) => {
    const baseStyles = 'px-4 py-2 rounded font-medium transition-colors duration-200 hover:cursor-pointer';

    const variants = {
      primaryFilled: 'bg-teal-500 text-white hover:bg-teal-600',
      primaryOutlined: 'bg-white border border-teal-500 text-teal-500 hover:bg-gray-50 hover:text-teal',
      filled: 'bg-gray-900 text-white hover:bg-gray-700',
      outlined: 'border border-gray-500 text-gray-500 hover:bg-gray-50 hover:text-gray',
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]}`} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
  