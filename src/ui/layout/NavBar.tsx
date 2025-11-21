import { Link } from "react-router-dom";
import logo from "../../assets/images/global/qargo-logo.svg";


export const NavBar = () => {

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/our-menu", label: "Our Menu" },
    { to: "/locations", label: "Locations" },
    { to: "/franchise", label: "Franchise" },
    // { to: "/experiences", label: "Experiences" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact-us", label: "Contact Us" },
    // { to: "/coming-soon", label: "Coming Soon" },
  ];

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Qargo Coffe Logo" />
      </Link>

      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="navbar-link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
