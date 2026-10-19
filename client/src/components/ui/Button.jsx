
const variants = {
  primary:
    "bg-[#1f6b54] text-white hover:bg-[#195640]",

  secondary:
    "bg-[#eaf3ed] text-[#16211d] hover:bg-[#dcebe0]",

  outline:
    "border border-[#1f6b54] bg-transparent text-[#1f6b54] hover:bg-[#eaf3ed]",
};

const sizes = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-[13px]",
  lg: "px-6 py-3.5 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-[7px] font-semibold
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#1f6b54] focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
