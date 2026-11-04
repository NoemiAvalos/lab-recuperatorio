import React from 'react';
import PersonajeCard from './PersonajeCard';

function PersonajeList({ personajes, favoritos, onCambiarFavorito }) {
  return (
    <section className="grid">
      {personajes.map((personaje) => {
        const esFavorito = favoritos.some(
          (favorito) => favorito.id === personaje.id
        );

        return (
          <PersonajeCard
            key={personaje.id}
            personaje={personaje}
            esFavorito={esFavorito}
            onCambiarFavorito={onCambiarFavorito}
          />
        );
      })}
    </section>
  );
}

export default PersonajeList;
