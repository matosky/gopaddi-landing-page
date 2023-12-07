import { NavbarWrap } from "./navbar.styled";
export const links = [
    {
      label: 'Home',
      url: '/',
      // icon: faHome,
    },
    {
      label: 'Solutions',
      url: '/about',
      // icon: faInfoCircle,
    },
    {
      label: 'Products',
      url: '/contact',
      // icon: faEnvelope,
    },
    {
        label: 'Company',
        url: '/contact',
        // icon: faEnvelope,
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
                {/* <FontAwesomeIcon icon={link.icon} /> */}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </NavbarWrap>
    );
  };
  