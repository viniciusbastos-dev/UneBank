import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const EyeIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <G
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)">
      <Path d="M9.335 12.668a2.361 2.361 0 0 1 0-3.337c.92-.92 2.415-.92 3.337 0 .92.921.92 2.415 0 3.338a2.358 2.358 0 0 1-3.337 0Z" />
      <Path d="M18.34 11.002c0 .518-.124 1.031-.363 1.503-1.236 2.434-3.965 4-6.974 4-3.008 0-5.738-1.566-6.973-4a3.32 3.32 0 0 1-.363-1.503c0-.518.124-1.03.363-1.503C5.265 7.065 7.995 5.5 11.003 5.5c3.01 0 5.738 1.565 6.974 4 .239.472.363.984.363 1.502Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

EyeIcon.defaultProps = {
  size: 22,
  fill: '#A2A2A7',
};
