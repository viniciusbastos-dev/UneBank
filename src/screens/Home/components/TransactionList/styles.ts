import styled from 'styled-components/native';

export const Container = styled.View``;

export const Row = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Poppins-Medium';
  font-size: 18px;
`;

export const Pressable = styled.TouchableOpacity.attrs({activeOpacity: 0.8})``;

export const More = styled.Text`
  color: #0066ff;
  font-family: 'Poppins-Medium';
`;
