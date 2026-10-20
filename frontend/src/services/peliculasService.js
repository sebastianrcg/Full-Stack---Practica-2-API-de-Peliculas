import axios from 'axios';

const API_URL = 'http://localhost:4000/api/peliculas';

export const obtenerPeliculas = () => axios.get(API_URL);

export const obtenerPeliculaPorId = (id) => axios.get(`${API_URL}/${id}`);

export const crearPelicula = (datos) => axios.post(API_URL, datos);

export const actualizarPelicula = (id, datos) => axios.put(`${API_URL}/${id}`);

export const eliminarPelicula = (id) => axios.delete(`${API_URL}/${id}`);