import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  fill: string;
  height: number;
  width: number;
}

export const RecieveIcon = ({fill, width, height}: Props) => (
  <Svg width={width} height={height} fill="none">
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
  height: 18,
  width: 14,
  fill: '#Fff',
};
