import { FlexibleDiv } from "../flexible-div/flexible-div"
import { ProfileWrap } from "./profile.styled"
import user from "../../../assets/user.svg"

import { FaChevronDown } from "react-icons/fa"
export const Profile = ()=>{
return (
    <ProfileWrap>
        <FlexibleDiv>
            <div className="img">
              <img src={user} alt="..."/>
            </div>
            <span>Emanual</span>
            
            <FaChevronDown />
        </FlexibleDiv>
    </ProfileWrap>
)
}