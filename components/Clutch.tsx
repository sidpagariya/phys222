import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Icon, Layout, Tab, TabBar, TabElement } from '@ui-kitten/components'
import { Routes } from '../constants/Views'
import Labs from './Labs'
import Guides from './Guides'

const TopTab = createMaterialTopTabNavigator()

const LabsIcon = (props: any) => <Icon {...props} name="file-text-outline" />
const GuidesIcon = (props: any) => <Icon {...props} name="flash-outline" />

const Clutch = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <CourseTabBar {...props} />}>
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

const CourseTabBar = (props: any): React.ReactElement => {
  const onTabSelect = (index: number) => {
    const selectedTabRoute: string = props.state.routeNames[index]
    props.navigation.navigate(selectedTabRoute)
  }

  const createNavigationTabForRoute = (route: any): TabElement => {
    const { options } = props.descriptors[route.key]
    return (
      <Tab key={route.key} title={options.title} icon={options.tabBarIcon} />
    )
  }

  return (
    <Layout level="2">
      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
    </Layout>
  )
}

export default Clutch
