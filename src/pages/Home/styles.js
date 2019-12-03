import styled from "styled-components";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100i,500i,900i&display=swap");
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1%;
  margin-bottom: 2%;

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

  @media(max-width: 1024px) {
    ul {
      margin-left: 10%;
    }
  }

  @media(max-width: 900px) {
    ul {
      margin-left: -5%;
    }
  }

  @media(max-width: 780px) {
    p {
      font-size: 2.9rem;
    }
  }

  @media(max-width: 580px) {
    p {
      font-size: 2.5rem;
    }
  }

  @media(max-width: 480px) {
    #beedrill {
      display: none;
    }
    p {
      margin-left: 10px;
    }
  }

  @media(max-width: 380px) {
    p {
      font-size: 1.5rem;
      
    }

    #beedrill {
      width: 50px;
    }

  }

  @media(max-width: 380px) {
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

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100i,500i,900i&display=swap");
  background: rgba(0, 0, 0, 0.35);
  margin: 0 auto;
  border: 3px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;

  #containerteam {
    display: flex;
    flex-wrap: wrap;
  }

  p {
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
  }

  ul {
    list-style: none;
  }

  #teambox {
    background: rgba(255, 255, 255, 0.35);
    border: 3px solid white;
    border-radius: 5px;
    margin: 2% auto;
    display: flex;
    flex-direction: column;
    width: 60%;
    img {
      width: 70px;
      height: 70px;
    }

    #avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    ul {
      display: flex;
      padding: 20px;
      justify-content: center;
      align-items: center;

      li {
        padding: 5px;
      }
    }
  }

  @media(max-width: 1024px) {
    #teambox {
      width: 70%;
    }
  }
  @media(max-width: 900px) {
    #teambox {
      width: 80%;
    }
  }
  @media(max-width: 780px) {
    #avatar {
      width: 60px !important;
      height: 60px !important;
    }

    #teambox {
      img {
        width: 45px;
        height: 45px;
      }
    }
  }

  @media(max-width: 640px) {
    #avatar {
      width: 60px !important;
      height: 60px !important;
    }
    #teambox {
      img {
        width: 45px;
        height: 45px;
      }
    }

  }

  @media(max-width: 580px) {
    #avatar {
      width: 55px !important;
      height: 55px !important;
    }
    #teambox {
      img {
        width: 40px;
        height: 40px;
      }
    }

  }

  @media(max-width: 480px) {
    #avatar {
      width: 50px !important;
      height: 50px !important;
    }
    #teambox {
      img {
        width: 35px;
        height: 35px;
      }
    }

  }

  @media(max-width: 414px) {
    #avatar {
      width: 40px !important;
      height: 40px !important;
    }
    #teambox {
      img {
        width: 30px;
        height: 30px;
      }
    }

  }

  @media(max-width: 380px) {
    #avatar {
      width: 35px !important;
      height: 35px !important;
    }
    #teambox {
      img {
        width: 25px;
        height: 25px;
      }
    }

    p {
      font-size: 1rem;
      padding-top: 10px;
    }

  }

  @media(max-width: 380px) {
    #avatar {
      width: 30px !important;
      height: 30px !important;
    }
    #teambox {
      img {
        width: 20px;
        height: 20px;
      }
    }

    p {
      font-size: 1rem;
      padding-top: 10px;
    }

  }

  
`;
