import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: #0066ff;
  border-radius: 16px;
  padding: 16px;
  align-items: center;
  height: 60px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
`;
