import styled from 'styled-components';

export default styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Containers = {
  Root: styled.div`
    display: flex;
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
