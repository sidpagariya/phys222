import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { scheduleData } from '../constants/data'
import ScheduleTable from './ScheduleTable'

const Schedule: React.FC = () => {
  return (
    <Layout level="2" style={styles.container}>
      <ScheduleTable />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
})

export default Schedule
