import "./Third.css";
import Heading from "../../Components/Heading";
import Marker from "./Marker";
import { useState } from "react";
import Thirdbox from "./Thirdbox";
import { useSwipeable } from "react-swipeable";

export default function Third() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipeLeft = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  const handleSwipeRight = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });
  return (
    <div className="third" id="thirdsection">
      <Heading val="How it Works?"></Heading>
      <div className="thirdmarker">
        <Marker
          val="1"
          active={activeIndex + 1}
          onClick={() => {
            setActiveIndex(0);
          }}
        ></Marker>
        <div className="line"></div>
        <Marker
          val="2"
          active={activeIndex + 1}
          onClick={() => {
            setActiveIndex(1);
          }}
        ></Marker>
        <div className="line"></div>
        <Marker
          val="3"
          active={activeIndex + 1}
          onClick={() => {
            setActiveIndex(2);
          }}
        ></Marker>
      </div>
      <div className="thirdboxes">
        <Thirdbox
          num="1"
          active={activeIndex + 1}
          val="Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed amet massa pulvinar orci, hendrerit enim c"
        ></Thirdbox>
        <Thirdbox
          num="2"
          active={activeIndex + 1}
          val="Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed amet massa pulvinar orci, hendrerit enim c"
        ></Thirdbox>
        <Thirdbox
          num="3"
          active={activeIndex + 1}
          val="Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed amet massa pulvinar orci, hendrerit enim c"
        ></Thirdbox>
      </div>
      <div {...swipeHandlers} className="mobilethirdboxes">
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100%",
              display: activeIndex === 0 ? "block" : "none",
              height: 400,
            }}
          >
            <Marker
              val="1"
              active={activeIndex + 1}
              onClick={() => {
                setActiveIndex(0);
              }}
            ></Marker>
            <Thirdbox
              num="1"
              active={activeIndex + 1}
              val="Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed amet massa pulvinar orci, hendrerit enim c"
            ></Thirdbox>
          </div>
          <div
            style={{
              width: "100%",
              display: activeIndex === 1 ? "block" : "none",
              height: 400,
            }}
          >
            <Marker
              val="2"
              active={activeIndex + 1}
              onClick={() => {
                setActiveIndex(1);
              }}
            ></Marker>
            <Thirdbox
              num="2"
              active={activeIndex + 1}
              val="Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed amet massa pulvinar orci, hendrerit enim c"
            ></Thirdbox>
          </div>
          <div
            style={{
              width: "100%",
              display: activeIndex === 2 ? "block" : "none",
              height: 400,
            }}
          >
            <Marker
              val="3"
              active={activeIndex + 1}
              onClick={() => {
                setActiveIndex(2);
              }}
            ></Marker>
            <Thirdbox
              num="3"
              active={activeIndex + 1}
              val="Lacinia mi sit in massa nisi id fermentum tincidunt neque. Integer lacus sed amet massa pulvinar orci, hendrerit enim c"
            ></Thirdbox>
          </div>
        </div>
      </div>
    </div>
  );
}
