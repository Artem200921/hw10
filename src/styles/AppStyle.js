import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-top: 10px;
    li {
      h4 {
        font-size: 20px;
        font-weight: bold;
      }
        p {
        font-size: 15px;
        font-weight: bold;
        }
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        height: 25px;
        width: 25px;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        background-color: #ff6b6b;
        color: white;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    row-gap: 10px;
    button {
      background-color: #4caf50;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      text-transform: uppercase;
      height: 30px;
  }
`;
