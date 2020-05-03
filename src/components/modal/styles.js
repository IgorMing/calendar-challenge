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
`;

export const Form = styled.form`
  .button-container {
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
  }

  .color-container {
    display: flex;
    justify-content: flex-end;

    .swatches-picker {
      width: 300px;
    }
  }

  .field {
    display: flex;
    align-items: flex-start;
    padding-bottom: 10px;

    label {
      flex: 1;
      padding-right: 5px;
      padding-top: 5px;
    }

    input[type='text'] {
      font-size: 16px;
      width: -webkit-fill-available;
      border: 1px solid gray;
      height: 25px;
    }

    > * {
      font-size: 16px;
      flex: 3;
    }
  }
`;
