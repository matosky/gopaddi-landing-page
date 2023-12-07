import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import rightImg from "../../../assets/social.svg";
import { Container } from "../../ui/app-container/app-container";
import { SocialWrap } from "./social-network.styled";

export const Social = () => {

  return (
    <SocialWrap>
      <Container>
        <FlexibleDiv gap="4rem">
          <div className="left-img">
            <img src={rightImg} alt="..."/>
          </div>
          <div>
            <h3><span>Connect:</span> Your Coperate Social Network</h3>
            <p>
              Explore the incredible potential of international education by
              securing your students admission to prestigious universities
              abroad.
            </p>
          </div>
        </FlexibleDiv>
      </Container>
    </SocialWrap>
  );
};
