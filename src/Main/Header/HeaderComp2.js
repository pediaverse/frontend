import "./HeaderComp2.css";

export default function HeaderComp2({ val, onClick }) {
  return (
    <div>
      <span className="text2" onClick={onClick}>
        {val}
      </span>
    </div>
  );
}
