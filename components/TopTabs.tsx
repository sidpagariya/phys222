import React from 'react'
import { Layout, Tab, TabBar, TabElement } from '@ui-kitten/components'

const TopTabBar = (props: any): React.ReactElement => {
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

export default TopTabBar
