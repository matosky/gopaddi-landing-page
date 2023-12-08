import { FlexibleDiv } from "../../ui/flexible-div/flexible-div";
import plane from "../../../assets/plane.svg";
import cloud from "../../../assets/cloud.svg";
import img from "../../../assets/register-right.svg";

import { Container } from "../../ui/app-container/app-container";
import { RegisterWrap } from "./register-now.styled";
import Button from "../../ui/button/button";

export const Register = () => {
  return (
    <RegisterWrap>
        <img className="cloud1 cloudImg" src={cloud} alt="..." />
        <img className="cloud2 cloudImg" src={cloud} alt="..." />
        <img className="cloud3 cloudImg" src={cloud} alt="..." />
        <img className="cloud4 cloudImg" src={cloud} alt="..." />
        <img className="cloud5 cloudImg" src={cloud} alt="..." />
        <img className="cloud6 cloudImg" src={cloud} alt="..." />
        <div className="register-box">
           <div className="fixed-line" />
           <img className="plane" src={plane} alt="..." />
           <img  src={img} alt="..." />
           <div className="text">
             <h3>
             Register Now and Enjoy these Benefits! 
             </h3>
             <div className="button">
              <Button text={"Get Started"} />
             </div>
           </div>
        </div>
    </RegisterWrap>
  );
};
