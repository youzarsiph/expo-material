/**
 * Material themes
 */

import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper'

import { Colors } from './colors'

const AppLightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 5,
  colors: Colors.light.violet,
}

const AppDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 5,
  colors: Colors.dark.violet,
}

export { AppLightTheme, AppDarkTheme }
