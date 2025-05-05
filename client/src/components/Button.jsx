const Button = ({
  type = 'button',
  variant = 'filled',
  size = 'md',
  fullWidth = false,
  radius = 'md',
  children,
  ...props
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 hover:cursor-pointer flex items-center justify-center gap-2';

  const variants = {
    primaryFilled: 'bg-violet-600 text-white hover:bg-violet-500',
    primaryOutlined: 'bg-white border border-violet-600 text-violet-600 hover:bg-gray-50 hover:text-violet',
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
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${radiusClasses[radius] || radius} ${widthClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
