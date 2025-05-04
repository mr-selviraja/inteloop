const Button = ({
  variant = 'filled',
  size = 'md',
  fullWidth = false,
  radius = 'md',
  children,
  ...props
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 hover:cursor-pointer flex items-center justify-center gap-2';

  const variants = {
    primaryFilled: 'bg-teal-500 text-white hover:bg-teal-600',
    primaryOutlined: 'bg-white border border-teal-500 text-teal-500 hover:bg-gray-50 hover:text-teal',
    filled: 'bg-gray-900 text-white hover:bg-gray-700',
    outlined: 'border border-gray-500 text-gray-500 hover:bg-gray-50 hover:text-gray',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-3',
    lg: 'text-lg px-6 py-4',
  };

  const radiusClasses = {
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${radiusClasses[radius] || radius} ${widthClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
