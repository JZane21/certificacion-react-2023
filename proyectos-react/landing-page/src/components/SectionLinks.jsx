import '../App.css'

export const SectionLinks = ({Parentclass, ItemClass, listaLinks}) => {
    return (
        <ul className={Parentclass} id={Parentclass}>
            { listaLinks.map( link => (
                <li key={link.id}>
                    <a href={`#${link.original}`} className={ItemClass}>
                        {link.link}
                    </a>
                </li>
            ) ) }
        </ul>
    );
};
