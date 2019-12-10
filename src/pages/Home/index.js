import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Header, Container } from "./styles";
import beedrill from "../../assets/images/beedrill.png";

export default function Home() {
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3333/jogadores");
      const data = await response.json();
      setCompetidores(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header>
        <img src={beedrill} alt="beedrill" id="beedrill" />
        <p>iBeeLeague</p>
        <ul>
          <li>
            <Link className="link" to="/">HOME</Link>
          </li>
          <li>
            <Link className="link" to="/rules">RULES</Link>
          </li>
        </ul>
      </Header>

      <Container>
        <p>Tag Teams</p>
        {competidores.map(jogador => (
          <div id="containerteam" key={jogador.id}>
            <div id="teambox" key={jogador.name}>
              <div>
                <ul key={jogador.id}>
                  <li>
                    <img src={jogador.avatar.url} alt={jogador.name}/>
                  </li>
                  <li>
                    <img
                      src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokename1}.gif`}
                      alt={jogador.pokename1}
                    />
                  </li>
            
                  <li>
                    <img
                      src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokename2}.gif`}
                      alt={jogador.pokename2}
                    />
                  </li>
                  <li>
                    <img
                      src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokename3}.gif`}
                      alt={jogador.pokename3}
                    />
                  </li>
                  <li>
                    <img
                      src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokename4}.gif`}
                      alt={jogador.pokename4}
                    />
                  </li>
                  <li>
                    <img
                      src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokename5}.gif`}
                      alt={jogador.pokename5}
                    />
                  </li>
                  <li>
                    <img
                      src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokename6}.gif`}
                      alt={jogador.pokename6}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
