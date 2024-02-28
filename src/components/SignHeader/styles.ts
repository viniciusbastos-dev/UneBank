import styled from 'styled-components/native';

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
