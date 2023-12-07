import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import rightImg from "../../../assets/request.svg";
import { Container } from "../../ui/app-container/app-container";
import { RequestWrap } from "./request.styled";
export const Request = () => {
  return (
    <RequestWrap>
      <Container>
        <FlexibleDiv gap="4rem">
          <div className="right-box">
            <h3>
              <span>Request and Approval</span>
              <span>Management System</span>
            </h3>
            <p>
              Explore the incredible potential of international education by
              securing your students admission to prestigious universities
              abroad. Our comprehensive program equips
            </p>
          </div>
          <div className="left-img">
            <img src={rightImg} alt="..."></img>
          </div>
        </FlexibleDiv>
      </Container>
    </RequestWrap>
  );
};
