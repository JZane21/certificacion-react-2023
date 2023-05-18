import "../App.css";
import { PrincipalLogo } from "./PrincipalLogo";
import { SectionLinks } from "./SectionLinks";
import { SocialNetworkLinks } from "./SocialNetworkLinks";
import { optionLinks } from "../data/data";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <PrincipalLogo />
        <SectionLinks
          listaLinks={optionLinks}
          Parentclass="nav-links"
          ItemClass="nav-link"
        />
        <SocialNetworkLinks classItem="nav-icon" classList="nav-icons" />
      </div>
    </nav>
  );
};
