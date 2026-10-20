import { useState, useEffect } from 'react';
import FormularioPelicula from './components/FormularioPeliculas';
import ListaPeliculas from './components/ListaPeliculas';
import { obtenerPeliculas, crearPelicula, actualizarPelicula, eliminarPelicula, } from './services/peliculasService';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const cargarPeliculas = async () => {
    const respuesta = await obtenerPeliculas();
    setPeliculas(respuesta.data.data);
  };

  useEffect(() => { cargarPeliculas(); }, []);

  const manejarGuardar = async (datos) => {
    if (peliculaSeleccionada) {
      await actualizarPelicula(peliculaSeleccionada._id, datos);
    } else {
      await crearPelicula(datos);
    }

    setPeliculaSeleccionada(null);
    cargarPeliculas();
  };

  const manejarEliminar = async (id) => {
    await eliminarPelicula(id);

    cargarPeliculas();
  };


  return (
    <div>
      <h1>🎬 Catálogo de Películas</h1>
      <FormularioPelicula peliculaSeleccionada={peliculaSeleccionada} onGuardar={manejarGuardar} />
      <ListaPeliculas peliculas={peliculas} onEditar={setPeliculaSeleccionada} onEliminar={manejarEliminar} />
    </div>
  );
}

export default App;
