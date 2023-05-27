import "./Thirdbox.css";

export default function Thirdbox({ num, active, val }) {
  return (
    <div
      className="thirdbox"
      style={
        num === String(active)
          ? { borderColor: "#74E6E9" }
          : { borderColor: "white" }
      }
    >
      <p
        className="thirdboxtext"
        style={
          num === String(active)
            ? { color: "rgba(0, 0, 0)" }
            : { color: "rgba(0, 0, 0, 0.5)" }
        }
      >
        {val}
      </p>
    </div>
  );
}
