import React from 'react'
import { Card, Layout, Text } from '@ui-kitten/components'
import { ScrollView, StyleSheet, View } from 'react-native'
import { dueDateData } from '../constants/data'
import { colors } from '../constants/custom-theme'

const DueDateCard = (props: any) => {
  const date = props.date
  const SyllabusEntryHeader = (props: any) => (
    <View {...props}>
      <Text category="h5">{date}</Text>
    </View>
  )
  return (
    <Card
      header={SyllabusEntryHeader}
      style={[{ borderColor: colors[props.exam - 1] }, styles.card]}
    >
      {props.assignments.map((assignment: string) => (
        <Text style={styles.text}>{assignment}</Text>
      ))}
    </Card>
  )
}

const DueDatesTable: React.FC = () => (
  <ScrollView>
    {[...dueDateData].map((syllabusEntry, index) => (
      <DueDateCard {...syllabusEntry} key={index} />
    ))}
  </ScrollView>
)

const DueDates: React.FC = () => {
  return (
    <Layout level="2" style={styles.container}>
      <DueDatesTable />
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
  card: {
    marginTop: 16,
    borderWidth: 3,
  },
  text: {
    marginBottom: 2,
  },
})

export default DueDates
