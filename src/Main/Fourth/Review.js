import "./Review.css";

export default function Review({
  height,
  width,
  rev,
  reviewer,
  top,
  left,
  active,
  setActive,
  id,
}) {
  const style1 = {
    height: height,
    width: width,
    paddingRight: width / 11,
    paddingLeft: width / 11,
    borderTopLeftRadius: width / 7.44,
    borderTopRightRadius: width / 7.44,
    borderBottomLeftRadius: width / 7.44,
    position: "absolute",
    top: top,
    left: left,
  };

  const style2 =
    active === id
      ? {
          borderColor: "rgba(114, 230, 255, 1)",
          borderStyle: "solid",
          borderWidth: 3,
        }
      : {};

  const combined = { ...style1, ...style2 };

  const click = () => {
    setActive(id);
  };
  return (
    <span className="review" style={combined} onClick={click}>
      <p style={{ fontSize: width / 21, margin: 0, marginBottom: 10 }}>{rev}</p>
      <p style={{ fontSize: width / 21, color: "grey", margin: 0 }}>
        {reviewer}
      </p>
    </span>
  );
}
