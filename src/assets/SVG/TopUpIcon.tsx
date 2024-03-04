import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const TopUpIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.898 24.083v-15.5M7.398 13.083l4.5-4.68 4 4.68"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.232 16.167h2.773a3.799 3.799 0 0 0 3.792-3.792 3.799 3.799 0 0 0-3.792-3.792h-.471V7.5c0-3.586-2.914-6.5-6.5-6.5-3.225 0-5.899 2.36-6.406 5.442C3.053 6.572 1 8.684 1 11.292a4.875 4.875 0 0 0 4.875 4.875h1.69"
    />
  </Svg>
);

TopUpIcon.defaultProps = {
  size: 24,
  fill: '#fff',
};
