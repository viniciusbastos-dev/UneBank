import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 50 : 70}px;
  flex: 1;
  background-color: #161622;
  padding-right: 20px;
  padding-left: 20px;
`;

export const SpaceY = styled.View<{space: number}>`
  height: ${props => props.space}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: white;
`;

export const Column = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
