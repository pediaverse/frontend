import "./Center.css";
// import threelines from "./threelines.svg";

export default function Center({ back }) {
  return (
    <div
      className="centermain"
      style={
        back
          ? {
              background: "linear-gradient(to bottom,#f6f5fe,#ebeffc)",
              paddingTop: 70,
              paddingBottom: 170,
            }
          : null
      }
    >
      {back ? (
        <p className="dowhat">Do What You Love</p>
      ) : (
        <p className="dowhat">Learn What You Love</p>
      )}
      <p className="dowhatdesc">Transpire, Trigger, Thrive and Triumph.</p>
      <span className="seehow">
        <p className="seehowtext">See How</p>
      </span>
    </div>
  );
}
