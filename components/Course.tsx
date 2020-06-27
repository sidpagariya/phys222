import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Icon, Layout, Tab, TabBar, TabElement } from '@ui-kitten/components'
import { Routes } from '../constants/AppRoutes'
import Schedule from './Schedule'
import Syllabus from './Syllabus'
import DueDates from './DueDates'
import TopTabBar from './TopTabs'

const TopTab = createMaterialTopTabNavigator()

const ScheduleIcon = (props: any) => <Icon {...props} name="calendar-outline" />
const SyllabusIcon = (props: any) => (
  <Icon {...props} name="book-open-outline" />
)
const DueDatesIcon = (props: any) => <Icon {...props} name="clock-outline" />

const Course = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
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

export default Course
