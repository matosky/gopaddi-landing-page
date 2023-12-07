import { NavbarWrap } from "./navbar.styled";
import {FaCaretDown} from "react-icons/fa"
export const links = [
    {
      label: 'Home',
      url: '/',
      icon: <FaCaretDown />,
    },
    {
      label: 'Solutions',
      url: '/about',
      icon: <FaCaretDown />,
    },
    {
      label: 'Products',
      url: '/contact',
      icon: <FaCaretDown />,
    },
    {
        label: 'Company',
        url: '/contact',
        icon: <FaCaretDown />,
      },
    // Add more links as needed
  ];
export const NavBar = () => {
    return (
      <NavbarWrap>
        <ul>
          {links.map((link, index) => (
            <li className="navbar-item" key={index}>
              <a href={link.url}>
                {link.label}
              </a>
              {link.icon}
            </li>
          ))}
        </ul>
      </NavbarWrap>
    );
  };
  