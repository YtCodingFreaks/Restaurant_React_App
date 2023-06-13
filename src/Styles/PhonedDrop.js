import styled from "styled-components";

const PhoneDisplay = styled.div`
  color: #f2f2f2;
  margin-left: 15px;
  .Dropped {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 760px) {
    display: none;
  }
  .Mobile_Selection {
    padding: 10px 0px;
    color: #dd5903;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 30px;
    width: 130px;
    border-radius: 10px 10px 0px 0px;
    text-transform: uppercase;
    cursor: pointer;
    hr {
      width: 128px;
      opacity: 0.4;
    }
    span {
      margin-left: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
    }
  }
  #DropArrow {
    position: relative;
    top: 1.5px;
    :hover {
      color: #f2f2f2;
    }
  }
  .Dropped {
    display: flex;
    align-items: center;
    background-color: black;
    height: 320px;
    width: 130px;
    border-radius: 0px 0px 10px 10px;
    span {
      margin-top: 8px;
      :hover {
        color: #dd5903;
        cursor: pointer;
      }
    }
    hr {
      width: 105px;
      opacity: 0.08;
    }
  }
`;
export { PhoneDisplay };
