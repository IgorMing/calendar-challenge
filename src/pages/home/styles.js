import styled from 'styled-components';

export default styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const AddButton = styled.button`
  font-size: 20px;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const Containers = {
  Root: styled.div`
    display: flex;
    padding-top: 25px;
  `,
  Calendar: styled.div`
    flex: 3;
  `,
  Reminders: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    background-color: #f6f6b8;
    border-radius: 10px;
    margin-left: 20px;
    width: 100%;
  `
};
