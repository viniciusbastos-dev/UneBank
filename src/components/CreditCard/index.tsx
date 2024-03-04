import React from 'react';
import * as S from './styles';
import * as SVG from '../../assets/SVG';

const CreditCard = () => {
  return (
    <S.Container>
      <S.Background>
        <SVG.WorldMap />
      </S.Background>

      <S.Row>
        <SVG.ChipIcon />
        <SVG.NFCIcon />
      </S.Row>
      <S.SpaceY space={20} />

      <S.CardNumber>4562 1122 4595 7852</S.CardNumber>
      <S.SpaceY space={10} />

      <S.CardName>AR Jhonson</S.CardName>
      <S.SpaceY space={10} />

      <S.BottomWrapper>
        <S.BottomRow>
          <S.Column>
            <S.Subtitle>Expiry Date</S.Subtitle>
            <S.Number>10/2024</S.Number>
          </S.Column>
          <S.Column>
            <S.Subtitle>CVV</S.Subtitle>
            <S.Number>659</S.Number>
          </S.Column>
        </S.BottomRow>

        <S.WrapFlag>
          <SVG.MasterCardIcon />
          <S.FlagName>Mastercard</S.FlagName>
        </S.WrapFlag>
      </S.BottomWrapper>
    </S.Container>
  );
};

export default CreditCard;
