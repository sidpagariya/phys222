import React from 'react'
import { Card, Layout, Text } from '@ui-kitten/components'
import { ScrollView, StyleSheet, View } from 'react-native'
import { syllabusData } from '../constants/data'

const SyllabusEntryCard = (props: any) => {
  const title = props.title
  const SyllabusEntryHeader = (props: any) => (
    <View {...props}>
      <Text category="h4">{title}</Text>
    </View>
  )
  return (
    <Card header={SyllabusEntryHeader} style={styles.card}>
      {props.link ? (
        props.contents.map((content: string, index: number) => (
          <a target="_blank" href={props.to} key={index}>
            {content}
          </a>
        ))
      ) : props.bulleted ? (
        <ul>
          {props.contents.map((content: string, index: number) => (
            <li key={index}>
              <Text style={styles.text}>{content}</Text>
            </li>
          ))}
        </ul>
      ) : (
        props.contents.map((content: string, index: number) => (
          <Text style={styles.text} key={index}>{content}</Text>
        ))
      )}
    </Card>
  )
}

const SyllabusTable: React.FC = () => (
  <ScrollView>
    {[...syllabusData].map((syllabusEntry, index) => (
      <SyllabusEntryCard {...syllabusEntry} key={index} />
    ))}
  </ScrollView>
)

const Syllabus: React.FC = () => {
  return (
    <Layout level="2" style={styles.container}>
      <SyllabusTable />
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
    marginTop: 8,
    borderWidth: 3,
  },
  text: {
    marginBottom: 2,
  },
})

export default Syllabus
