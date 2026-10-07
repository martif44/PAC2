import { useState } from 'react';
import games from './data/games';
import './App.css';

function Header() {
  return (
    <div className="header">
      <h1>Catàleg de Videojocs</h1>
    </div>
  )
}


function FilterButtons({ genereActiu, setGenereActiu, anyActiu, setAnyActiu }) {

  return (
    <div className="filtres">

      <h2>Filtrar per gènere</h2>

      <button onClick={() => setGenereActiu('Tots')}>Tots</button>
      <button onClick={() => setGenereActiu('Action')}>Action</button>
      <button onClick={() => setGenereActiu('Adventure')}>Adventure</button>
      <button onClick={() => setGenereActiu('RPG')}>RPG</button>
      <button onClick={() => setGenereActiu('Sports')}>Sports</button>
      <button onClick={() => setGenereActiu('Platform')}>Platform</button>
      <button onClick={() => setGenereActiu('Strategy')}>Strategy</button>


      <h2>Filtrar per any</h2>

      <button onClick={() => setAnyActiu('Tots')}>Tots</button>
      <button onClick={() => setAnyActiu('1980')}>1980 - 1989</button>
      <button onClick={() => setAnyActiu('1990')}>1990 - 1999</button>
      <button onClick={() => setAnyActiu('2000')}>2000 - 2009</button>
      <button onClick={() => setAnyActiu('2010')}>2010 - 2019</button>
      <button onClick={() => setAnyActiu('2020')}>2020 - 2029</button>

    </div>
  )
}


function GameCard({ game, favorits, setFavorits }) {

  function afegirFavorit() {

    const repetit = favorits.filter((favorit) => favorit.id === game.id);

    if (repetit.length === 0) {
      setFavorits([...favorits, game]);
    }

  }


  function eliminarFavorit() {

    setFavorits(
      favorits.filter((favorit) => favorit.id !== game.id)
    );

  }


  return (
    <div className="game-card">

      <img src={game.image} width="150" />

      <h3>{game.title}</h3>

      <p>Gènere: {game.genre}</p>

      <p>Any: {game.year}</p>

      <button onClick={afegirFavorit}>
        ♡ Afegir a favorits
      </button>

      <button onClick={eliminarFavorit}>
        Eliminar de favorits
      </button>

    </div>
  )
}


function GameList({ games, favorits, setFavorits }) {

  return (
    <div className="game-list">

      {games.map((game) => (

        <GameCard
          key={game.id}
          game={game}
          favorits={favorits}
          setFavorits={setFavorits}
        />

      ))}

    </div>
  )
}


function Footer() {

  return (
    <div>
      <p>Catàleg de Videojocs</p>
    </div>
  )

}


function App() {

  const [genereActiu, setGenereActiu] = useState('Tots');

  const [anyActiu, setAnyActiu] = useState('Tots');

  const [favorits, setFavorits] = useState([]);


  const llistatGames = games.filter((game) => {

    let genereCorrecte = false;
    let anyCorrecte = false;


    if (genereActiu === 'Tots') {
      genereCorrecte = true;
    }
    else if (game.genre === genereActiu) {
      genereCorrecte = true;
    }


    if (anyActiu === 'Tots') {
      anyCorrecte = true;
    }

    if (anyActiu === '1980' && game.year >= 1980 && game.year <= 1989) {
      anyCorrecte = true;
    }

    if (anyActiu === '1990' && game.year >= 1990 && game.year <= 1999) {
      anyCorrecte = true;
    }

    if (anyActiu === '2000' && game.year >= 2000 && game.year <= 2009) {
      anyCorrecte = true;
    }

    if (anyActiu === '2010' && game.year >= 2010 && game.year <= 2019) {
      anyCorrecte = true;
    }

    if (anyActiu === '2020' && game.year >= 2020 && game.year <= 2029) {
      anyCorrecte = true;
    }


    return genereCorrecte && anyCorrecte;

  });


  return (
    <>

      <Header />


      <FilterButtons
        genereActiu={genereActiu}
        setGenereActiu={setGenereActiu}
        anyActiu={anyActiu}
        setAnyActiu={setAnyActiu}
      />


      <h2>CATÀLEG</h2>

      <GameList
        games={llistatGames}
        favorits={favorits}
        setFavorits={setFavorits}
      />


      <h2>ELS MEUS FAVORITS</h2>

      <GameList
        games={favorits}
        favorits={favorits}
        setFavorits={setFavorits}
      />


      <Footer />

    </>
  )

}

export default App;