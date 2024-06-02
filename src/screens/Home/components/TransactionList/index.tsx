import React from 'react';
import * as S from './styles';
import TransactionCard from './components/TransactionCard';

const TransactionList = () => {
  return (
    <S.Container>
      <S.Row>
        <S.Title>Transações</S.Title>
        <S.Pressable>
          <S.More>Ver mais</S.More>
        </S.Pressable>
      </S.Row>
      <TransactionCard />
    </S.Container>
  );
};

export default TransactionList;
