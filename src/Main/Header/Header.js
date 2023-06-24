import Logo from "../../Logo/Logo";
import "./Header.css";
import HeaderComp from "./HeaderComp";
import Trial from "./Trial";
import HamburgerButton from "../../Components/Hamburger";
import HeaderComp2 from "./HeaderComp2";
import Trial2 from "./Trial2";
import { useState } from "react";



export default function Header() {
  const [headeractive, setHeaderactive] = useState(false);
  const redirectToUrl = () => {
  window.location.href = "https://forms.gle/NM3CtWdFQg2uxr7C6";
}
  const works = () => {
    const section = document.getElementById("thirdsection");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
    setHeaderactive(false);
  };

  const about = () => {
    const section = document.getElementById("secondsection");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
    setHeaderactive(false);
  };
  const mobilefunc = () => {
    if (headeractive) {
      setHeaderactive(false);
    } else {
      setHeaderactive(true);
    }
  };
  console.log(window.innerWidth);
  return (
    <div>
      <div className="headermain">
        <div className="logoheader">
          <Logo></Logo>
        </div>
        <div className="headercompflex">
          <HeaderComp val="About Us" onClick={about}></HeaderComp>
          <HeaderComp val="How it Works" onClick={works}></HeaderComp>
          <HeaderComp 
          onClick={redirectToUrl}
          val="Contact Us"></HeaderComp>
          <Trial></Trial>
          <HamburgerButton onClick={mobilefunc}></HamburgerButton>
        </div>
      </div>
      {headeractive ? (
        <div className="dropdown">
          <HeaderComp2 val="About Us" onClick={about}></HeaderComp2>
          <HeaderComp2 val="How it Works" onClick={works}></HeaderComp2>
          <HeaderComp2 val="Contact Us"></HeaderComp2>
          <Trial2></Trial2>
        </div>
      ) : null}
    </div>
  );
}
