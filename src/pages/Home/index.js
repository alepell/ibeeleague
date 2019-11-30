import React, { useState, useEffect } from "react";

import { Header, Container } from "./styles";
import beedrill from "../../assets/images/beedrill.png";

export default function Home() {
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://laranjeiraflor.com.br/wp-json/wp/v2/competidores"
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
        <div id="teambox">
          <div>
            <ul>
              <li><img src="" alt="foto"/></li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><img src="" alt="foto"/></li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
            </ul>
          </div>
        </div>
        <div id="teambox">
          <div>
            <ul>
              <li><img src="" alt="foto"/></li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><img src="" alt="foto"/></li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
