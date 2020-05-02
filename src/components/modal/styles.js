import styled from 'styled-components';

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  background-color: black;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ::after {
    content: 'X';
    color: white;
  }
`;

export const Form = styled.form`
  .field {
    display: flex;
    align-items: center;
    padding-bottom: 10px;

    label {
      flex: 1;
      padding-right: 5px;
    }

    > * {
      flex: 3;
    }
  }
`;
