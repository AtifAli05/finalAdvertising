import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DateLogo = (props) => (
  <Svg
    width={16}
    height={18}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.92 2.056H12C14.2091 2.056 16 3.84686 16 6.056V13.256C16 15.4651 14.2091 17.256 12 17.256H4C2.93913 17.256 1.92172 16.8346 1.17157 16.0844C0.421427 15.3343 0 14.3169 0 13.256V6.056C0 3.84686 1.79086 2.056 4 2.056H4.08V0.6C4.08 0.268629 4.34863 0 4.68 0C5.01137 0 5.28 0.268629 5.28 0.6V2.056H10.72V0.6C10.72 0.268629 10.9886 0 11.32 0C11.6514 0 11.92 0.268629 11.92 0.6V2.056ZM4.40003 6.928H11.6C11.9314 6.928 12.2 6.65937 12.2 6.328C12.2 5.99663 11.9314 5.728 11.6 5.728H4.40003C4.06866 5.728 3.80003 5.99663 3.80003 6.328C3.80003 6.65937 4.06866 6.928 4.40003 6.928Z"
      fill="#8E97AE"
    />
  </Svg>
);
export default DateLogo;