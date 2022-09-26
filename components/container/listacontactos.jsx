import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'
import Contactocomponente from '../pure/contacto'

const ListaContactocomponent = () => {

   const defaultContacto = new Contacto('Fede', 'Acevedo','Facevedo', true)

  return (
    <div>
    <div>
        <h1>Tu Contacto: </h1>
    </div>
    {/*falta el for/map*/}
    <Contactocomponente contacto={defaultContacto} ></Contactocomponente>
    </div>
  )
}


export default ListaContactocomponent