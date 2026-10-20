import { useState, useEffect } from 'react';

const valoresIniciales = {
    titulo: '',
    genero: '',
    anio: '',
    director: '',
    calificacion: ''
};

function FormularioPelicula({ peliculaSeleccionada, onGuardar }) {

    const [form, setForm] = useState(valoresIniciales);

    useEffect(() => {
        if (peliculaSeleccionada) {
            setForm(peliculaSeleccionada);
        }
        else {
            setForm(valoresIniciales);
        }
    }, [peliculaSeleccionada]);


    const manejarCambio = (evento) => {
        setForm({ ...form, [evento.target.name]: evento.target.value });
    };

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        onGuardar({
            ...form,
            anio: Number(form.anio),
            calificacion: Number(form.calificacion)
        });

        setForm(valoresIniciales);
    };

    return
    (
        <form onSubmit={manejarEnvio}>
            < input
                name="titulo"
                placeholder="Título"
                value={form.titulo}
                onChange={manejarCambio} />
            <input name="genero"
                placeholder="Género"
                value={form.genero}
                onChange={manejarCambio} />
            <input name="anio"
                type="number"
                placeholder="Año"
                value={form.anio}
                onChange={manejarCambio} />

            <input name="director"
                placeholder="Director"
                value={form.director}
                onChange={manejarCambio} />

            <input name="calificacion"
                type="number"
                placeholder="Calificación"
                value={form.calificacion}
                onChange={manejarCambio} />

            <button type="submit">Guardar</button>
        </form>
    );
}

export default FormularioPelicula;