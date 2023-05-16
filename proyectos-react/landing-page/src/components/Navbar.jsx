import '../App.css'
import { PrincipalLogo } from "./PrincipalLogo";
import { SectionLinks } from './SectionLinks';
import { SocialNetworkLinks } from './SocialNetworkLinks';

export const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="nav-center">
            <PrincipalLogo/>
            <SectionLinks/>
            <SocialNetworkLinks classItem="nav-icon" classList="nav-icons"/>
        </div>
    </nav>
    );
};