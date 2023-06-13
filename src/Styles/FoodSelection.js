import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(42, 42, 41);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
`;
const Buttons = styled.div`
  button {
    margin-left: 10px;
    padding: 15px 40px;
    border-radius: 8px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    color: #dd5903;
    @media (max-width: 1050px) {
      padding: 15px 25px;
    }
    @media (max-width: 840px) {
      padding: 15px 20px;
    }
    @media (max-width: 760px) {
      display: none;
    }
  }
  #current {
    background-color: #dd5903;
    color: #f2f2f2;
  }
`;
const Meals = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Foods = styled.div`
  width: 200px;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
  span {
    color: #f2f2f2;
  }
  img {
    width: 200px;
    height: 100%;
    margin: 12px 0px;
    :hover {
      transform: scale(1.1);
    }
  }
  button {
    margin-top: 10px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 8px;
    color: #dd5903;
    width: 100px;
    height: 35px;
    cursor: pointer;
    :hover {
      background-color: #dd5903;
      color: #f2f2f2;
      transition-duration: 0.35s;
    }
  }
`;
export { Container, Buttons, Meals, Foods };
