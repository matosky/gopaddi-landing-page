import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import rightImg from "../../../assets/request.svg";
import { Container } from "../../ui/app-container/app-container";
export const Request = () => {
  return (
    <FlexibleDiv>
      <Container>
        <FlexibleDiv>
          <div>
            <h3>Request and Approval Management System</h3>
            <p>
              Explore the incredible potential of international education by
              securing your students admission to prestigious universities
              abroad. Our comprehensive program equips
            </p>
          </div>
          <div>
            <img src={rightImg} alt="..."></img>
          </div>
        </FlexibleDiv>
      </Container>
    </FlexibleDiv>
  );
};
