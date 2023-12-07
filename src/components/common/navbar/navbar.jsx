import { NavbarWrap } from "./navbar.styled";
import { FaChevronDown} from "react-icons/fa"
export const links = [
    {
      label: 'Home',
      url: '/',
      icon: <FaChevronDown/>,
    },
    {
      label: 'Solutions',
      url: '/about',
      icon: <FaChevronDown/>,
    },
    {
      label: 'Products',
      url: '/contact',
      icon: <FaChevronDown/>,
    },
    {
        label: 'Company',
        url: '/contact',
        icon: <FaChevronDown/>,
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
              <span>
              {link.icon}
              </span>
            </li>
          ))}
        </ul>
      </NavbarWrap>
    );
  };
  