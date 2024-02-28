import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const UserIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M16.834 5.166A8.25 8.25 0 1 1 5.166 16.834 8.25 8.25 0 0 1 16.834 5.166Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12.823 7.63a2.579 2.579 0 1 1-3.646 3.647 2.579 2.579 0 0 1 3.646-3.647ZM16.231 17.378A7.194 7.194 0 0 0 11 15.125c-2.06 0-3.916.868-5.231 2.254"
    />
  </Svg>
);

UserIcon.defaultProps = {
  size: 22,
  fill: '#a2a2a7',
};
