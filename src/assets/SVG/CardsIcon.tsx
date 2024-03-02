import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const CardsIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fill={fill}
      d="M5.5 4.75a.75.75 0 0 0 0 1.5H10a.75.75 0 0 0 0-1.5H5.5ZM16.5 9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M0 6a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v7a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6Zm6-4.5h8A4.5 4.5 0 0 1 18.5 6v.185h-2.513a3.782 3.782 0 1 0 0 7.565h2.451A4.501 4.501 0 0 1 14 17.5H6A4.5 4.5 0 0 1 1.5 13V6A4.5 4.5 0 0 1 6 1.5Zm12.5 10.75V7.685h-2.513a2.283 2.283 0 1 0 0 4.565H18.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

CardsIcon.defaultProps = {
  size: 20,
  fill: '#8B8B94',
};
