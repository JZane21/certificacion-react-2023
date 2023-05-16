import '../App.css'
import { data } from '../data/data'

export const SocialNetworkLinks = () => {
 
    const {
        socialLinks
    } = data();

    return (
    <ul className="nav-icons">
        { socialLinks.map(elemento => (
            <li key={elemento.id}>
                <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                    <i className={`fab ${elemento.classSocialLink}`}></i>
                </a>
            </li>
        )) }    
    </ul>
    );
};
