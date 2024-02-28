import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

interface Props {
  fill: string;
  size: number;
}

export const PhoneIcon = ({fill, size}: Props) => (
  <Svg width={size} height={size} fill="none">
    <G clipPath="url(#a)">
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M9.951 12.049a11.581 11.581 0 0 1-2.418-3.492.686.686 0 0 1 .152-.758l.751-.75c.615-.615.615-1.485.078-2.022L7.438 3.95a1.833 1.833 0 0 0-2.593 0l-.597.597c-.68.68-.963 1.66-.78 2.631.453 2.396 1.845 5.018 4.09 7.263s4.867 3.636 7.263 4.09c.971.183 1.951-.1 2.63-.78l.597-.597a1.833 1.833 0 0 0 0-2.592l-1.075-1.075a1.374 1.374 0 0 0-1.944 0l-.828.828a.686.686 0 0 1-.758.153 11.605 11.605 0 0 1-3.492-2.42Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={fill} d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

PhoneIcon.defaultProps = {
  size: 22,
  fill: '#a2a2a7',
};
