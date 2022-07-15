import React from "react";
import Cita from "./Cita";
import PropTypes from "prop-types";

const ListaCita = ({ citas, eliminarCita }) => {
  //imprimir un mensaje si no hay citas
  const mensaje =
    Object.keys(citas).length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <div className="py-5">
      <h1 className="text-white font-semibold text-xl text-center p-6">
        {mensaje}
      </h1>
      <div>
        {citas.map((cita) => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))}
      </div>
    </div>
  );
};

ListaCita.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default ListaCita;
