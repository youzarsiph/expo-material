import { Text } from 'react-native-paper'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated'

const HelloWave = () => {
  const rotationAnimation = useSharedValue(0)

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 }),
    ),
    6, // Run the animation 4 times
  )

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }))

  return (
    <Animated.View style={animatedStyle}>
      <Text variant="displaySmall">👋</Text>
    </Animated.View>
  )
}

export default HelloWave
