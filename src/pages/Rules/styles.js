import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap');
  background: rgba(0,0,0,0.3);
  width: 95%;
  height: 100%;
  margin: 0 auto;
  border-radius: 4px;
  color: white;
  margin-bottom: 10px;
  border: 3px solid black;
  display: flex;
  flex-direction: column;

  h2 {
    align-self: center;
  }

  h2, h3 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    margin-left: 20px;
  }

  ul {
    margin: 0 auto 0 5%;

    li {
      line-height: 30px;
      font-family: 'IBM Plex Sans', sans-serif;
    }
  }

  @media(max-width: 520px) {
    
    ul {
      margin: 0 auto 0 7%;

      li {
        line-height: 25px;
        font-size: 0.8rem;
      }
    }
  
  }
  
`;

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100i,500i,900i&display=swap");
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1%;
  margin-bottom: 2%;

  .link {
    text-decoration: none !important;
    color: #fff;
    transition: all 0.3s ease;
    
    &:hover {
      color: black;
      transition: all 0.3s ease;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    margin-left: -13%;
    font-size: 4rem;
    color: #fff;
  }

  ul {
    display: flex;
    list-style: none;
    color: #fff;
    font-family: "Roboto";
    font-weight: 500;
    margin-left: 20%;

    li {
      cursor: pointer;
      margin: 10px;
      transition: all 0.3s ease;
      &:hover {
        color: black;
        transition: all 0.3s ease;
      }
    }
  }

  #beedrill {
    width: 100px;
    margin-left: -8%;
  }

  @media (max-width: 1024px) {
    ul {
      margin-left: 10%;
    }
  }

  @media (max-width: 900px) {
    ul {
      margin-left: -5%;
    }
  }

  @media (max-width: 780px) {
    p {
      font-size: 2.9rem;
    }
  }

  @media (max-width: 580px) {
    p {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    #beedrill {
      display: none;
    }
    p {
      margin-left: 10px;
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 1.5rem;
    }

    #beedrill {
      width: 50px;
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 1.5rem;
      margin-left: 15px;
    }

    ul {
      li {
        font-size: 0.8rem;
      }
    }

    #beedrill {
      display: none;
    }
  }
`;
