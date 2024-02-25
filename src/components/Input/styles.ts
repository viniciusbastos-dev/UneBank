import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const InputWrap = styled.View`
  overflow: hidden;
  align-items: center;
  flex-direction: row;

  border-bottom-width: 2px;
  border-bottom-color: #232533;
`;

export const TextInput = styled.TextInput`
  padding-left: 14px;
  padding-right: 14px;
  color: white;
  width: 100%;
`;

export const Label = styled.Text`
  color: #a2a2a7;
  font-family: 'Poppins-Regular';
`;
