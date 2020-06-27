import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  BottomNavigationTabElement,
  Divider,
  Icon,
  Layout,
} from '@ui-kitten/components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Routes } from '../constants/Views'
import Course from './Course'
import Clutch from './Clutch'
import { StackScreenProps } from '@react-navigation/stack'
import { ParamListBase, getFocusedRouteNameFromRoute } from '@react-navigation/native'

const CourseIcon = (props: any) => <Icon {...props} name="bulb" />
const ClutchIcon = (props: any) => <Icon {...props} name="star" />

const BottomTab = createBottomTabNavigator()

const BottomTabs = ({
  navigation,
  route,
}: StackScreenProps<ParamListBase, string>): React.ReactElement => {

  console.log(getFocusedRouteNameFromRoute(route))
  const routeName = getFocusedRouteNameFromRoute(route) ?? Routes.COURSE

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: routeName,
    });
  }, [navigation, routeName])

  return (
    <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <BottomTab.Screen
        name={Routes.COURSE}
        component={Course}
        options={{title: 'COURSE', tabBarIcon: CourseIcon}}
      />
      <BottomTab.Screen
        name={Routes.CLUTCH}
        component={Clutch}
        options={{title: 'CLUTCH', tabBarIcon: ClutchIcon}}
      />
    </BottomTab.Navigator>
  )
}

const BottomTabBar = (props: any): React.ReactElement => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index]
    props.navigation.navigate(selectedTabRoute)
  }

  const createNavigationTabForRoute = (
    route: any
  ): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key]
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    )
  }

  return (
    <Layout level="2">
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </Layout>
  )
}

export default BottomTabs
