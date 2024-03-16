import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6" style={{ textAlign: 'justify' }}>
            <h1 className='text-primary fw-bold mb-4'>Acerca de nosotros</h1>
            <p className=" mb-4">
              ¡Bienvenidos a nuestra página web! Somos Wendy Morillo y Jeremmy Varela, dos apasionados estudiantes de ingeniería de software con un objetivo común: aprovechar nuestra creatividad y conocimientos técnicos para crear soluciones digitales innovadoras.
            </p>
            <p className="mb-4">
              Wendy es una entusiasta del diseño de interfaces y la experiencia de usuario. Con su dedicación a la estética y la usabilidad, se encarga de que cada aspecto de nuestras aplicaciones sea intuitivo y atractivo para nuestros usuarios. Su habilidad para combinar la estética con la funcionalidad es fundamental para el éxito de nuestros proyectos.
            </p>
            <p className="mb-4">
              Por otro lado, Jeremmy es un experto en desarrollo de software con una mentalidad analítica y orientada a los detalles. Su pasión por el código limpio y eficiente garantiza que nuestras aplicaciones sean robustas, escalables y fáciles de mantener. Además, su experiencia en diversas tecnologías nos permite estar al tanto de las últimas tendencias en el mundo del desarrollo de software.
            </p>
            <p className="mb-4">
              Nos unimos para este proyecto de ingeniería de software con el objetivo de aplicar nuestros conocimientos teóricos en un entorno práctico y colaborativo. A lo largo de este viaje, hemos aprendido la importancia de la comunicación efectiva, la planificación meticulosa y la iteración continua en el proceso de desarrollo de software.
            </p>
            <p className="mb-4">
              Estamos emocionados de compartir contigo nuestras creaciones y esperamos que encuentres valor en lo que hemos construido. No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o sugerencia. ¡Gracias por visitar nuestra página web!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contáctanos</NavLink>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <img src="/assets/images/Wendy.png" alt="About us" height="400px" width="500px" style={{ marginBottom: "20px" }} />
            </div>
            <div className="d-flex justify-content-center">
              <img src="/assets/images/Jeremmy.png" alt="About us" height="400px" width="500px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About