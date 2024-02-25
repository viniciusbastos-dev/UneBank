import React from 'react';
import * as S from './styles';
import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  label: string;
  icon?: React.ReactNode;
}

const Input: React.FC<Props> = ({label, icon, ...rest}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputWrap>
        {icon}
        <S.TextInput
          {...rest}
          placeholderTextColor={'#A2A2A7'}
          selectionColor="#0066FF"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </S.InputWrap>
    </S.Container>
  );
};

Input.defaultProps = {
  label: '',
};

export default Input;
