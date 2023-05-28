import "./CSkill.css";

export default function CSkill(props) {
  return (
    <div className="skill">
      <img className="skillimage" src={props.img} alt={"Icon"} />
      <p className="skillname">{props.val}</p>
    </div>
  );
}
