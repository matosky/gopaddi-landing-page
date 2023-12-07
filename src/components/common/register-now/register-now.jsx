import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import plane from "../../../assets/plane.svg";
import rightBgImg from "../../../assets/plane.svg";
import { Container } from "../../ui/app-container/app-container";
export const Register = () => {
  return (
    <FlexibleDiv>
      <Container>
        <FlexibleDiv>
        <div>
            <img src={plane} alt="..."></img>
          </div>
          <div className="register-box">
            <img src={rightBgImg} alt="..."></img>
          </div>
        </FlexibleDiv>
      </Container>
    </FlexibleDiv>
  );
};
