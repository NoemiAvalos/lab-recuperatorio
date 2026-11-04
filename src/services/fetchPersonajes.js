const URL_API = 'https://rickandmortyapi.com/api/character';

export async function fetchPersonajes() {
  const respuesta = await fetch(URL_API);

  if (!respuesta.ok) {
    throw new Error('No se pudo obtener la lista de personajes. Intenta nuevamente.');
  }

  const datos = await respuesta.json();
  return datos.results;
}
