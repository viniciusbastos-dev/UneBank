import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  gap: 8px;
`;

export const ButtonText = styled.Text`
  color: #a2a2a7;
  font-family: 'Poppins-Regular';
  font-size: 13px;
`;
export const Pressable = styled.TouchableOpacity.attrs({activeOpacity: 0.9})`
  width: 54px;
  height: 54px;
  background-color: #1e1e2d;
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`;
