import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import rightImg from "../../../assets/travel.svg";
import { Container } from "../../ui/app-container/app-container";
export const Travel = () => {
  return (
    <FlexibleDiv>
      <Container>
        <FlexibleDiv>
          <div>
            <h3>Travel Expense Management System</h3>
            <p>
              Explore the incredible potential of international education by
              securing your students admission to prestigious universities
              abroad.
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
