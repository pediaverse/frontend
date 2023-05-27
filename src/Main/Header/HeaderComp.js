import "./HeaderComp.css";

export default function HeaderComp({ val, onClick }) {
  return (
    <div>
      <span className="text" onClick={onClick}>
        {val}
      </span>
    </div>
  );
}
