import React from 'react'
import { scheduleData } from '../constants/data'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Layout, Text } from '@ui-kitten/components'
import { colors } from '../constants/custom-theme'

const LectureCard = (props: any) => {
  const lecNum = props.lec
  const LectureHeader = (props: any) => (
    <Layout {...props}>
      <Text category="h5">Lecture {lecNum}</Text>
    </Layout>
  )
  return props.labExam ? (
    <Card
      header={LectureHeader}
      style={[
        {
          borderColor: colors[props.exam - 1],
          backgroundColor: colors[props.exam - 1],
        },
        styles.card,
      ]}
    >
      <Text category="h6">{props.labExam}</Text>
      {props.read ? <Text>Read {props.read}</Text> : <Text>No Class!</Text>}
    </Card>
  ) : props.read ? (
    <Card
      header={LectureHeader}
      style={[{ borderColor: colors[props.exam - 1] }, styles.card]}
    >
      {props.hw ? <Text category="h6">HW {props.hw} Quiz</Text> : null}
      {props.lab ? <Text category="h6">Lab - {props.lab}</Text> : null}
      <Text>Read {props.read}</Text>
    </Card>
  ) : (
    <Card
      header={LectureHeader}
      style={[
        {
          borderColor: colors[props.exam - 2],
          backgroundColor: colors[props.exam - 2],
        },
        styles.card,
      ]}
    >
      <Text category="h6">
        {props.exam === 6 ? `Final Exam (Optional)` : `Exam ${props.exam - 1}`}
      </Text>
      {props.read ? <Text>Read {props.read}</Text> : <Text>No Class!</Text>}
    </Card>
  )
}

const WeekCard = (props: any) => {
  const weekNum = props.week
  const WeekHeader = (props: any) => (
    <View {...props}>
      <Text category="h4">Week {weekNum}</Text>
    </View>
  )
  return (
    <Card header={WeekHeader} style={styles.card}>
      {props.lectures.map((lecture: LectureData) => (
        <LectureCard {...lecture} />
      ))}
    </Card>
  )
}

const ScheduleTable: React.FC = (props) => {
  const tableTheme = localStorage.getItem('theme') || 'light'
  console.log(tableTheme)

  return (
    <ScrollView>
      {[...scheduleData].map((weekData, index) => (
        <WeekCard {...weekData} />
      ))}
      {/*{([...scheduleHeaders, ...scheduleData]).map((item, index) => (*/}
      {/*  <Row style={styles.listItem} key={index}>*/}
      {/*    <Col style={styles.col}>*/}
      {/*      <Text>{item.week}</Text>*/}
      {/*    </Col>*/}
      {/*    <Col style={styles.col}>*/}
      {/*      <Text>{item.lec}</Text>*/}
      {/*    </Col>*/}
      {/*    <Col style={styles.readCol}>*/}
      {/*      <Text>{item.read}</Text>*/}
      {/*    </Col>*/}
      {/*    <Col style={styles.col}>*/}
      {/*      <Text>{item.exam}</Text>*/}
      {/*    </Col>*/}
      {/*    <Col style={styles.col}>*/}
      {/*      <Text>{item.hw}</Text>*/}
      {/*    </Col>*/}
      {/*    <Col style={styles.labCol}>*/}
      {/*      <Text>{item.lab}</Text>*/}
      {/*    </Col>*/}
      {/*    <Col style={styles.labCol}>*/}
      {/*      <Text>{item.labExam}</Text>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*))}*/}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
  },
  listItem: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 50,
    overflow: 'scroll',
    marginTop: 8,
  },
  readCol: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 100,
  },
  labCol: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 110,
  },
  col: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 70,
  },
  card: {
    marginTop: 8,
    borderWidth: 3,
  },
})

export default ScheduleTable
