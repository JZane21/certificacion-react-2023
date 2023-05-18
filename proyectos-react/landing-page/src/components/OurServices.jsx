import '../App.css'
import { services } from '../data/data';
import { Service } from './Service';
import { Title } from './Title';
export const OurServices = () => {
  return (
    <section className="section services" id="services">
      <Title title="Ventajas de" subTitle="Programar"/>
      <div className="section-center services-center">
        {
          services.map(service => (
            <Service {...service} key={service.id}/>
          ))
        }
      </div>
  </section>
  );
};
