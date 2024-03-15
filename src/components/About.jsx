import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>Acerca de nosotros</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis rerum, molestias quia ex, autem veritatis suscipit nisi dicta distinctio excepturi amet! Nemo ex ipsum eligendi suscipit cum commodi velit dolore est enim earum quos inventore aut culpa optio, quod molestias omnis at aperiam adipisci minus accusamus. Fuga consectetur totam voluptas, accusantium, dolorem recusandae non laborum quos dicta ipsa dolorum! Dolor perspiciatis ullam facilis deleniti saepe eaque quos voluptatem rem ex vero enim libero vel modi unde praesentium quidem dolorum voluptas hic magni blanditiis laboriosam doloribus natus, magnam delectus! Temporibus rerum maiores possimus dolores cupiditate distinctio beatae ducimus. Vitae, tempore.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contáctanos</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About us" height="400px" width="600px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
