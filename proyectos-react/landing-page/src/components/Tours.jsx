import '../App.css'
import { tours } from '../data/data'
import { Tour } from './Tour'
import { Title } from './Title';

export const Tours = () => {
  return (
    <section className="section" id="tours">

    <Title title="Lenguajes" subTitle="Populares"/>

    <div className="section-center featured-center">
      { tours.map(elemento => (
        <Tour
        image={elemento.image}
        date={elemento.date}
        title={elemento.title}
        info={elemento.info}
        location={elemento.location}
        duration={elemento.duration}
        cost={elemento.cost}
        key={elemento.id}
        />
      )) }
    </div>
  </section>
  );
};
