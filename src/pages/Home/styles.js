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
`;
