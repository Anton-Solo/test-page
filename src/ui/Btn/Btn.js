import "./btn.scss";

export const Btn = ({ className, title, onClick }) => {
  return (
    <button className={`btn ${className ?? className}`} onClick={onClick}>
      <span className="btn-title">{title}</span>
    </button>
  );
};
