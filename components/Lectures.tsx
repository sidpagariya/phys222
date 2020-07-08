import React from 'react'
import { Card, Layout, Text } from '@ui-kitten/components'
import { ScrollView, StyleSheet, View } from 'react-native'
import { lectureData } from '../constants/data'

const UnitCard = (props: any) => {
  const labNumber = props.num
  const UnitCardHeader = (props: any) => (
    <View {...props}>
      <Text category="h5">
        Unit {labNumber}
      </Text>
    </View>
  )
  return (
    <Card header={UnitCardHeader} style={styles.card}>
      {Object.entries(props.lectures).map(([title, link]:[string, any]) => (
        <Text style={styles.text}>
          <a target="_blank" href={link} style={{color: 'inherit'}}>
            {title}
          </a>
        </Text>
        ))}
      {props.data ? (
        <Text style={styles.text}>
          <a target="_blank" href={props.data} style={{ color: 'inherit' }}>
            Data
          </a>
        </Text>
      ) : null}
    </Card>
  )
}

const LecturesTable: React.FC = () => (
  <ScrollView>
    {[...lectureData].map((unitEntry, index) => (
      <UnitCard {...unitEntry} num={index+1} key={index} />
    ))}
  </ScrollView>
)

const Lectures: React.FC = () => {
  return (
    <Layout level="2" style={styles.container}>
      <LecturesTable />
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
    textDecorationLine: 'underline',
  },
})

export default Lectures
