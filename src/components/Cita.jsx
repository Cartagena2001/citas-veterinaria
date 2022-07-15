import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from 'prop-types'

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="py-2 grid justify-items-center">
      <div className="block p-6 w-[20rem] bg-white rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nombre: {cita.nombreMascota}
        </h5>
        <p className="text-gray-400">
          <span className="font-bold">Dueño:</span> {cita.nombreDueño}
        </p>
        <p className="text-gray-400 mt-4">
          <span className="font-bold">Fecha 📅:</span> {cita.fecha}
        </p>
        <p className="text-gray-400">
          <span className="font-bold">Hora ⏰: </span>
          {cita.hora}
        </p>
        <p className="text-gray-400">
          <span className="font-bold">Sintomas 💊:</span> {cita.sintomas}
        </p>

        <button
          onClick={() => eliminarCita(cita.id)}
          className="bg-red-500 hover:bg-red-600 p-2 rounded-full mt-3"
        >
          <AiOutlineDelete className="text-white" />
        </button>
      </div>
    </div>
  );
};

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
