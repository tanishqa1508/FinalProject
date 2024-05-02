import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RestScreen from '../screens/RestScreen'
import WorkoutScreen from '../screens/WorkoutScreen'
import FitScreen from '../screens/FitScreen'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false} }/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false} }/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false} }/>
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false} }/>
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false} }/>
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false} }/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})