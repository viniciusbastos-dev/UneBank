import React from 'react';
import * as S from './styles';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

const Button: React.FC<Props> = ({text = '', loading, ...rest}) => {
  return (
    <S.Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <S.ButtonText>{text}</S.ButtonText>
      )}
    </S.Container>
  );
};

export default Button;
