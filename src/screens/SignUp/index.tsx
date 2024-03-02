import React, {useState} from 'react';
import * as S from './styles';
import * as SVG from '../../assets/SVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import SignHeader from '../../components/SignHeader';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Authentication} from '../../services/Auth';

const SignUp = ({navigation}: any) => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async () => {
    if (nomeCompleto && telefone && email && senha) {
      await Authentication.createAccount(nomeCompleto, telefone, email, senha);
    }
  };

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
          type="fullName"
          value={nomeCompleto}
          setValue={setNomeCompleto}
          icon={<SVG.UserIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Número de Telefone"
          type="phoneNumber"
          value={telefone}
          setValue={setTelefone}
          icon={<SVG.PhoneIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Endereço de Email"
          type="email"
          value={email.trim()}
          setValue={setEmail}
          keyboardType="email-address"
          icon={<SVG.EmailIcon />}
        />
        <S.SpaceY space={20} />

        <Input
          label="Senha"
          type="password"
          value={senha.trim()}
          setValue={setSenha}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          icon={<SVG.PasswordIcon />}
        />
        <S.SpaceY space={40} />

        <CustomButton text="Cadastre-se" onPress={onSubmit} />
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
