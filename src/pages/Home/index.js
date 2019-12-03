import React, { useState, useEffect } from "react";

import { Header, Container } from "./styles";
import beedrill from "../../assets/images/beedrill.png";

export default function Home() {
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://laranjeiraflor.com.br/wp-json/pokemon/duplas"
      );
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
          <li>HOME</li>
          <li>RULES</li>
        </ul>
      </Header>

      <Container>
        <p>Tag Teams</p>
        {competidores.map(time => {
          return time.jogadores.map(jogador => (
            <div id="containerteam" key={jogador.nome_jogador}>
              <div id="teambox" key={jogador.nome_jogador}>
                <div>
                  <ul key={jogador.nome_jogador} >
                    <li>
                      <img
                        id="avatar"
                        src={jogador.avatar}
                        alt={jogador.nome_jogador}
                      />
                    </li>
                    <li>
                      <img
                        src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokemon1}.gif`}
                        alt={jogador.pokemon1}
                      />
                    </li>
                    <li>
                      <img
                        src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokemon2}.gif`}
                        alt={jogador.pokemon2}
                      />
                    </li>
                    <li>
                      <img
                        src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokemon3}.gif`}
                        alt={jogador.pokemon3}
                      />
                    </li>
                    <li>
                      <img
                        src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokemon4}.gif`}
                        alt={jogador.pokemon4}
                      />
                    </li>
                    <li>
                      <img
                        src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokemon5}.gif`}
                        alt={jogador.pokemon5}
                      />
                    </li>
                    <li>
                      <img
                        src={`http://play.pokemonshowdown.com/sprites/ani/${jogador.pokemon6}.gif`}
                        alt={jogador.pokemon6}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ));
        })}
      </Container>
    </>
  );
}
