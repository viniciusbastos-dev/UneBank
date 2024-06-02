import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  margin-left: 16px;
`;

export const Circle = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #1e1e2d;
  border-radius: 24px;
  height: 42px;
  width: 42px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Poppins-Medium';
`;

export const Subtitle = styled.Text`
  color: #ffffff80;
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;

export const Value = styled.Text`
  color: #fff;
  font-family: 'Poppins-Medium';
`;
