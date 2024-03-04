import React from 'react';
import * as S from './styles';
import {SearchIcon} from '../../../../assets/SVG';

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ProfileImage
          source={require('../../../../assets/images/profileImage.png')}
        />
        <S.Column>
          <S.Greetings>Bem-vindo de volta,</S.Greetings>
          <S.Name>Vinícius</S.Name>
        </S.Column>
      </S.Wrapper>

      <S.ButtonContainer>
        <SearchIcon />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Header;
