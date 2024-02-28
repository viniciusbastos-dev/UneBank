import React from 'react';
import * as S from './styles';
import {ChevronLeftIcon} from '../../assets/SVG';

interface Props {
  title: string;
}

const SignHeader: React.FC<Props> = props => {
  return (
    <S.Header>
      <S.GoBackButton>
        <ChevronLeftIcon />
      </S.GoBackButton>
      <S.Title>{props.title}</S.Title>
    </S.Header>
  );
};

SignHeader.defaultProps = {
  title: '',
};

export default SignHeader;
