import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Product from './src/screens/Product'
import productDetails from './src/screens/productDetails'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='product' component={Product} />
        <Stack.Screen name='productDetails' component={productDetails} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App

const styles = StyleSheet.create({})