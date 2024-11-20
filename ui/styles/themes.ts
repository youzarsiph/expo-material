/**
 * Material themes
 */

import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper'

import { Colors } from './colors'

const AppLightTheme = {
  ...MD3LightTheme,
  colors: Colors.light.teal,
}

const AppDarkTheme = {
  ...MD3DarkTheme,
  colors: Colors.dark.teal,
}

export { AppLightTheme, AppDarkTheme }
