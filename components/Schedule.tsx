import React from 'react'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const Schedule: React.FC = () => {
  return (
    <Layout level="3" style={styles.container}>
      <Text>Schedule</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
})

export default Schedule
