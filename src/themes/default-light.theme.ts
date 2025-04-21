import {icons, lightThemeColors} from '@constants';
import {
  ColorTheme,
  Dimensions,
  IconTheme,
  SpacingTheme,
  Theme,
} from '@app-interfaces';
import {HelperService} from '@services';

const isMobile = HelperService.getInstance().getIsDeviceMobile();

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  primary: lightThemeColors.primary,
  primaryLight: lightThemeColors.primaryLight,
  primaryLighter: lightThemeColors.primaryLighter,
  primaryLightest: lightThemeColors.primaryLightest,
  primaryDark: lightThemeColors.primaryDark,
  primaryDarker: lightThemeColors.primaryDarker,
  whitePrimary: lightThemeColors.whitePrimary,
  primaryWhite: lightThemeColors.primaryWhite,
  background: lightThemeColors.background,
  darkGrayWhite: lightThemeColors.darkGrayWhite,
  whiteBlack: lightThemeColors.whitePrimary,
  blackWhite: lightThemeColors.primaryWhite,
  primaryMiddlePrimary: lightThemeColors.primaryMiddlePrimary,
  primaryLightMiddlePrimary: lightThemeColors.primaryLightMiddlePrimary,
  black: lightThemeColors.primary,
};

const DEFAULT_LIGHT_ICON_THEME: IconTheme = {
  lightDarkMode: icons.lightIcons.lightDarkMode,
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
  rootPadding: 12,
};

const DEFAULT_LIGHT_DIMENSTIONS: Dimensions = {
  largeIconSize: 48,
  mediumIconSize: 36,
  normalIconSize: 24,
  xsmallFontSize: 12,
  smallFontSize: 14,
  normalFontSize: 16,
  headingFontSize: 24,
  mediumHeadingFontSize: 20,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';
export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
  dimensions: DEFAULT_LIGHT_DIMENSTIONS,
  icon: DEFAULT_LIGHT_ICON_THEME,
  isLightTheme: true,
  isMobile,
};
