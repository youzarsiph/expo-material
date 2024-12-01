import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

import { TabBar, TabsHeader } from '@/lib'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name']
  color: string
}) {
  return <MaterialIcons size={24} {...props} />
}

const TabLayout = () => (
  <Tabs
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      header: (props) => <TabsHeader navProps={props} children={undefined} />,
      headerShown: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home-filled' : 'home'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            name={focused ? 'explore' : 'travel-explore'}
            color={color}
          />
        ),
      }}
    />
  </Tabs>
)

export default TabLayout
