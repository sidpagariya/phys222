import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Icon, Layout, Tab, TabBar, TabElement } from '@ui-kitten/components'
import { Routes } from '../constants/Views'
import Schedule from './Schedule'
import Syllabus from './Syllabus'
import DueDates from './DueDates'

const TopTab = createMaterialTopTabNavigator()

const ScheduleIcon = (props: any) => <Icon {...props} name="calendar-outline" />
const SyllabusIcon = (props: any) => (
  <Icon {...props} name="book-open-outline" />
)
const DueDatesIcon = (props: any) => <Icon {...props} name="clock-outline" />

const Course = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <CourseTabBar {...props} />}>
    <TopTab.Screen
      name={Routes.SCHEDULE}
      component={Schedule}
      options={{ title: 'SCHEDULE', tabBarIcon: ScheduleIcon }}
    />
    <TopTab.Screen
      name={Routes.SYLLABUS}
      component={Syllabus}
      options={{ title: 'SYLLABUS', tabBarIcon: SyllabusIcon }}
    />
    <TopTab.Screen
      name={Routes.DUE_DATES}
      component={DueDates}
      options={{ title: 'DUE DATES', tabBarIcon: DueDatesIcon }}
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

export default Course
