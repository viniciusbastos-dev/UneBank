import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const StatisticsIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 4a7.5 7.5 0 1 0 7.5 7.5H8.5V4Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 8a7 7 0 0 0-7-7v7h7Z"
      clipRule="evenodd"
    />
  </Svg>
);

StatisticsIcon.defaultProps = {
  size: 20,
  fill: '#8B8B94',
};
