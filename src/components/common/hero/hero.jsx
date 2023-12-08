import { HeroWrap } from "./hero.styled";
import HeroImage from "../../../assets/hero-right.svg";
import Button from "../../ui/button/button";
export const Hero = () => {
  return (
    <HeroWrap>
        <div className="hero">
            <div className="hero-text">
              <h1>
                <span>
                  GoBusines
                  <span className="dot-s">
                    s
                    <div className="dots">
                      <span className="dot1"></span>
                      <span className="dot2"></span>
                      <span className="dot3"></span>
                    </div>
                  </span>
                </span>
              </h1>
              <h3>Go Global with GoBusiness</h3>
              <p>
                Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem
                facilis eum iusto eligendi eum magnam voluptas et perspiciatis
                sequi qui molestiae nostrum
              </p>
              <Button text={"Sign Up"} />
            </div>
            <div className="hero-img">
              <img src={HeroImage} alt="heroimg" />
            </div>
        </div>
    </HeroWrap>
  );
};
