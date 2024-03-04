import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.View``;

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Greetings = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #7e848d;
`;

export const Name = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 18px;
  color: #fff;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 42px;
  height: 42px;
  background-color: #1e1e2d;
`;
