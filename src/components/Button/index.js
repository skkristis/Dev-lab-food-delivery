import "./index.css";

function Button({
  classArray = [],
  id = null,
  children,
  type = "button",
  onClick = null,
}) {
  const className = ["Button", ...classArray].join(" ");

  return (
    <button onClick={onClick} className={className} id={id} type={type}>
      {children}
    </button>
  );
}

export default Button;
