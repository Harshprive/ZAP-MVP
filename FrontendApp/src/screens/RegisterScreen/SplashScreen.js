import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the next screen after 3 seconds
            navigation.navigate('Login')
        }, 3000)

        return () => clearTimeout(timer)
    },)
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>ZAP</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#6200ee',
    },
})