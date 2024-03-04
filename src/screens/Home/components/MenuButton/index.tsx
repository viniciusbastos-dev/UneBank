import React from 'react';
import * as S from './styles';

interface Props {
  text: string;
  icon: React.ReactNode;
}

const MenuButton: React.FC<Props> = ({text, icon}) => {
  return (
    <S.Container>
      <S.Pressable>{icon}</S.Pressable>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Container>
  );
};

MenuButton.defaultProps = {
  text: '',
};

export default MenuButton;
