import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4">
            <h1>¿Tiene alguna duda?</h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 d-flex justify-content-center'>
            <img src="/assets/images/message.png" alt="Contact Us" height="300px" width="300px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="Pablo Torres"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Escriba su duda</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
