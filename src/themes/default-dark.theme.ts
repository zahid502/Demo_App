import {darkThemeColors, icons} from '@constants';
import {
  ColorTheme,
  Dimensions,
  IconTheme,
  SpacingTheme,
  Theme,
} from '@app-interfaces';
import {HelperService} from '@services';

const isMobile = HelperService.getInstance().getIsDeviceMobile();

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  primary: darkThemeColors.primary,
  primaryLight: darkThemeColors.primaryLight,
  primaryLighter: darkThemeColors.primaryLighter,
  primaryLightest: darkThemeColors.primaryLightest,
  primaryDark: darkThemeColors.primaryDark,
  primaryDarker: darkThemeColors.primaryDarker,
  whitePrimary: darkThemeColors.whitePrimary,
  primaryWhite: darkThemeColors.primaryWhite,
  background: darkThemeColors.background,
  darkGrayWhite: darkThemeColors.darkGrayWhite,
  whiteBlack: darkThemeColors.whitePrimary,
  blackWhite: darkThemeColors.primaryWhite,
  primaryMiddlePrimary: darkThemeColors.primaryMiddlePrimary,
  primaryLightMiddlePrimary: darkThemeColors.primaryLightMiddlePrimary,
  black: darkThemeColors.primary,
};

const DEFAULT_DARK_ICON_THEME: IconTheme = {
  lightDarkMode: icons.darkIcons.lightDarkMode,
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
  rootPadding: 12,
};

const DEFAULT_DARK_DIMENSTIONS: Dimensions = {
  largeIconSize: 48,
  mediumIconSize: 36,
  normalIconSize: 24,
  xsmallFontSize: 12,
  smallFontSize: 14,
  normalFontSize: 16,
  headingFontSize: 24,
  mediumHeadingFontSize: 20,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';
export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
  dimensions: DEFAULT_DARK_DIMENSTIONS,
  icon: DEFAULT_DARK_ICON_THEME,
  isLightTheme: false,
  isMobile,
};
