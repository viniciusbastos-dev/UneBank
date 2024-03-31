import React from 'react';
import * as S from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import CreditCard from '../../components/CreditCard';
import Header from './components/Header';
import * as SVG from '../../assets/SVG';
import MenuButton from './components/MenuButton';
import {useAuth} from '../../contexts/AuthContext';
import {Button} from 'react-native';

const Home = () => {
  const {signOut} = useAuth();

  return (
    <S.Container>
      <FocusAwareStatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <S.SpaceY space={32} />
      <CreditCard />
      <S.SpaceY space={30} />

      <S.Row>
        <MenuButton text="Enviar" icon={<SVG.SendIcon />} />
        <MenuButton text="Receber" icon={<SVG.RecieveIcon />} />
        <MenuButton text="Empréstimo" icon={<SVG.LoanIcon />} />
        <MenuButton text="Recarga" icon={<SVG.TopUpIcon />} />
      </S.Row>
      <Button title="Teste" onPress={() => signOut()} />
    </S.Container>
  );
};

export default Home;
