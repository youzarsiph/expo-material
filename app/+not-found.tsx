import { router, Stack } from 'expo-router'
import { View } from 'react-native'
import { Button, Chip, Text } from 'react-native-paper'

import { ScreenStyles } from '@/lib'

const NotFound = () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <View style={ScreenStyles.centeredScreen}>
      <Text variant="displaySmall">Not Found</Text>
      <Text variant="bodyLarge">To edit this screen open the file:</Text>
      <Chip icon="language-typescript" textStyle={{ fontFamily: 'SpaceMono' }}>
        app/+not-found.tsx
      </Chip>

      <Button mode="contained" onPress={() => router.push('/')}>
        Go to home screen!
      </Button>
    </View>
  </>
)

export default NotFound
