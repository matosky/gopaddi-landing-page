import { Container } from "../../ui/app-container/app-container";
import { UltimateWrap } from "./ultimate-product.styled";
import UltimateRight from "../../../assets/ultimate-right-bg.svg";
import UltimateLeft from "../../../assets/ultimate-left.svg";
import UltimateStripe from "../../../assets/ultimate-stripes.svg";
import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
export const UlimateProducts = () => {
  return (
    <UltimateWrap>
      <Container>
          <div className="box-wrap">
          <div className="left">
            <img className="left-img" src={UltimateLeft} alt="..." />
          </div>
          <div className="right">
            <div className="fixed-bg">
              <img className="right-img-bg" src={UltimateRight} alt="..." />
            </div>
            <div className="utimate-desc">
              <div className="text-wrap">
                <h3>
                  <span>Your Ultimate Travel Products</span>
                  <span> Destination For Organizations.</span>
                </h3>
                <p>
                  Explore the incredible potential of international education by
                  securing your students admission to prestigious universities
                  abroad. Our comprehensive program equips
                </p>
              </div>
            </div>
          </div>
          </div>
      </Container>
      <div className="stripe">
        <img className="right-img-stripe" src={UltimateStripe} alt="..." />
      </div>
    </UltimateWrap>
  );
};
