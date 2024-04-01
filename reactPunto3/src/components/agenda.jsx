import React, { useState, useEffect } from "react";
import axios from "axios";
import "./agenda.css";

function Agenda() {
  const [datos, setDatos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoContacto, setNuevoContacto] = useState({
    name: "",
    telephone: "",
    image: "",
  });

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const respuesta = await axios.get(
        "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project"
      );
      setDatos(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    try {
      await axios.post(
        "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project",
        {
          names: nuevoContacto.name,
          telephone: nuevoContacto.telephone,
          image: nuevoContacto.image,
        }
      );
      setMostrarFormulario(false);
      obtenerDatos();
      setNuevoContacto({ name: "", telephone: "", image: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contenedor">
      <div className="titulo-contenedor">
        <h1>Agenda</h1>
      </div>
      {mostrarFormulario ? (
        <form onSubmit={enviarFormulario} className="contenedor-formulario">
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoContacto.name}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={nuevoContacto.telephone}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, telephone: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={nuevoContacto.image}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, image: e.target.value })
            }
          />
          <button type="submit">Guardar</button>
        </form>
      ) : (
        <button
          className="boton-agregar-contacto"
          onClick={() => setMostrarFormulario(true)}
        >
          Agregar contacto
        </button>
      )}

      <div className="lista-contactos">
        {datos.map((contacto, index) => (
          <div className="tarjeta-contacto" key={index}>
            <img
              src={contacto.image}
              alt={contacto.names}
              className="imagen-contacto"
            />
            <div className="detalles-contacto">
              <h2>{contacto.names}</h2>
              <p>{contacto.telephone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agenda;
