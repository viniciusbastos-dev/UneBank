import React from 'react';
import * as S from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

const Home = () => {
  return (
    <S.Container>
      <FocusAwareStatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Title>Teste</S.Title>
    </S.Container>
  );
};

export default Home;
