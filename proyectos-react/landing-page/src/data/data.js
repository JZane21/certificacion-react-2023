import tour1 from "../../images/javascript.png"
import tour2 from "../../images/java.png"
import tour3 from "../../images/python.png"

export const optionLinks = [
    {
        id:1,
        link:"inicio",
        original:"home"
    },
    {
        id:2,
        link:"programar",
        original:"about"
    },
    {
        id:3,
        link:"ventajas",
        original:"services"
    },
    {
        id:4,
        link:"lenguajes",
        original:"tours"
    },
];
    
export const socialLinks = [
    {
        id: 10,
        classSocialLink: "facebook"
    },
    {
        id: 20,
        classSocialLink: "twitter"
    },
    {
        id: 30,
        classSocialLink: "squarespace"
    },
];

// const footerOptions = [...optionLinks];

// for(let i=0; i<4; i++){
//     footerOptions[i].id = footerOptions[i].id*10000;
// }

// export const footerLinks

export const services = [
    {
        id: 100,
        icon: "fa fa-wrench",
        title: "Programar te da otra perspectiva para solventar problemas",
        text: "Tanto en el ámbito personal como en el ámbito laboral, la programación te brinda habilidades para abordar los desafíos de forma lógica. Al iniciar en la programación, desarrollarás la capacidad de organizar tareas siguiendo patrones lógicos, y a medida que los desafíos se vuelvan más complejos, combinarás operaciones fundamentales. La programación implica descomponer una tarea grande en tareas más pequeñas para comprender mejor el problema en su conjunto."
    },
    {
        id: 200,
        icon: "fa fa-graduation-cap",
        title: "Aprender a programar te ayuda a entender la Data",
        text: "Contar con habilidades en SQL te permitirá manejar bases de datos, comprender datos específicos que luego podrás aprovechar en propuestas, investigaciones u otras circunstancias que puedas enfrentar en tu trayectoria laboral."
    },
    {
        id: 300,
        icon: "fa fa-language",
        title: "El código es un lenguaje más",
        text: "La programación implica el uso de diferentes lenguajes según su aplicación específica. Los lenguajes de programación son universales, no solo son comprendidos por las computadoras, sino también por otros programadores. Esto significa que otro de los beneficios de la programación es que al tener conocimientos en este campo, podrás involucrarte en proyectos más diversos e importantes sin dificultad."
    },
    {
        id: 400,
        icon: "fa fa-desktop",
        title: "Desarrollarás tu creatividad",
        text: "Al adquirir habilidades y dominar la programación, podrás dar vida a tus propias ideas y materializar todo lo que puedas concebir. Por ejemplo, tendrás la capacidad de desarrollar una aplicación única o quizás crear la página web más dinámica del mundo, o incluso diseñar el juego más entretenido del planeta."
    },
    {
        id: 500,
        icon: "fa fa-briefcase",
        title: "Mucha demanda",
        text: "En la actualidad, hay una alta demanda de expertos en programación en el mercado laboral. Dado que este campo tiene un alcance tan amplio y puede aplicarse en diversas organizaciones y sectores, hay numerosas oportunidades de empleo disponibles si optas por convertirte en desarrollador web."
    },
    {
        id: 600,
        icon: "fa fa-credit-card",
        title: "Altos ingresos",
        text: "Las profesiones relacionadas con la programación suelen ofrecer salarios competitivos a nivel global. Este aspecto constituye uno de los principales y evidentes atractivos de aprender a programar, especialmente en países como Estados Unidos, donde es posible alcanzar un sueldo anual de 80.000 dólares como programador."
    }
];

export const tours = [
    {
      id: 1000,
      image: tour1,
      date: "desde 1996",
      title: "JavaScript",
      info: `JavaScript es un lenguaje de programación utilizado principalmente en el desarrollo web para crear interactividad y dinamismo en las páginas, con amplia compatibilidad en los navegadores modernos.`,
      location: "USA",
      duration: "27 años",
      cost: 3300,
    },
    {
      id: 2000,
      image: tour2,
      date: "desde 1995",
      title: "Java",
      info: `Java es un lenguaje de programación versátil y orientado a objetos, utilizado en diversos entornos para desarrollar aplicaciones robustas y escalables con amplia compatibilidad multiplataforma.`,
      location: "USA",
      duration: "28 años",
      cost: 4100,
    },
    {
      id: 3000,
      image: tour3,
      date: "desde 1991",
      title: "Python",
      info: `Python es un lenguaje de programación interpretado y de alto nivel, reconocido por su simplicidad y legibilidad. Es utilizado en una amplia gama de aplicaciones, desde desarrollo web hasta inteligencia artificial.`,
      location: "Países Bajos",
      duration: "32 años",
      cost: 4000,
    }
  ];