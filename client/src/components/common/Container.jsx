export default function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`container-page ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
