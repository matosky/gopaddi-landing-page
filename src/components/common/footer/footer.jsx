import React from "react";
import { Input } from "../../ui/input/input";
import { FooterWrap } from "./footer.styled";
import map from "../../../assets/map.svg";
import { Container } from "../../ui/app-container/app-container";
import appLogo from "../../../assets/logo-white.svg";

const links = [
  {
    label: "Home",
    url: "/",
    // icon: faHome,
  },
  {
    label: "Solutions",
    url: "/about",
    // icon: faInfoCircle,
  },
  {
    label: "Products",
    url: "/contact",
    // icon: faEnvelope,
  },
  {
    label: "Company",
    url: "/contact",
  },
];

function Links({ title, links }) {
  return (
    <ul>
      <h5>{title}</h5>
      {links.map((link, index) => (
        <li key={index}>{link.label}</li>
      ))}
    </ul>
  );
}

export const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <div className="top">
          <div className="logo">
            <img src={appLogo} alt="logo" />
          </div>
        </div>
        <div className="bottom">
          <div className="column first-column">
            <p>
              Gopaddi is a travel network that connects and strengthens people’s
              relationships with a world of beautiful, happy people who are able
              to reach out for their dreams and be who they want to be.
            </p>
            <p>
              This network is a community of individuals, families, and
              organisations who have chosen to take control of their travel
              desires and freely explore a world of limitless possibilities.
            </p>
          </div>
          <div className="column second-column">
            <Links title="Quick Links" links={links} />
          </div>
          <div className="column third-column">
            <Links title="Other Links" links={links} />
          </div>
          <div className="column fourth-column">
            <Links title="Business Links" links={links} />
          </div>
          <div className="column last-column">
            <h5>Subscribe to Our Newsletter</h5>
            <div className="input">
              <Input type="text" placeholder="Email" />
            </div>
            <div className="check">
              <Input type="checkbox" />
              <p>
                By subscribing you are accepting to receive marketing
                information from Aero and agree to the terms of Aero’s Privacy
                Policy.
              </p>
            </div>
            <div className="map">
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </FooterWrap>
  );
};
