import React from 'react';
import * as S from './styles';
import * as SVG from '../../../../../../assets/SVG/AppleIcon';

const TransactionCard = () => {
  return (
    <S.Container>
      <S.Circle>
        <SVG.AppleIcon />
      </S.Circle>
      <S.Column>
        <S.Title>Apple Store</S.Title>
        <S.Subtitle>Entretenimento</S.Subtitle>
      </S.Column>
      <S.Value>-R$ 5,70</S.Value>
    </S.Container>
  );
};

export default TransactionCard;
