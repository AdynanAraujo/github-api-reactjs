import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .search {
    padding: 10px;
    margin: 10px 0;
    background-color: rgb(253, 255, 255, 0.2);
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  }
  .searchUser:hover {
    color: blue;
  }
  input {
    border: none;
    font-size: 15px;
    color: black;
    outline: none;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;
