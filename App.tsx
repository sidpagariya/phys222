import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  dark as themeDark,
  light as themeLight,
  mapping,
} from '@eva-design/eva'
import {
  ApplicationProvider,
  Divider,
  Icon,
  IconRegistry,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { linking, Routes } from './constants/Views'
import BottomTabs from './components/BottomTabs'
import { createStackNavigator } from '@react-navigation/stack'
import { default as customTheme } from './constants/custom-theme'

const themes: any = {
  light: {
    theme: themeLight,
    icon: 'sun',
    text: 'LIGHT',
  },
  dark: {
    theme: themeDark,
    icon: 'moon',
    text: 'DARK',
  },
}

const MoonIcon = (props: any) => <Icon {...props} name="moon" />
const SunIcon = (props: any) => <Icon {...props} name="sun" />

const Stack = createStackNavigator()

const App = (): React.ReactFragment => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light')
  }
  const [themeName, setThemeName] = useState(
    localStorage.getItem('theme') || 'light'
  )
  const theme = themes[themeName].theme

  const changeTheme = () => {
    localStorage.setItem('theme', themeName === 'light' ? 'dark' : 'light')
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }

  const { icon: themeButtonIcon } =
    themeName === 'light' ? themes.dark : themes.light

  const RightAction = () => {
    const ThemeIcon = themeButtonIcon === 'moon' ? MoonIcon : SunIcon
    return (
      <React.Fragment>
        <TopNavigationAction icon={ThemeIcon} onPress={changeTheme} />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={{...theme, ...customTheme}}>
        <TopNavigation
          alignment="center"
          title="Physics 222!"
          accessoryRight={RightAction}
        />
        <Divider />
        <NavigationContainer linking={linking}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.HOME} component={BottomTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
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
  text: {
    textAlign: 'center',
    marginTop: 30,
  },
})
export default App
