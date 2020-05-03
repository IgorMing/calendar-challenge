import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid gray;
  border-radius: 25px;
  background-color: white;
  margin-bottom: 15px;

  .title {
    border-bottom: 1px solid gray;
    margin-left: 15px;
    margin-right: 15px;

    h3 {
      font-weight: bold;
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    padding: 15px;

    .left-box {
      flex: 2;

      .date,
      .city {
        color: gray;
        display: block;
        font-style: italic;
      }
    }

    .right-box {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end;
      flex: 1;

      .button {
        cursor: pointer;
      }
    }
  }
`;
