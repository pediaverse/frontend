import "./Fourth.css";
import Heading from "../../Components/Heading";
import Review from "./Review";
import { useState } from "react";

function Fourth() {
  const [active, setActive] = useState(1);
  return (
    <div className="fourth" id="fourthsection">
      <Heading val="What our users say."></Heading>
      <div className="fourthreviewbox">
        <div className="marquee">
          <Review
            active={active}
            setActive={setActive}
            id={1}
            width={408}
            height={160}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={212}
            left={134}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={2}
            width={217}
            height={90}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={158}
            left={1116}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={3}
            width={144}
            height={60}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={97}
            left={761}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={4}
            width={247}
            height={103}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={267}
            left={658}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={5}
            width={217}
            height={91}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={397}
            left={1018}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={6}
            width={408}
            height={160}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={488}
            left={468}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={7}
            width={320}
            height={134}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={474}
            left={-42}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={8}
            width={237}
            height={99}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={695}
            left={194}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={9}
            width={144}
            height={60}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={745}
            left={799}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={10}
            width={237}
            height={99}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={603.5}
            left={1100}
          ></Review>
          <Review
            active={active}
            setActive={setActive}
            id={11}
            width={237}
            height={99}
            rev="Pediaverse helped me to find my passion."
            reviewer="-Jibran, Student"
            top={68}
            left={-72}
          ></Review>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
