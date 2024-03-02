import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const HomeIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.3 13.918H6.564"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 19H6a5 5 0 0 1-5-5V9.2a5 5 0 0 1 1.877-3.904l4-3.2a5 5 0 0 1 6.247 0l4 3.2A5 5 0 0 1 19 9.2V14a5 5 0 0 1-5 5Z"
      clipRule="evenodd"
    />
  </Svg>
);

HomeIcon.defaultProps = {
  size: 20,
  fill: '#8B8B94',
};
