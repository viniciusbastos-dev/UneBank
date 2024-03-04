import Svg, {Path} from 'react-native-svg';
import React from 'react';

interface Props {
  fill: string;
}

export const ChipIcon = ({fill}: Props) => (
  <Svg width={29} height={25} viewBox="0 0 29 25" fill="none">
    <Path
      stroke={fill}
      d="M14.5 15.5c0 2.061-.074 3.718-2 5M14.574 9.283c-.06-3.443-.13-5.27 1.426-5.783"
    />
    <Path
      stroke={fill}
      d="M.5 4A3.5 3.5 0 0 1 4 .5h21A3.5 3.5 0 0 1 28.5 4v17a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 21V4Z"
    />
    <Path
      stroke={fill}
      d="M3.5 5A1.5 1.5 0 0 1 5 3.5h19A1.5 1.5 0 0 1 25.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5Z"
    />
    <Path stroke={fill} d="M3.5 7.5h7v9h-7v-9Z" />
    <Path
      stroke={fill}
      d="M3.5 12.5h7v4h-7v-4ZM10 9h9m0 6h-9M18.5 12.5h7v4h-7v-4Z"
    />
    <Path stroke={fill} d="M18.5 7.5h7v9h-7v-9Z" />
  </Svg>
);

ChipIcon.defaultProps = {
  fill: '#4B5B98',
};
