
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';


Screen1 = ({ navigation }) =>
<SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
{/* <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" /> */}
<Text>Dark Screen</Text>
<Button
  title="Next screen"
  onPress={() => navigation.navigate('Screen2')}
/>
</SafeAreaView>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*padding:20,*/
        flexDirection: 'column',
        /*marginTop:10*/
    },
    image: {
        height: 50,
        width: '100%'
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30
    },
    title: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 10
    },
    content: {
        marginTop: 50
    }, linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

})

export default Screen1;