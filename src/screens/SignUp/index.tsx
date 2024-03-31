/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import * as S from './styles';
import * as SVG from '../../assets/SVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import SignHeader from '../../components/SignHeader';
import Input from '../../components/Input';
import Button from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Resolver, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {UserAPI} from '../../services/User';
import {isAxiosError} from 'axios';
import {showMessage} from 'react-native-flash-message';

const SignUpSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Nome completo é obrigatório')
    .regex(
      /^[^\d]+ [^\d]+$/,
      'Nome completo deve ter pelo menos um nome e um sobrenome',
    ),
  phone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .regex(
      /^(\d{2})(\d{5})(\d{4})$/,
      'Telefone deve estar no formato (XX) XXXXX-XXXX',
    ),
  email: z
    .string()
    .email('Digite um endereço de email válido')
    .min(1, 'Email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});
const signUpResolver: Resolver = zodResolver(SignUpSchema);

const SignUp = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: signUpResolver,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await UserAPI.createUser({
        ...data,
      });
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
      showMessage({type: 'success', message: 'Conta criada com sucesso!'});
    } catch (error) {
      if (isAxiosError(error)) {
        showMessage({type: 'danger', message: error?.response?.data?.error});
      }
    }
  };

  return (
    <S.Container>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <FocusAwareStatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <SignHeader title="Sign Up" />
        <S.SpaceY space={40} />

        <Input
          label="Nome Completo"
          name="fullName"
          control={control}
          error={errors.fullName}
          icon={<SVG.UserIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Número de Telefone"
          name="phone"
          control={control}
          error={errors.phone}
          icon={<SVG.PhoneIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Endereço de Email"
          name="email"
          control={control}
          error={errors.email}
          keyboardType="email-address"
          icon={<SVG.EmailIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Senha"
          name="password"
          control={control}
          error={errors.password}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          icon={<SVG.PasswordIcon />}
        />
        <S.SpaceY space={40} />

        <Button text="Cadastre-se" onPress={handleSubmit(onSubmit)} />
        <S.SpaceY space={30} />

        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          activeOpacity={0.9}>
          <S.Text>
            Já tem conta? <S.HighlightedText>Entrar</S.HighlightedText>
          </S.Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </S.Container>
  );
};

export default SignUp;
