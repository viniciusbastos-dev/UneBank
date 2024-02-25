import React, {ReactNode} from 'react';
import * as S from './styles';

interface DataProps {
  id: string;
  title: string;
  description: string;
  image: ReactNode | any;
}

interface Props {
  item: DataProps;
}

const OnboardingItem: React.FC<Props> = props => {
  return (
    <S.Container>
      {props?.item?.image}
      <S.TextWrap>
        <S.Title>{props?.item?.title}</S.Title>
        <S.Description>{props?.item?.description}</S.Description>
      </S.TextWrap>
    </S.Container>
  );
};

export default OnboardingItem;
