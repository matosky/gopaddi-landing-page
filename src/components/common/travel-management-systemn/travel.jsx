import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import rightImg from "../../../assets/travel.svg";
import { Container } from "../../ui/app-container/app-container";
import { TravelWrap } from "./travel.styled";

export const Travel = () => {
  return (
    <TravelWrap>
      <Container>
        <FlexibleDiv gap="4rem">
          <div>
          <h3>
              <span>Request and Approval</span>
              <span>Management System</span>
            </h3>
            <p>
              Explore the incredible potential of international education by
              securing your students admission to prestigious universities
              abroad.
            </p>
          </div>
          <div className="left-img">
            <img src={rightImg} alt="..."></img>
          </div>
        </FlexibleDiv>
      </Container>
    </TravelWrap>
  );
};
