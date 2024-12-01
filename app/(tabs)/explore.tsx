import { Platform, ScrollView, useColorScheme, View } from 'react-native'
import { Icon, List, Text, useTheme } from 'react-native-paper'

import { Colors } from '@/lib'

const Explore = () => {
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
            source="react"
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
            source="language-typescript"
            size={75}
            color={Colors[colorScheme ?? 'light'].blue.primary}
          />
          <Icon
            source="language-javascript"
            size={75}
            color={Colors[colorScheme ?? 'light'].orange.primary}
          />
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <Text variant="displaySmall" style={{ fontWeight: 'bold' }}>
          Explore
        </Text>
        <Text variant="bodyLarge">
          This app includes example code to help you get started.
        </Text>
      </View>

      <List.Section title="Features">
        <List.AccordionGroup>
          <List.Accordion
            id="1"
            title="File-based routing"
            description="This app has two screens:"
            left={(props) => <List.Icon {...props} icon="file-tree" />}
          >
            <List.Item
              title="app/(tabs)/index.tsx"
              titleStyle={{ fontFamily: 'SpaceMono' }}
              left={(props) => (
                <List.Icon {...props} icon="language-typescript" />
              )}
            />
            <List.Item
              title="app/(tabs)/explore.tsx"
              titleStyle={{ fontFamily: 'SpaceMono' }}
              left={(props) => (
                <List.Icon {...props} icon="language-typescript" />
              )}
            />
            <List.Item
              title="app/(tabs)/_layout.tsx"
              titleStyle={{ fontFamily: 'SpaceMono' }}
              description="The layout file sets up the tab navigator."
              left={(props) => (
                <List.Icon {...props} icon="page-layout-footer" />
              )}
            />
            <List.Item
              title="Learn more"
              description="https://docs.expo.dev/router/introduction"
              left={(props) => <List.Icon {...props} icon="link" />}
            />
          </List.Accordion>

          <List.Accordion
            id="2"
            title="Android, iOS, and web support"
            description="You can open this project on:"
            left={(props) => (
              <List.Icon
                {...props}
                icon={
                  Platform.select({
                    android: 'android',
                    ios: 'apple-ios',
                    web: 'web',
                  }) ?? 'android'
                }
              />
            )}
          >
            <List.Item
              title="Android"
              left={(props) => <List.Icon {...props} icon="android" />}
            />
            <List.Item
              title="IOS"
              left={(props) => <List.Icon {...props} icon="apple-ios" />}
            />
            <List.Item
              title="Web"
              description="To open the web version, press `w` in the terminal running this project."
              left={(props) => <List.Icon {...props} icon="web" />}
            />
          </List.Accordion>

          <List.Accordion
            id="3"
            title="Custom fonts"
            description="Open:"
            left={(props) => <List.Icon {...props} icon="format-font" />}
          >
            <List.Item
              title="app/_layout.tsx"
              description="to see how to load custom fonts such as this one."
              titleStyle={{ fontFamily: 'SpaceMono' }}
              left={(props) => (
                <List.Icon {...props} icon="language-typescript" />
              )}
            />
            <List.Item
              title="Learn more"
              description="https://docs.expo.dev/versions/latest/sdk/font"
              left={(props) => <List.Icon {...props} icon="link" />}
            />
          </List.Accordion>

          <List.Accordion
            id="4"
            title="Images"
            description="For static images, you can use the:"
            left={(props) => <List.Icon {...props} icon="image-album" />}
          >
            <List.Item
              title="@2x"
              titleStyle={{ fontFamily: 'SpaceMono' }}
              left={(props) => <List.Icon {...props} icon="at" />}
            />
            <List.Item
              title="@3x"
              titleStyle={{ fontFamily: 'SpaceMono' }}
              description="suffixes to provide files for different screen densities"
              left={(props) => <List.Icon {...props} icon="at" />}
            />
            <List.Item
              title="Learn more"
              description="https://reactnative.dev/docs/images"
              left={(props) => <List.Icon {...props} icon="link" />}
            />
          </List.Accordion>

          <List.Accordion
            id="5"
            title="Light and dark mode components"
            description="This template has light and dark mode support."
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
          >
            <List.Item
              title="useColorScheme()"
              descriptionNumberOfLines={3}
              description="hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly."
              titleStyle={{ fontFamily: 'SpaceMono' }}
              left={(props) => (
                <List.Icon {...props} icon="language-typescript" />
              )}
            />
            <List.Item
              title="Learn more"
              description="https://docs.expo.dev/develop/user-interface/color-themes/"
              left={(props) => <List.Icon {...props} icon="link" />}
            />
          </List.Accordion>

          <List.Accordion
            id="6"
            title="Animations"
            description="This template includes an example of an animated component:"
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
          >
            <List.Item
              title="components/HelloWave.tsx"
              titleStyle={{ fontFamily: 'SpaceMono' }}
              description="component uses the powerful react-native-reanimated library to create a waving hand animation."
              descriptionNumberOfLines={3}
              left={(props) => (
                <List.Icon {...props} icon="language-typescript" />
              )}
            />
          </List.Accordion>
        </List.AccordionGroup>
      </List.Section>
    </ScrollView>
  )
}

export default Explore
