import React from 'react';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const EmailIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <G
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)">
      <Path d="m6.874 8.937 2.682 1.654a2.751 2.751 0 0 0 2.888 0l2.683-1.654" />
      <Path d="M2.747 7.58a3 3 0 0 1 3-3h10.506a3 3 0 0 1 3 3v6.84a3 3 0 0 1-3 3H5.747a3 3 0 0 1-3-3V7.58Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

EmailIcon.defaultProps = {
  size: 22,
  fill: '#A2A2A7',
};
