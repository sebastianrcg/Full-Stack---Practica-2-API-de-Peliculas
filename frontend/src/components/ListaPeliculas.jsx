function ListaPeliculas({ peliculas, onEditar, onEliminar }) {
    return (
        <ul>
            {peliculas.map((pelicula) => (
                <li
                    key={pelicula._id}>
                    <strong>{pelicula.titulo}</strong>
                    ({pelicula.anio}) - {pelicula.genero}
                    <br />
                    Director: {pelicula.director} Calificación: {pelicula.calificacion}
                    <br />
                    <button onClick={() => onEditar(pelicula)}> Editar </button>
                    <button onClick={() => onEliminar(pelicula._id)}> Eliminar </button>
                </li>
            ))}
        </ul>
    );
}

export default ListaPeliculas;