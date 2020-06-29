import React from 'react'
import {Card, Layout, Text} from '@ui-kitten/components'
import {ScrollView, StyleSheet, View} from 'react-native'
import {labData} from "../constants/data";

const LabCard = (props: any) => {
  const labTitle = props.title
  const labNumber = props.num
  const LabCardHeader = (props: any) => (
    <View {...props}>
      <Text category="h5">Lab {labNumber}: {labTitle}</Text>
    </View>
  )
  return (
    <Card
      header={LabCardHeader}
      style={styles.card}
    >
      {
        props.data? (<Text style={styles.text}><a target="_blank" href={props.data} style={{color: 'inherit'}}>Data</a></Text>) : null
      }
      {
        props.handout? (<Text style={styles.text}><a target="_blank" href={props.handout} style={{color: 'inherit'}}>Handout</a></Text>) : null
      }
      {
        props.other? (<Text style={styles.text}><a target="_blank" href={props.other} style={{color: 'inherit'}}>Other</a></Text>) : null
      }
    </Card>
  )
}

const LabsTable: React.FC = () => (
  <ScrollView>
    {[...labData].map((syllabusEntry, index) => (
      <LabCard {...syllabusEntry} num={index} key={index} />
    ))}
  </ScrollView>
)

const Labs: React.FC = () => {
  return (
    <Layout level="2" style={styles.container}>
      <LabsTable />
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
    marginBottom: 8,
    textDecorationLine: 'underline'
  }
})

export default Labs
