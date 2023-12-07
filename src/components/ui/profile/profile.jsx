import { FlexibleDiv } from "../flexible-div/flexible-div"
import { ProfileWrap } from "./profile.styled"

export const Profile = ()=>{
return (
    <ProfileWrap>
        <FlexibleDiv>
            <span>User</span>
            <span>Emanual</span>
            <span>arrow</span>
        </FlexibleDiv>
    </ProfileWrap>
)
}