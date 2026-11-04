import { useEffect, useState } from 'react';
import { fetchPersonajes } from '../services/fetchPersonajes';

function usePersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarPersonajes() {
      try {
        setCargando(true);
        setError('');
        const resultado = await fetchPersonajes();
        setPersonajes(resultado);
      } catch (err) {
        setError('No se pudieron cargar los personajes. Revisa tu conexión a internet.');
      } finally {
        setCargando(false);
      }
    }

    cargarPersonajes();
  }, []);

  return { personajes, cargando, error };
}

export default usePersonajes;
