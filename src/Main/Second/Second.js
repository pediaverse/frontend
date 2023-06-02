import "./Second.css";
import rocket from "./rocket.svg";
import Heading from "../../Components/Heading";

export default function Second() {
  return (
    <div className="second" id="secondsection">
      <Heading val={"What is Pediaverse?"}></Heading>
      <div className="secondbox">
        <p className="secondboxtext">
          We are welcoming you to the new Era of Learning. “Learn from failures
          “ No more Failures to learn. Our platform is dedicated to unlocking
          and cultivating your child's talents right from the start. We
          understand the importance of providing consistent guidance and support
          to help your little one develop their skills and explore their full
          potential. Accompany your child on their journey towards finding their
          true calling, based on their unique set of abilities.
        </p>
        <img className="rocketimage" src={rocket} alt="Rocket" />
      </div>
    </div>
  );
}
