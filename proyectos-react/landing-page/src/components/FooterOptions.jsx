import { footerOptions } from '../data/data'

export const FooterOptions = () => {
  return (
    <ul className="footer-links">
        {
        footerOptions.map(footerlink => (
            <li key={footerlink.id}>
                <a href={`#${footerlink.link}`} className="footer-link">
                    {footerlink.link}
                </a>
            </li>
        ))
        }
    </ul>
  );
};
