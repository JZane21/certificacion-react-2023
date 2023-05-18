import '../App.css'
import { CopyrightText } from './CopyrightText';
import { SectionLinks } from './SectionLinks';
import { SocialNetworkLinks } from './SocialNetworkLinks';
import { optionLinks } from '../data/data'

export const Footer = () => {
  return (
    <footer className="section footer">
      <SectionLinks
      listaLinks={optionLinks}
      Parentclass={"footer-links"}
      ItemClass={"footer-link"} />
      <SocialNetworkLinks classItem="footer-icon" classList="footer-icons"/>
      <CopyrightText/>
    </footer>
  );
};
