import "./Second.css";
import rocket from "./rocket.svg";
import Heading from "../../Components/Heading";

export default function Second() {
  return (
    <div className="second" id="secondsection">
      <Heading val={"What is Pediaverse?"}></Heading>
      <div className="secondbox">
        <p className="secondboxtext">
          Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer
          lacus sed amet massa pulvinar orci, hendrerit enim consequat.Lacinia
          mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed
          amet massa pulvinar orci, hendrerit enim consequat.
        </p>
        <img className="rocketimage" src={rocket} alt="Rocket" />
      </div>
    </div>
  );
}
