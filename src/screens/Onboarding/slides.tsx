import React from 'react';
import * as SVG from '../../assets/SVG';

export const Slides = [
  {
    id: '1',
    title: 'Pagamento mais rápido do mundo',
    description:
      'Escolha entre diversas formas de pagamento e finalize suas transações rapidamente',
    image: <SVG.OnboardingImage1 margin={40} />,
  },
  {
    id: '2',
    title: 'A Plataforma mais Segura para o Cliente',
    description:
      'Use recursos de segurança como impressão digital, reconhecimento facial e mais para se manter seguro',
    image: <SVG.OnboardingImage2 margin={40} />,
  },
  {
    id: '3',
    title: 'Aproveite a praticidade do UneBank',
    description:
      'Pague por tudo o que precisa com facilidade e conveniência, sem sair do aplicativo',
    image: <SVG.OnboardingImage3 margin={40} />,
  },
];
