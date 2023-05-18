import '../App.css'
import about from "../../images/pexels-hitesh-choudhary.jpg"
import { Title } from './Title';

export const About = () => {
  return (
    <section className="section" id="about">
      <Title title='Que es' subTitle='Programar'/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>definición</h3>
          <p>
            Programar es un proceso que implica seguir
            una serie de pasos organizados y precisos,
            conocidos como algoritmos. Estos pasos se
            escriben en un archivo utilizando un lenguaje
            de programación específico, con el fin de que
            puedan ser ejecutados por una computadora.
            El archivo resultante se denomina programa.
            En resumen, programar es la creación de
            instrucciones claras y ordenadas para que
            una computadora realice tareas específicas.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">ver más</a>
        </article>
      </div>
    </section>
  );
};
