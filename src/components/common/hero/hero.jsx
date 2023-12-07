import { HeroWrap } from "./hero.styled";
import HeroImage from "../../../assets/hero-right.svg";
import { Container } from "../../ui/app-container/app-container";
import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import Button from "../../ui/button/button";
export const Hero = () => {
  return (
    <HeroWrap>
      <Container>
        <div className="hero">
          <FlexibleDiv justify="space-between">
            <div className="hero-text">
              <h1>
                <span>GoBusiness</span>
                <div className="">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
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
          </FlexibleDiv>
        </div>
      </Container>
    </HeroWrap>
  );
};
