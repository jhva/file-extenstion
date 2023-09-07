import styled from 'styled-components';
import { FlexContainer } from '../components/container/styles';

export const RootContainerStyle = styled.div`
  max-width: 1050px;
  width: 100%;
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  flex-direction: column;
`;

export const FlexWrapContainer = styled(FlexContainer)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
