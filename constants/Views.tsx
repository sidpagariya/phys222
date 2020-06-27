// import Schedule from '../components/Schedule'
// import Syllabus from '../components/Syllabus'
// import DueDates from '../components/DueDates'
// import Course from '../components/Course'
// import Labs from '../components/Labs'
// import Guides from '../components/Guides'
//
// export const routes = [
//   {
//     path: '/course/schedule',
//     component: Schedule,
//   },
//   {
//     path: '/course/syllabus',
//     component: Syllabus,
//   },
//   {
//     path: '/course/duedates',
//     component: DueDates,
//   },
//   {
//     path: '/clutch/labs',
//     component: Labs,
//   },
//   {
//     path: '/clutch/guides',
//     component: Guides,
//   },
//   {
//     path: '*',
//     component: Course,
//   },
// ]

export enum Routes {
  HOME = 'Home',
  COURSE = 'Course',
  CLUTCH = 'Clutch',
  SCHEDULE = 'Schedule',
  SYLLABUS = 'Syllabus',
  DUE_DATES = 'Due Dates',
  LABS = 'Labs',
  GUIDES = 'Guides',
}

export const linking = {
  prefixes: ['https://phys222.ml', 'phys222://'],
  config: {
    screens: {
      [Routes.HOME]: {
        screens: {
          [Routes.COURSE]: {
            path: 'course',
            screens: {
              [Routes.SCHEDULE]: 'schedule',
              [Routes.SYLLABUS]: 'syllabus',
              [Routes.DUE_DATES]: 'duedates',
            },
          },
          [Routes.CLUTCH]: {
            path: 'clutch',
            screens: {
              [Routes.LABS]: 'labs',
              [Routes.GUIDES]: 'guides',
            }
          },
        }
      },
    },
  },
}
