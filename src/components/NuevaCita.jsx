import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

//iniciar el State
const stateInicial = {
    cita: {
      nombreMascota: "",
      nombreDueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    },
    error: false,
  };

class NuevaCita extends Component {
  state = {...stateInicial};

  // cuando el usuario escribe en el input, se actualiza el state
  handleChange = (e) => {
    this.setState({
      cita: {

        //copia el estado actual
        ...this.state.cita,
        [e.target.name]: e.target.value,
      },
    });
  };

  // cuando el usuario envia el formulario
  handleSubmit = (e) => {
    e.preventDefault();


    //extraer los valores del state
    const { nombreMascota, nombreDueño, fecha, hora, sintomas } = this.state.cita;

    //validar que todos los campos esten llenos
    if(nombreMascota === "" || nombreDueño === "" || fecha === "" || hora === "" || sintomas === ""){
      this.setState({
        error: true
      });
      //si no hay error, se limpia el state
      return;
    }

    //generar objeto con los datos haciendo uso el uuid
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuidv4();

    //agregar al state una nueva cita
    this.props.crearNuevaCita(nuevaCita);

    //resetear el state
    this.setState({
        ...stateInicial
    })
    
  };

  render() {

    //extraer valor de state
    const { error } = this.state;
    return (
      <div className="py-5">
        <h3 className="text-white font-semibold text-xl text-center p-6">
          Llena el formulario para una nueva cita
        </h3>
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <label htmlFor="" className="flex flex-col py-2">
              <span className="font-bold">Nombre de la mascota: </span>
              <input
                className="bg-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full focus:ring-1"
                type="text"
                placeholder="Rico"
                name="nombreMascota"
                onChange={this.handleChange}
                value={this.state.cita.nombreMascota}
              />
            </label>
            <label htmlFor="" className="flex flex-col py-2">
              <span className="font-bold">Nombre del dueño: </span>
              <input
                className="bg-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full focus:ring-1"
                type="text"
                placeholder="Gabriela"
                name="nombreDueño"
                onChange={this.handleChange}
                value={this.state.cita.nombreDueño}
              />
            </label>
            <label htmlFor="" className="flex flex-col py-2">
              <span className="font-bold">Fecha: </span>
              <input
                className="bg-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full focus:ring-1"
                type="date"
                placeholder="Kypeer"
                name="fecha"
                onChange={this.handleChange}
                value={this.state.cita.fecha}
              />
            </label>
            <label htmlFor="" className="flex flex-col py-2">
              <span className="font-bold">Hora: </span>
              <input
                className="bg-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full focus:ring-1"
                type="text"
                placeholder="--:--"
                name="hora"
                onChange={this.handleChange}
                value={this.state.cita.hora}
              />
            </label>
            <label htmlFor="" className="flex flex-col py-2">
              <span className="font-bold">Sintomas: </span>
              <textarea
                className="bg-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full focus:ring-1"
                type="text"
                placeholder="Irritacion nasal"
                name="sintomas"
                onChange={this.handleChange}
                value={this.state.cita.sintomas}
              />
            </label>
            {
            error ? <div className="text-white font-bold bg-red-500 p-2 rounded-lg mt-2 text-center">🐺 Todos los campos son obligatorios 🐺</div> : null
            }
            <button
              type="submit"
              className="text-white font-semibold bg-black p-2 rounded-xl mt-5 w-full hover:bg-gray-900"
              value="Agregar nueva cita"
            >
              Agregar nueva cita
            </button>
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired,
}

export default NuevaCita;
