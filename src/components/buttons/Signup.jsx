import React from 'react'

const Signup = () => {
  return (
    <div>
          {/*<!-- Button trigger modal -->*/}
          <button type="button" class="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
              <span className='fa fa-user-plus me-1'></span> Registrarse
          </button>

          {/*<!-- Modal -->*/}
          <div class="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Iniciar Sesión</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <button className="btn btn-primary w-100 mb-4">
                              <span className="fa fa-google me-2"></span>Registrarse con Google
                          </button>
                          <button className="btn btn-primary w-100 mb-4">
                              <span className="fa fa-facebook me-2"></span>Registrarse con Facebook
                          </button>
                          <form>
                              <div class="mb-3">
                                  <label htmlFor="exampleInput" class="form-label">Usuario</label>
                                  <input type="text" class="form-control" id="exampleInput" />
                              </div>
                              <div class="mb-3">
                                  <label htmlFor="exampleInputEmail1" class="form-label">Correo electrónico</label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                  <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                              </div>
                              <div class="mb-3">
                                  <label htmlFor="exampleInputPassword1" class="form-label">Contraseña</label>
                                  <input type="password" class="form-control" id="exampleInputPassword1" />
                              </div>
                              <div class="mb-3 form-check">
                                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                  <label class="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
                              </div>
                              <button type="submit" class="btn btn-outline-primary w-100 mt-5">Registrarse</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Signup
