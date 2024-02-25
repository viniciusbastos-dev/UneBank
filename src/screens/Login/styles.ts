import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

const statusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  padding: 12px 24px;
  padding-top: ${statusBarHeight ? statusBarHeight + 12 : 24}px;
  flex: 1;
  background-color: #161622;
`;

export const Header = styled.View`
  gap: 50px;
`;

export const GoBackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: #1e1e2d;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Poppins-Medium';
  font-size: 32px;
`;

export const Form = styled.View``;

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
