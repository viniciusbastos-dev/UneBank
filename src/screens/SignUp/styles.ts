import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

const statusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  padding: 12px 24px;
  padding-top: ${statusBarHeight ? statusBarHeight + 12 : 24}px;
  flex: 1;
  background-color: #161622;
`;

export const Text = styled.Text`
  color: #a2a2a7;
  text-align: center;
`;

export const HighlightedText = styled.Text`
  color: #0066ff;
`;

export const SpaceY = styled.View<any>`
  height: ${props => props.space}px;
`;
