import {
  DarkTheme as NavDarkTheme,
  DefaultTheme as NavLightTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper'
import 'react-native-reanimated'

import { AppDarkTheme, AppLightTheme, StackHeader } from '@/lib'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationDark: NavDarkTheme,
    reactNavigationLight: NavLightTheme,
    materialDark: AppDarkTheme,
    materialLight: AppLightTheme,
  })

  return (
    <ThemeProvider
      value={
        colorScheme === 'dark'
          ? { ...DarkTheme, fonts: NavDarkTheme.fonts }
          : { ...LightTheme, fonts: NavLightTheme.fonts }
      }
    >
      <PaperProvider
        theme={colorScheme === 'dark' ? AppDarkTheme : AppLightTheme}
      >
        <Stack
          screenOptions={{
            header: (props) => (
              <StackHeader navProps={props} children={undefined} />
            ),
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>

        <StatusBar style="auto" />
      </PaperProvider>
    </ThemeProvider>
  )
}

export default RootLayout
