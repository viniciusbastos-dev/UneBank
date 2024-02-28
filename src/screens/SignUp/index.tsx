import React, {useState} from 'react';
import * as S from './styles';
import * as SVG from '../../assets/SVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import SignHeader from '../../components/SignHeader';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp = ({navigation}: any) => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Container>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <FocusAwareStatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <SignHeader title="Sign Up" />
        <S.SpaceY space={40} />

        <Input
          label="Nome Completo"
          value={nomeCompleto}
          onChangeText={value => setNomeCompleto(value)}
          icon={<SVG.UserIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Número de Telefone"
          value={telefone}
          onChangeText={value => setTelefone(value)}
          icon={<SVG.PhoneIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Endereço de Email"
          value={email.trim()}
          onChangeText={value => setEmail(value.trim())}
          keyboardType="email-address"
          icon={<SVG.EmailIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Senha"
          value={senha.trim()}
          onChangeText={(value: any) => setSenha(value.trim())}
          secureTextEntry={!showPassword}
          icon={<SVG.PasswordIcon />}
        />
        <S.SpaceY space={40} />

        <CustomButton text="Cadastre-se" />
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
