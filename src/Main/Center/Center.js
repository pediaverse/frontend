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
      {/* {back ? (
        <img src={threelines} alt="Three lines" className="threelines" />
      ) : null} */}
      <p className="dowhat">Do What You Love</p>
      <p className="dowhatdesc">
        Lectus velit sed at aliquam. Urna massa, aliquam mauris lobortis in
        luctus iaculis suspendisse libero.
      </p>
      <span className="seehow">
        <p className="seehowtext">See How</p>
      </span>
    </div>
  );
}
