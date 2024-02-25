import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

export const TextWrap = styled.View`
  max-width: 300px;
  gap: 10px;
  margin-top: 36px;
  margin-bottom: 52px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: 'Poppins-SemiBold';
  color: #fff;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  color: #7e848d;
  text-align: center;
`;
