import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

console.log(width, height);

export const Slides = [
  {
    id: '1',
    title: 'Pagamento mais rápido do mundo',
    description:
      'Escolha entre diversas formas de pagamento e finalize suas transações rapidamente',
    image: require('../../assets/images/Onboarding1.png'),
  },
  {
    id: '2',
    title: 'A Plataforma mais Segura para o Cliente',
    description:
      'Use recursos de segurança como impressão digital, reconhecimento facial e mais para se manter seguro',
    image: require('../../assets/images/Onboarding2.png'),
  },
  {
    id: '3',
    title: 'Aproveite a praticidade do UneBank',
    description:
      'Pague por tudo o que precisa com facilidade e conveniência, sem sair do aplicativo',
    image: require('../../assets/images/Onboarding3.png'),
  },
];
