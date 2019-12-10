import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "./styles";
import beedrill from "../../assets/images/beedrill.png";
export default function Rules() {
  return (
    <>
      <Header>
        <img src={beedrill} alt="beedrill" id="beedrill" />
        <p>iBeeLeague</p>
        <ul>
          <li>
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/rules">
              RULES
            </Link>
          </li>
        </ul>
      </Header>

      <Container>
        <h2>Rules</h2>
        <br/>
        <h3>Campeonato</h3>
        <ul>
          <li>
            O campeonato será divido em duas fases, sendo a primeira em pontos
            corridos, e a segunda mata-mata, onde 4 duplas avançam para o ultimo
            round.
          </li>
          <li>As duplas vão ter uma semana para realizar as batalhas</li>
        </ul>
        <br/>
        <h3>Battle</h3>
        <ul>
          <li>
            Os jogos são em melhor de 3 ou seja a primeira dupla que vencer duas
            batalhas vence!
          </li>
          <li>
            Jogadores não podem se comunicar durante a batalha (punicao ??)
          </li>
          <li>
            Cada jogador deve controlar SOMENTE o seus pokémons, se caso um
            jogador controlar o pokemon da sua dupla, a dupla receberá um saldo
            de -1 por cada movimento realizado (pensar melhor na punição aqui de
            cima)
          </li>
        </ul>
        <br/>
        <h3>Score</h3>
        <ul>
          <li>A pontuação no chalonge será o saldo total das batalhas, ou seja : <br/>
              se na primeira batalha a dupla “A” ganhou de          4 x 0 <br/>
              e na segunda batalha a dupla “A” ganhou de            2 x 0 <br/>
              o resultado no challonge será de                              6 x 0 <br/>
              <br/>
              Agora uma outra situação – – –
              <br/>
              <br/>
              Se a primeira batalha o for                          “A”  1  X  0  “B” <br/>
              A segunda batalha …                                    “A”  0  X  4  “B” <br/>
              e a terceira terceira …                                   “A”  3  X  0  “B”<br/>
              o RESULTADO no CHALLONGE será    “A”  4  X  4  “B”<br/>
              porém a VITÓRIA deverá ser registrada para o time “A”<br/>
          </li>
          <li>os REPLAYS SÃO OBRIGATÓRIOS para a validação da pontuação ! !</li>
        </ul>
      </Container>
    </>
  );
}
