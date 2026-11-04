import React, { useState } from 'react';
import usePersonajes from './hooks/usePersonajes';
import PersonajeList from './components/PersonajeList';
import FavoritesPanel from './components/FavoritesPanel';

function MultiversoApp() {
  const { personajes, cargando, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]);

  function cambiarFavorito(personaje) {
    const yaEsFavorito = favoritos.some((favorito) => favorito.id === personaje.id);

    if (yaEsFavorito) {
      setFavoritos((actuales) =>
        actuales.filter((favorito) => favorito.id !== personaje.id)
      );
    } else {
      setFavoritos((actuales) => [...actuales, personaje]);
    }
  }

  function quitarFavorito(id) {
    setFavoritos((actuales) =>
      actuales.filter((favorito) => favorito.id !== id)
    );
  }

  return (
    <main>
      <h1>Personajes de Rick and Morty</h1>
      <div className="layout">
        {cargando ? (
          <p className="mensaje">Cargando...</p>
        ) : error ? (
          <p className="mensaje error">{error}</p>
        ) : (
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onCambiarFavorito={cambiarFavorito}
          />
        )}

        <FavoritesPanel
          favoritos={favoritos}
          onQuitarFavorito={quitarFavorito}
        />
      </div>
    </main>
  );
}

export default MultiversoApp;
