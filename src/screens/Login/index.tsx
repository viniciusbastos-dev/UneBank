import React from 'react';
import * as S from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import * as SVG from '../../assets/SVG';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = () => {
  return (
    <S.Container>
      <FocusAwareStatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <S.GoBackButton>
          <SVG.ChevronLeftIcon />
        </S.GoBackButton>
        <S.Title>Sign In</S.Title>
      </S.Header>

      <S.Form>
        <S.SpaceY space={40} />
        <Input label="Email Address" icon={<SVG.EmailIcon />} />
        <S.SpaceY space={20} />
        <Input label="Password" icon={<SVG.PasswordIcon />} />
        <S.SpaceY space={40} />
        <CustomButton text="Entrar" />
        <S.SpaceY space={30} />
        <TouchableOpacity activeOpacity={0.9}>
          <S.Text>
            Sou usuário novo. <S.HighlightedText>Cadastro</S.HighlightedText>
          </S.Text>
        </TouchableOpacity>
      </S.Form>
    </S.Container>
  );
};

export default Login;
