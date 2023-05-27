import Header from "./Header/Header";
import BackgroundShapes from "./BackgroundShapes.svg";
import "./Main.css";
import Center from "./Center/Center";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Footer from "./Footer/Footer";

export default function Main() {
  return (
    <div className="main">
      <img
        src={BackgroundShapes}
        alt="Background"
        className="backgroundshapes"
      />
      <Header></Header>
      <Center back={false}></Center>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Center back={true}></Center>
      <Footer></Footer>
    </div>
  );
}
