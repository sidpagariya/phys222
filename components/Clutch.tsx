import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Icon, Layout, Tab, TabBar, TabElement } from '@ui-kitten/components'
import { Routes } from '../constants/AppRoutes'
import Labs from './Labs'
import Guides from './Guides'
import TopTabBar from './TopTabs'

const TopTab = createMaterialTopTabNavigator()

const LabsIcon = (props: any) => <Icon {...props} name="file-text-outline" />
const GuidesIcon = (props: any) => <Icon {...props} name="flash-outline" />

const Clutch = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <TopTab.Screen
      name={Routes.LABS}
      component={Labs}
      options={{ title: 'LABS', tabBarIcon: LabsIcon }}
    />
    <TopTab.Screen
      name={Routes.GUIDES}
      component={Guides}
      options={{ title: 'GUIDES', tabBarIcon: GuidesIcon }}
    />
  </TopTab.Navigator>
)

export default Clutch
