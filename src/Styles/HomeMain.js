import styled, { keyframes } from "styled-components";

const LeftInRight = keyframes`
    0%{
        background-color: #f2f2f2;
        position: relative;
        top: -14.5px;
    transform: translateX(-430%)
    }
    100%{
        background-color: #dd5903;
        position: relative;
        top: -14.5px;
        transform: translateX(430%);
    }
`;
const BarColor = keyframes`
    from{
        background-color: #dd5903;
        border-color: #dd5903;
    }
    to{
        background-color: #f2f2f2;
        border-color: #f2f2f2;
    }
`;
const LeftInRightMobile = keyframes`
    0%{
        background-color: #f2f2f2;
        position: relative;
        top: -15.5px;
    transform: translateX(-330%)
    }
    100%{
        background-color: #dd5903;
        position: relative;
        top: -15.5px;
        transform: translateX(330%);
    }
  `;
const WordName = keyframes`
from {
    color: #dd5903;
}
to{
    color: #f2f2f2;
}
`;
const Container = styled.div`
  color: #f2f2f2;
  height: 850px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: "Passion One", cursive;
  main {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 430px) {
      height: 70%;
    }
    h1 {
      font-size: 3.5rem;
      word-spacing: 10px;
      letter-spacing: 4px;
      margin: 20px;
      @media (max-width: 725px) {
        font-size: 3rem;
      }
      @media (max-width: 630px) {
        font-size: 2.5rem;
      }
      @media (max-width: 550px) {
        font-size: 2rem;
      }
      @media (max-width: 470px) {
        font-size: 1.8rem;
      }
      @media (max-width: 430px) {
        font-size: 1.4rem;
      }
      @media (max-width: 365px) {
        font-size: 1.2rem;
      }
      @media (max-width: 325px) {
        font-size: 1rem;
      }
    }
    #word {
      display: flex;
      justify-content: center;
      margin: 0;
      animation: ${WordName} 4s linear infinite alternate;
    }
    span {
      font-size: 1.8rem;
      @media (max-width: 420px) {
        font-size: 1.6rem;
      }
    }
    hr {
      width: 380px;
      padding: 2.5px;
      border-color: #dd5903;
      border-radius: 20px;
      background-color: #dd5903;
      animation: ${BarColor} 4s linear infinite alternate;
      @media (max-width: 420px) {
        width: 300px;
      }
    }
    .Moving_Across {
      width: 40px;
      height: 6.5px;
      border-radius: 8px;
      background-color: #f2f2f2;
      animation: ${LeftInRight} 4s linear infinite alternate;
      @media (max-width: 420px) {
        animation: ${LeftInRightMobile} 4s linear infinite alternate;
      }
    }
  }
  .Buttons {
    width: 450px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    @media (max-width: 430px) {
      width: 390px;
    }
    @media (max-width: 380px) {
      width: 380px;
    }
    @media (max-width: 325px) {
      width: 320px;
    }
  }
  #View,
  #Food {
    cursor: pointer;
    padding: 20px 52px;
    border-radius: 10px;
    border: none;
    text-transform: uppercase;
    @media (max-width: 420px) {
      padding: 20px 39px;
    }
    @media (max-width: 365px) {
      padding: 20px 33px;
    }
  }
  #View {
    background-color: #dd5903;
    color: #f2f2f2;
    :hover {
      transition: 1s;
      background-color: #f2f2f2;
      color: #dd5903;
    }
  }
  #Food {
    background-color: #f2f2f2;
    color: #dd5903;
    :hover {
      transition: 1s;
      background-color: #dd5903;
      color: #f2f2f2;
    }
  }
`;

export { Container };
