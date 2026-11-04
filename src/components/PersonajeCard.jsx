import React from 'react';
function PersonajeCard({ personaje, esFavorito, onCambiarFavorito }) {
  let claseEstado = 'estado-unknown';

  if (personaje.status === 'Alive') {
    claseEstado = 'estado-alive';
  } else if (personaje.status === 'Dead') {
    claseEstado = 'estado-dead';
  }

  return (
    <article className={`card ${esFavorito ? 'fav' : ''}`}>
      <img src={personaje.image} alt={personaje.name} />
      <h4>{personaje.name}</h4>
      <p className={`estado ${claseEstado}`}>
        {personaje.status} - {personaje.species}
      </p>
      <button onClick={() => onCambiarFavorito(personaje)}>
        {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
    </article>
  );
}

export default PersonajeCard;
