import React from 'react'
import {Card, Layout, Text} from '@ui-kitten/components'
import {ScrollView, StyleSheet, View} from 'react-native'
import { scheduleData } from '../constants/data'
import {colors} from "../constants/custom-theme";

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
      {props.lectures.map((lecture: LectureData, index: number) => (
        <LectureCard {...lecture} key={index}/>
      ))}
    </Card>
  )
}

const ScheduleTable: React.FC = (props) => (
  <ScrollView>
    {[...scheduleData].map((weekData, index) => (
      <WeekCard {...weekData} key={index} />
    ))}

  </ScrollView>
)

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
  card: {
    marginTop: 8,
    borderWidth: 3,
  },
})

export default Schedule
