import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  background-color: #2a2c3c;
  border-radius: 16px;
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Column = styled.View``;

export const Background = styled.View`
  position: absolute;
  align-self: center;
`;

export const SpaceY = styled.View<any>`
  height: ${props => props.space}px;
`;

export const CardNumber = styled.Text`
  letter-spacing: 2px;
  font-family: 'Inter-Regular';
  font-size: 26px;
  color: #fff;
`;

export const CardName = styled.Text`
  font-family: 'Inter-Regular';
  color: #fff;
`;

export const Subtitle = styled.Text`
  color: #a2a2a7;
  font-size: 9px;
  font-family: 'Inter-Regular';
`;

export const Number = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Inter-Regular';
`;

export const BottomRow = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const BottomWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const WrapFlag = styled.View`
  align-items: center;
  gap: 2px;
`;

export const FlagName = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #fff;
`;
