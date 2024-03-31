/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import * as S from './styles';
import {TextInputProps} from 'react-native';
import {EyeIcon} from '../../assets/SVG';
import {useController} from 'react-hook-form';

interface Props extends TextInputProps {
  name: string;
  control: any;
  error: any;
  label: string;
  showPassword?: boolean;
  togglePassword?: () => void;
  icon?: React.ReactNode;
}

const Input: React.FC<Props> = ({
  name,
  control,
  error,
  label,
  icon,
  showPassword,
  togglePassword,
  ...rest
}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputWrap>
        {icon}
        <S.TextInput
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          placeholderTextColor={'#A2A2A7'}
          selectionColor="#0066FF"
          autoCorrect={false}
          autoCapitalize="none"
        />
        {showPassword !== undefined && (
          <S.Pressable onPress={togglePassword}>
            <EyeIcon />
          </S.Pressable>
        )}
      </S.InputWrap>
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
};

Input.defaultProps = {
  label: '',
};

export default Input;
