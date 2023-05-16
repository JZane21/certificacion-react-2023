import '../App.css'
import { socialLinks } from '../data/data'

export const SocialNetworkLinks = (props) => {
    const classItem = props.classItem;
    const classList = props.classList;
    return (
    <ul className={classList}>
        { socialLinks.map(elemento => (
            <li key={elemento.id}>
                <a href={`https://www.${elemento.classSocialLink}.com`}
                target="_blank" className={classItem}>
                    <i className={`fab fa-${elemento.classSocialLink}`}></i>
                </a>
            </li>
        )) }    
    </ul>
    );
};
