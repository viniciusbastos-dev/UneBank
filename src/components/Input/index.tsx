/* eslint-disable @typescript-eslint/no-shadow */
import React, {Dispatch, SetStateAction, useState} from 'react';
import * as S from './styles';
import {TextInputProps} from 'react-native';
import {EyeIcon} from '../../assets/SVG';

interface Props extends TextInputProps {
  label: string;
  type: 'fullName' | 'email' | 'password' | 'phoneNumber';
  showPassword?: boolean;
  togglePassword?: () => void;
  icon?: React.ReactNode;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input: React.FC<Props> = ({
  label,
  type,
  icon,
  showPassword,
  togglePassword,
  setValue,
  ...rest
}) => {
  const [error, setError] = useState<string | null>(null);

  const validateInput = (value: string, type?: string): boolean => {
    switch (type) {
      case 'fullName':
        return /^[a-zA-Z ]+$/.test(value);
      case 'email':
        return /\S+@\S+\.\S+/.test(value);
      case 'password':
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(value);
      case 'phoneNumber':
        return /^\(\d{2}\) \d{5}-\d{4}$/.test(value);
      default:
        return true;
    }
  };

  const handleInputChange = (value: string) => {
    setValue(value);
    if (type) {
      const isValid = validateInput(value, type);

      if (!isValid) {
        setError(getErrorMessage(type));
      } else {
        setError(null);
      }
    }
  };

  const getErrorMessage = (type: string): string => {
    switch (type) {
      case 'fullName':
        return 'Nome completo inválido. Apenas letras e espaços são permitidos.';
      case 'email':
        return 'Endereço de e-mail inválido.';
      case 'password':
        return 'Senha inválida. A senha deve conter pelo menos 5 caracteres, uma letra e um número.';
      case 'phoneNumber':
        return 'Número de telefone inválido. O número de telefone deve conter 11 dígitos.';
      default:
        return '';
    }
  };

  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phoneNumber; // Se não corresponder ao padrão, retorna o número de telefone original
  };

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
          onChangeText={value =>
            handleInputChange(
              type === 'phoneNumber' ? formatPhoneNumber(value) : value,
            )
          }
        />
        {showPassword !== undefined && (
          <S.Pressable onPress={togglePassword}>
            <EyeIcon />
          </S.Pressable>
        )}
      </S.InputWrap>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  );
};

Input.defaultProps = {
  label: '',
};

export default Input;
