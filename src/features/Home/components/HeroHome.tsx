import heroImage from "../../../assets/images/home/hero-home-image.png";
import heroA11Image from "../../../assets/images/home/A-11.png";
import heroA12Image from "../../../assets/images/home/A-12.png";
import heroA21Image from "../../../assets/images/home/A-21.png";
import heroA41Image from "../../../assets/images/home/A-41.png";
import heroA51Image from "../../../assets/images/home/A-51.png";
import { Button } from "../../../ui/index";

export const HeroHome = () => {
  return (
    <>
      <div className="hero-home">
        <div className="hero-text">
          <h1>Once upon a fall</h1>
          <p>Step into a season of flavor and fantasy. We’ve combined fall favorites like pumpkin spice, matcha, apple, chai, and more to create a lineup of drinks inspired by iconic fairy tales.</p>
        </div>
        <div className="hero-image">
          <img src={ heroImage } alt=""/>
          <img src={ heroA11Image } alt="" className="hero-a11"/>
          <img src={ heroA12Image } alt="" className="hero-a12"/>
          <img src={ heroA21Image } alt="" className="hero-a21"/>
          <img src={ heroA41Image } alt="" className="hero-a41"/>
          <img src={ heroA51Image } alt="" className="hero-a51"/>
        </div>
      </div>

      <div className="hero-buttons">
        <Button />
        <Button />
      </div>
    </>
  )
}
