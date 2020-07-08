interface LectureData {
  lec: number
  read: string | null
  exam: number | null
  hw: number | null
  lab: string | null
  labExam: string | null
}

interface WeekData {
  week: number
  lectures: LectureData[]
  dates: string
}

interface SyllabusData {
  title: string
  contents: string[]
  bullets?: boolean
  link?: boolean
  to?: string
}

interface DueDateData {
  assignments: string[]
  date: string
  exam: number
}

interface LabData {
  title: string
  data?: string
  handout?: string
  other?: string
}

interface LecturesData {
  lectures: {}
}
