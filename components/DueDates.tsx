import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const DueDates: React.FC = () => {
  return (
    <Layout level="3" style={styles.container}>
      <Text>Due Dates</Text>
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

export default DueDates
