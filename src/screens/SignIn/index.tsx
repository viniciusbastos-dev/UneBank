/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as S from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import * as SVG from '../../assets/SVG';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignHeader from '../../components/SignHeader';

const SignIn = ({navigation}: any) => {
  return (
    <S.Container>
      <KeyboardAwareScrollView contentContainerStyle={{paddingBottom: 20}}>
        <FocusAwareStatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <SignHeader title="Sign In" />
        <S.Form>
          <S.SpaceY space={40} />
          <Input label="Email Address" icon={<SVG.EmailIcon />} />
          <S.SpaceY space={20} />
          <Input label="Password" icon={<SVG.PasswordIcon />} />
          <S.SpaceY space={40} />
          <CustomButton text="Entrar" />
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
