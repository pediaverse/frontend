import "./Fifth.css";
import Heading from "../../Components/Heading";
import CSkill from "./CSkill";
import bulb from "./bulb.svg";
import collab from "./collab.svg";
import communication from "./communication.svg";
import critical from "./Critical.svg";

export default function Fifth() {
  return (
    <div className="fifth">
      <Heading val="The 4C Skills"></Heading>
      <div className="skills">
        <div className="skillrow">
          <CSkill
            img={critical}
            val={"Critical And Structured Thinking"}
          ></CSkill>
          <CSkill img={bulb} val={"Creativity"}></CSkill>
        </div>
        <div className="skillrow">
          <CSkill img={collab} val={"Collaborative Attitude"}></CSkill>
          <CSkill img={communication} val={"Communication In English"}></CSkill>
        </div>
      </div>
    </div>
  );
}
