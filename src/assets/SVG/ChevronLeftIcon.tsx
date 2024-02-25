import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const ChevronLeftIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 4-6 6 6 6"
    />
  </Svg>
);

ChevronLeftIcon.defaultProps = {
  size: 20,
  fill: '#FFF',
};
