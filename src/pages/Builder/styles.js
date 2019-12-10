import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100i,500i,900i&display=swap");
  form {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    width: 300px;
    top: 50%;

    input {
      font-family: "Roboto", sans-serif;
      margin: 2px;
      padding: 15px;
      background: rgba(0, 0, 0, 0.2);
      border: none;
      border-radius: 4px;
      transition: all 0.2s ease;
      font-size: 18px;
      text-transform: lowercase;
      &:focus {
        border: 1px solid white;
        transition: all 0.2s ease;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.9);
        font-size: 12px;
        font-weight: 100;
      }
    }
    span {
      color: #f64c75;
      align-self: flex-start;
      font-weight: 600;
      margin: 0 0 10px;
    }

    button {
      height: 40px;
      margin-top: 5px;
      cursor: pointer;
      background: none;
      border-radius: 2px;
      color: white;
      border: 2px solid white;
      transition: all 0.3s ease;
      font-size: 21px;
      font-weight: 600;

      &:hover {
        background: rgba(0, 0, 0, 0.7);
        border: none;
        color: white;
        transition: all 0.3s ease;
      }
    }
  }
`;
