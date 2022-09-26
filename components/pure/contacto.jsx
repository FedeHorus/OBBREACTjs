import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from "../../models/contacto.class"

const Contactocomponente = ({contacto}) => {
  return (
    <div><h2>Nombre: {contacto.nombre}</h2>
             <h3> Apellido: {contacto.apellido}</h3>
             <h4>Email: {contacto.email}</h4>
             <h5>Este contacto esta: {contacto.conectado ? 'Contacto En línea': 'Contacto No Disponible'} </h5>
      </div>
  )
}

Contactocomponente.propTypes = {
  contacto: PropTypes.instanceOf( Contacto )
}


export default Contactocomponente



