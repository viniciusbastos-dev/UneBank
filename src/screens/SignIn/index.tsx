/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import * as S from './styles';
import * as SVG from '../../assets/SVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignHeader from '../../components/SignHeader';
import {Resolver, useForm} from 'react-hook-form';
import {useAuth} from '../../contexts/AuthContext';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const SignInSchema = z.object({
  email: z
    .string()
    .email('Digite um endereço de email válido')
    .min(1, 'Email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});
const signUpResolver: Resolver = zodResolver(SignInSchema);

const SignIn = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: signUpResolver,
  });
  const [showPassword, setShowPassword] = useState(false);
  const {signIn, loading} = useAuth();

  const onSubmit = async (data: any) => {
    signIn(data);
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
        <SignHeader title="Sign In" />
        <S.Form>
          <S.SpaceY space={40} />
          <Input
            label="Endereço de Email"
            name="email"
            control={control}
            error={errors.email}
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
          <Button
            text="Entrar"
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          />
          <S.SpaceY space={30} />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            activeOpacity={0.9}>
            <S.Text>
              Sou usuário novo. <S.HighlightedText>Cadastro</S.HighlightedText>
            </S.Text>
          </TouchableOpacity>
        </S.Form>
      </KeyboardAwareScrollView>
    </S.Container>
  );
};

export default SignIn;
