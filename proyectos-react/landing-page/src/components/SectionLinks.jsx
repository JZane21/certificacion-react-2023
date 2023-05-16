import '../App.css'
import { data } from '../data/data';

export const SectionLinks = () => {

    const {
        optionLinks
    } = data();

    return (
        <ul className="nav-links" id="nav-links">
            { optionLinks.map( link => (
                <li key={link.id}>
                    <a href={`#${link.link}`} className="nav-link">
                        {link.link}
                    </a>
                </li>
            ) ) }
        </ul>
    );
};
