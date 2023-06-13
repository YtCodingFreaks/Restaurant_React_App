import styled from "styled-components";

const ContainerPhone = styled.div`
  color: #f2f2f2;
  position: fixed;
  right: 0px;
  top: 0;
  height: 100vh;
  width: 180px;
  z-index: 1000;
  user-select: none;
  .ExitContainer {
    display: flex;
    justify-content: end;
    margin: 10px 10px 0px 0px;
  }
  .Dropped {
    display: flex;
    flex-direction: column;
    span {
      :hover {
        transition: 0.4s;
        color: #dd5903;
      }
    }
  }
  ul {
    cursor: pointer;
    list-style: none;
    font-size: 1.13rem;
    li {
      display: flex;
      flex-direction: row;
      margin-top: 15px;
      cursor: pointer;
      font-size: 1.9rem;
      :hover {
        transition: 0.4s;
        color: #dd5903;
      }
    }
  }
  #DropArrow {
    position: relative;
    top: 7px;
  }
  background-color: rgba(0, 0, 0, 0.83);
`;

export { ContainerPhone };
