import "./Center.css";
// import threelines from "./threelines.svg";

const redirectToUrl = () => {
  window.location.href =
    "https://drive.google.com/file/d/1acTjK899-QdrbgmzJVCSZ6LA_ncyoqWb/view?usp=sharing";
}

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

      <span className="seehow"
        onClick={redirectToUrl}
        >
          <p className="seehowtext">See How</p>
      </span>
    </div>
  );
}
