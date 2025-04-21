import {SvgProps} from 'react-native-svg';
export type svgIcon = React.FC<SvgProps>;

export interface ColorTheme {
  primary: string;
  primaryLight: string;
  primaryLighter: string;
  primaryLightest: string;
  primaryDark: string;
  primaryDarker: string;
  whitePrimary: string;
  primaryWhite: string;
  background: string;
  darkGrayWhite: string;
  whiteBlack: string;
  blackWhite: string;
  primaryMiddlePrimary: string;
  primaryLightMiddlePrimary: string;
  black: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
  rootPadding: number;
}

export interface Dimensions {
  normalIconSize: number;
  mediumIconSize: number;
  largeIconSize: number;
  normalFontSize: number;
  xsmallFontSize: number;
  smallFontSize: number;
  headingFontSize: number;
  mediumHeadingFontSize: number;
}

export interface IconTheme {
  lightDarkMode: svgIcon;
}

export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
  dimensions: Dimensions;
  icon: IconTheme;
  isLightTheme: boolean;
  isMobile: boolean;
}
