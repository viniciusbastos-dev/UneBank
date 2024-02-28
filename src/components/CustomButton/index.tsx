import React from 'react';
import * as S from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  text: string;
}

const CustomButton: React.FC<Props> = ({text, ...rest}) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Container>
  );
};

CustomButton.defaultProps = {
  text: '',
};

export default CustomButton;
