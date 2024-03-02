import React from 'react';
import * as S from './styles';
import {ChevronLeftIcon} from '../../assets/SVG';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
}

const SignHeader: React.FC<Props> = props => {
  const navigation = useNavigation();
  return (
    <S.Header>
      <S.GoBackButton onPress={() => navigation.goBack()}>
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
