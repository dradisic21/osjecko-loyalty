import "../styles/Button.scss";

export function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
      {props.name}
    </button>
  );
}
