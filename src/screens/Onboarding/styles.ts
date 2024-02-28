import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

const statusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  padding-top: ${statusBarHeight}px;
  flex: 1;
  background-color: #161622;
`;

export const Content = styled.View`
  flex: 3;
`;

export const FooterWrap = styled.View`
  padding: 0 20px 30px 20px;
`;
