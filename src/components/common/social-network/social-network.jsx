import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import rightImg from "../../../assets/social.svg";
import { Container } from "../../ui/app-container/app-container";
export const Social = () => {
  return (
    <FlexibleDiv>
      <Container>
        <FlexibleDiv>
          <div>
            <img src={rightImg} alt="..."></img>
          </div>
          <div>
            <h3>Connect: Your Coperate Social Network</h3>
            <p>
              Explore the incredible potential of international education by
              securing your students admission to prestigious universities
              abroad.
            </p>
          </div>
        </FlexibleDiv>
      </Container>
    </FlexibleDiv>
  );
};
