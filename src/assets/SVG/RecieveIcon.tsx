import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const RecieveIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.486 17.24V1M1 10.735l6.475 6.517 6.475-6.517"
    />
  </Svg>
);

RecieveIcon.defaultProps = {
  size: 16,
  fill: '#Fff',
};
