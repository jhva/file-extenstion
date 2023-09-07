import styled from 'styled-components';

export const CustomBox = styled.div`
  min-height: 350px;
  height: 100%;
  overflow: scroll;
  border-radius: 5px;
  max-width: 500px;
  width: 500px;
  border: 1px solid #ececec;
  padding: 10px;
`;
export const CustomFileExtensionBoxStyle = styled.div`
  border-radius: 5px;
  width: 80px;
  display: flex;
  align-items: center;
  padding: 10px;

  border: 1px solid #ececec;
  overflow-y: scroll;
  span {
    font-size: 20px;
    cursor: pointer;
  }
  p {
    color: gray;
  }
`;
