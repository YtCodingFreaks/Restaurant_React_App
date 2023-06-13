import styled from "styled-components";
import ImageBG from "../Images/CookingForm.jpg";
const Background = styled.div`
  background-image: url(${ImageBG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  @media (max-width: 620px) {
    height: 950px;
  }
`;
const Fader = styled.div`
  background-color: rgb(0, 0, 0, 0.55);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  label {
    display: flex;
    justify-content: center;
    color: #f2f2f2;
    font-size: 1.2rem;
  }
  span {
    color: #dd5903;
    font-size: 4.5rem;
    margin-top: 90px;
    @media (max-width: 620px) {
      margin-top: 20px;
    }
    @media (max-width: 620px) {
      font-size: 3.4rem;
    }
  }
  .ReservationInputs {
    width: 700px;
    @media (max-width: 760px) {
      width: 600px;
    }
    @media (max-width: 620px) {
      width: 300px;
    }
    input {
      width: 200px;
      height: 40px;
      border-radius: 5px;
      border: none;
      margin-left: 20px;
      padding-left: 10px;
      :focus {
        outline: none;
      }
    }
    input::placeholder,
    textarea::placeholder,
    input[type="date"],
    input[type="time"],
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="number"] {
      color: #dd5903;
    }
    .Input {
      margin: 20px 0px 0px 0px;
    }
    textarea {
      width: 550px;
      height: 100px;
      border-radius: 10px;
      border: none;
      padding: 10px;
      color: #dd5903;
      :focus {
        outline: none;
      }
      @media (max-width: 760px) {
        width: 500px;
      }
      @media (max-width: 620px) {
        width: 280px;
      }
    }
  }
`;

const FormSubmitter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 620px) {
    margin-left: 15px;
  }
  button {
    width: 440px;
    height: 55px;
    border-radius: 10px;
    border: none;
    background-color: #dd5903;
    color: #f2f2f2;
    margin-top: 10px;
    @media (max-width: 760px) {
      width: 400px;
    }
    @media (max-width: 620px) {
      width: 240px;
    }
    :hover {
      cursor: pointer;
      transition: 0.5s;
      color: #dd5903;
      background-color: #f2f2f2;
    }
  }
`;

export { Background, Fader, FormSubmitter };
