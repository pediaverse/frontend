import "./Marker.css";

export default function Marker({ onClick, active, val }) {
  return (
    <span
      className="marker"
      style={
        String(active) === val
          ? { background: "#f8f8f8", borderColor: "#7DE8D3" }
          : { borderColor: "white" }
      }
      onClick={onClick}
    >
      <p
        className="markertext"
        style={
          String(active) === val ? { color: "#7DE8D3" } : { color: "white" }
        }
      >
        {val}
      </p>
    </span>
  );
}
