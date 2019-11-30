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
        {competidores.map(comp => (
           <div id="containerteam" key={comp.id}>
           <div id="teambox">
             <div>
               <ul>
                 <li>
                   <img
                     id="avatar"
                     src={comp.avatar.url}
                     alt={comp.title.rendered}
                   />
                 </li>
                 <li>
                   <img
                     src="http://play.pokemonshowdown.com/sprites/ani/altaria.gif"
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src="http://play.pokemonshowdown.com/sprites/ani/charizard.gif"
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src="http://play.pokemonshowdown.com/sprites/ani/kabutops.gif"
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src="http://play.pokemonshowdown.com/sprites/ani/umbreon.gif"
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src="http://play.pokemonshowdown.com/sprites/ani/espeon.gif"
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src="http://play.pokemonshowdown.com/sprites/ani/snorlax.gif"
                     alt="altaria"
                   />
                 </li>
               </ul>
             </div>
             <div>
               <ul>
                 <li>
                   <img
                     id="avatar"
                     src={comp.avatar.url}
                     alt={comp.title.rendered}
                   />
                 </li>
                 <li>
                   <img
                     src={`http://play.pokemonshowdown.com/sprites/ani/${comp.pokemon1}.gif`}
                     alt="altaria"
                     
                   />
                 </li>
                 <li>
                   <img
                     src={`http://play.pokemonshowdown.com/sprites/ani/${comp.pokemon2}.gif`}
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src={`http://play.pokemonshowdown.com/sprites/ani/${comp.pokemon3}.gif`}
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src={`http://play.pokemonshowdown.com/sprites/ani/${comp.pokemon4}.gif`}
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src={`http://play.pokemonshowdown.com/sprites/ani/${comp.pokemon5}.gif`}
                     alt="altaria"
                   />
                 </li>
                 <li>
                   <img
                     src={`http://play.pokemonshowdown.com/sprites/ani/${comp.pokemon6}.gif`}
                     alt="altaria"
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
