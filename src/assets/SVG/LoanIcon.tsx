import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const LoanIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M12 6v1.5M12 18v-1.5M14.984 9.6a2.243 2.243 0 0 0-2.234-2.1h-1.644a2.106 2.106 0 0 0-.512 4.15l2.811.705a2.106 2.106 0 0 1-.512 4.15h-1.644A2.244 2.244 0 0 1 9.013 14.4"
    />
    <Path
      stroke={fill}
      strokeWidth={1.5}
      d="M.75 12C.75 5.787 5.787.75 12 .75S23.25 5.787 23.25 12 18.213 23.25 12 23.25.75 18.213.75 12Z"
    />
  </Svg>
);

LoanIcon.defaultProps = {
  size: 24,
  fill: '#FFF',
};
