import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const PasswordIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <G
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)">
      <Path
        strokeWidth={1.3}
        d="M7.333 9.167v-2.75a3.667 3.667 0 0 1 7.334 0v2.75M15.584 19.25H6.417a1.833 1.833 0 0 1-1.833-1.833V11c0-1.013.82-1.833 1.833-1.833h9.166c1.013 0 1.834.82 1.834 1.833v6.417c0 1.013-.82 1.833-1.834 1.833Z"
      />
      <Path
        strokeWidth={1.5}
        d="M8.25 14.246c-.003 0-.004.002-.004.004 0 .003.001.005.004.005s.005-.002.005-.005c0-.002-.002-.004-.005-.004ZM11.005 14.246c-.003 0-.005.002-.005.004 0 .003.005.005.005.005.002 0 .004-.002.004-.005a.004.004 0 0 0-.004-.004ZM13.75 14.246c-.003 0-.004.002-.004.004 0 .003.001.005.004.005s.005-.002.005-.005a.004.004 0 0 0-.005-.004Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

PasswordIcon.defaultProps = {
  size: 22,
  fill: '#a2a2a7',
};
