import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)
    
    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-body-secondary">${item.price}</span>
            </li>
        );
    }
    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Tu carrito</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                            
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total.toFixed(2)}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Código de promoción" />
                                <button type="submit" className="btn btn-secondary">Aplicar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Dirección de envío</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmFor="firstName" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        El Nombre es requerido.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmFor="lastName" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        El apellido es requerido
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmFor="username" className="form-label">Usuario</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Usuario" required="" />
                                        <div className="invalid-feedback">
                                            Tu usuario es requerido,
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmFor="email" className="form-label">Correo electrónico <span className="text-body-secondary">(Opcional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Ingresa un correo electrónico para el envío de su factura.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmFor="address" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Por favor ingrese su dirección de envío.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmFor="address2" className="form-label">Dirección 2 <span className="text-body-secondary">(Opcional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartamento o suite" />
                                </div>

                                <div className="col-md-5">
                                    <label htmFor="country" className="form-label">País</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Escoge...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Por favor selecciona un país válido
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmFor="state" className="form-label">Estado</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Escoge...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Por favor selecciona un estado válido
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmFor="zip" className="form-label">Zip/Código postal</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip/Código postal requerido
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmFor="same-address">La dirección de envío es la misma que la dirección de facturación</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmFor="save-info">Guardar esta facturación para una próxima compra</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Método de pago</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmFor="credit">Tarjeta de credito</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmFor="debit">Tarjeta de débito</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmFor="cc-name" className="form-label">Nombre del propietario</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-body-secondary">Nombre completo como se muestra en la tarjeta</small>
                                    <div className="invalid-feedback">
                                        Nombre del propietario es requerido
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmFor="cc-number" className="form-label">Número de la tarjeta</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Número de la tarjeta es requerido
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmFor="cc-expiration" className="form-label">Expiración</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        La fecha de expiración es requerida
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Código de seguridad es requerido
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Confirmar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
