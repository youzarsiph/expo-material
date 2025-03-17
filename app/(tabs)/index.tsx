import { Platform, View, ScrollView, useColorScheme } from 'react-native'
import { Icon, Text, useTheme } from 'react-native-paper'

import { Colors, HelloWave } from '@/lib'

export default function HomeScreen() {
  const theme = useTheme()
  const colorScheme = useColorScheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: 250,
          marginBottom: 16,
          backgroundColor: theme.colors.primaryContainer,
        }}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Icon
            source="qrcode-scan"
            size={150}
            color={theme.colors.onPrimaryContainer}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon
            source="microsoft-visual-studio-code"
            size={75}
            color={Colors[colorScheme ?? 'light'].teal.primary}
          />
          <Icon
            source="file-edit"
            size={75}
            color={Colors[colorScheme ?? 'light'].violet.primary}
          />
        </View>
      </View>

      <View style={{ gap: 32, padding: 16 }}>
        <View style={{ gap: 16, flexDirection: 'row', alignItems: 'center' }}>
          <Text variant="displaySmall" style={{ fontWeight: 'bold' }}>
            Welcome!
          </Text>
          <HelloWave />
        </View>

        <View style={{ gap: 16 }}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
            Step 1: Try it
          </Text>
          <Text variant="bodyLarge">
            Edit{' '}
            <Text style={{ fontFamily: 'SpaceMono' }}>
              app/(tabs)/index.tsx
            </Text>{' '}
            to see changes. Press{' '}
            <Text style={{ fontFamily: 'SpaceMono' }}>
              {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12',
              })}
            </Text>{' '}
            to open developer tools.
          </Text>
        </View>

        <View style={{ gap: 16 }}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
            Step 2: Explore
          </Text>
          <Text variant="bodyLarge">
            Tap the Explore tab to learn more about what's included in this
            starter app.
          </Text>
        </View>

        <View style={{ gap: 16 }}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
            Step 3: Get a fresh start
          </Text>
          <Text variant="bodyLarge">
            When you're ready, run{' '}
            <Text style={{ fontFamily: 'SpaceMono' }}>
              npm run reset-project
            </Text>{' '}
            to get a fresh <Text style={{ fontFamily: 'SpaceMono' }}>app</Text>{' '}
            directory. This will move the current{' '}
            <Text style={{ fontFamily: 'SpaceMono' }}>app</Text> to{' '}
            <Text style={{ fontFamily: 'SpaceMono' }}>app-example</Text>.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
