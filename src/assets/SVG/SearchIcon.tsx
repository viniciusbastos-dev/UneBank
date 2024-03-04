import Svg, {Path} from 'react-native-svg';
import React from 'react';

interface Props {
  fill: string;
  size: number;
}

export const SearchIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M13.095 5.699a5.23 5.23 0 11-7.397 7.396 5.23 5.23 0 017.397-7.396zM15.834 15.833l-2.742-2.741"
      stroke={fill}
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

SearchIcon.defaultProps = {
  size: 20,
  fill: '#FFF',
};
