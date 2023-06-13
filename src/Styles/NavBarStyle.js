import styled, { keyframes } from "styled-components";
import MainImage from "../Images/desktop-1920x1080.jpg";
const NavLoader = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const NavContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Oswald", sans-serif;
  color: #f2f2f2;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.darknavbar ? "black" : "rgba(0, 0, 0, 0.32)"};
  animation: ${NavLoader} 1s ease-in-out;
  position: sticky;
  top: 0;
  a {
    font-size: 1.3rem;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: #f2f2f2;
  }
  .Table {
    button {
      background-color: #dd5903;
      border-radius: 6px;
      padding: 0px 15px;
      width: 150px;
      height: 50px;
      border: none;
      color: #f2f2f2;
      font-size: 1.15rem;
      text-transform: uppercase;
      @media (max-width: 430px) {
        font-size: 15px;
        width: 130px;
        padding: 0px 10px;
        height: 40px;
      }
      @media (max-width: 360px) {
        font-size: 14px;
        width: 115px;
        padding: 0px 10px;
        height: 40px;
      }
      @media (max-width: 320px) {
        font-size: 12px;
        width: 100px;
        height: 40px;
      }
      cursor: pointer;
      :hover {
        transition-duration: 0.5s;
        background-color: #f2f2f2;
        color: #dd5903;
      }
    }
  }
  .Logo {
    margin-left: 0px;
    h2 {
      margin: 0px;
      font-size: 2rem;
      word-spacing: 50px;
      display: flex;
      @media (max-width: 338px) {
        font-size: 1.5rem;
      }
      @media (max-width: 415px) {
        font-size: 1.4rem;
      }
      @media (max-width: 320px) {
        font-size: 1.3rem;
      }
    }
    #Bite,
    #Rest {
      color: #dd5903;
    }
    span {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      @media (max-width: 338px) {
        font-size: 14px;
      }
    }
    hr {
      margin: 0;
      opacity: 0.4;
    }
  }
  .Selection {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }
  .HomeDropped,
  .PageDropped,
  .ShopDropped,
  .MenuDropped,
  .BlogDropped {
    width: 90px;
    position: absolute;
    padding-top: 15px;
    padding-top: 40px;
  }
  .Home,
  .Page,
  .Shop,
  .Menu,
  .Blog {
    color: #f2f2f2;
    background-color: #0d0d0d;
    margin-top: 20px;
    padding: 10px 0px;
    width: 150px;
    border-top: #dd5903 2px solid;
    border-bottom: #dd5903 2px solid;
    span {
      padding-left: 15px;
      :hover {
        transition-duration: 0.25s;
        color: #dd5903;
      }
    }
  }
  hr {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

const ArrowDown = styled.div`
  display: flex;
  position: relative;
  #arrow {
    position: relative;
    top: 1px;
    left: 3px;
  }
  :hover {
    cursor: pointer;
    animation-duration: 0.5s;
    color: #dd5903;
    a {
      cursor: pointer;
      animation-duration: 1s;
      color: #dd5903;
    }
    #arrow {
      cursor: pointer;
      color: #dd5903;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const TabletandMobileView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 1000px) {
    display: none;
  }
  .Container-Mobile {
    display: flex;
    cursor: pointer;
    transform: rotate(0.38turn);
  }
  .Mobile_Icon,
  .Mobile_Icon_2 {
    display: flex;
    flex-direction: column;
  }
  .Circle {
    width: 15px;
    height: 15px;
    background-color: #dd5903;
    border-radius: 50%;
    margin: 3.2px;
  }
  @media (max-width: 438px) {
    margin: 0px 20px;
  }
  @media (max-width: 400px) {
    margin: 0px 40px;
  }
`;
const ImageBackground = styled.div`
  background-image: url(${MainImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
export {
  NavContainer,
  ArrowDown,
  TabletandMobileView,
  NavLoader,
  ImageBackground,
};
