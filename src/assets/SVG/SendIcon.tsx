import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const SendIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      d="M7.486 1.013v16.24M1 7.517L7.475 1l6.475 6.517"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

SendIcon.defaultProps = {
  size: 16,
  fill: '#FFF',
};
