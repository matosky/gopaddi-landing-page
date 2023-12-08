import { FlexibleDiv } from "../flexible-div/flexible-div";
import { ProfileWrap } from "./profile.styled";
import user from "../../../assets/user.svg";

import { FaChevronDown } from "react-icons/fa";
export const Profile = () => {
  return (
    <ProfileWrap>
      <div className="img">
        <img src={user} alt="..." />
      </div>
      <span>Emmanuel</span>
      <FaChevronDown className="icon" />
    </ProfileWrap>
  );
};
