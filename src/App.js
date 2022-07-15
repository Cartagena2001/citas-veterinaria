import React, { Component } from "react";
import Header from "./components/Header";
import ListaCita from "./components/ListaCita";
import NuevaCita from "./components/NuevaCita";

class App extends Component {
  state = {
    citas: [],
  };

  //cuando la aplicacion carga por primera vez
  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS),
      });
    }
  }
  //cuando se modifica el state
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  //agregar nueva cita
  crearNuevaCita = (datos) => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar nuevo objeto al state
    this.setState({
      citas,
    });
  };

  //eliminar cita
  eliminarCita = id => {
    //tomar copia del state actual
    const citasActuales = [...this.state.citas];
    //utilizar filter
    const citas = citasActuales.filter(cita => cita.id !== id);
    //actualizar el state
    this.setState({
      citas,
    })
  }

  render() {
    return (
      <div className="max-w-[60rem] mx-auto px-6">
        <Header titulo={"🐕 Administrador de pacientes veterinaria 🐕"} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div>
            <ListaCita citas={this.state.citas} eliminarCita={this.eliminarCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
