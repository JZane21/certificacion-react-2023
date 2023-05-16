import '../App.css'
import { CopyrightText } from './CopyrightText';
import { FooterOptions } from './FooterOptions';
import { SocialNetworkLinks } from './SocialNetworkLinks';

export const Footer = () => {
  return (
    <footer className="section footer">
      <FooterOptions/>
      <SocialNetworkLinks classItem="footer-icon" classList="footer-icons"/>
      <CopyrightText/>
    </footer>
  );
};
