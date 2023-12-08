import appLogo from "../../../assets/paddi-header-logo.svg";
import { Container } from "../../ui/app-container/app-container";
import { Profile } from "../../ui/profile/profile";
import { NavBar } from "../navbar/navbar";
import { HeaderStyles } from "./header.styled";


export const Header = () => {
  return (
    <HeaderStyles>
      <Container>
        <div className="header-items">
          <div className="logo">
            <img src={appLogo} alt="logo" />
          </div>
          <NavBar />
          <Profile />
        </div>
      </Container>
    </HeaderStyles>
  );
};
