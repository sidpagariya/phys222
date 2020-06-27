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
            },
          },
        },
      },
    },
  },
}
