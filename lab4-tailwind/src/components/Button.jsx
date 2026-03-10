export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  disabled,
  ...props 
}) {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
    ghost: "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={`
        rounded-lg font-medium transition-all active:scale-95 
        ${variants[variant] || variants.primary} 
        ${sizes[size] || sizes.md} 
        ${disabled ? "opacity-50 cursor-not-allowed active:scale-100" : ""} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
