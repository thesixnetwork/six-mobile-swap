import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';


class Detail extends Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text>Detail</Text>
        <Button title='View button tabs' onPress={()=> {}}/>
        <Button title='View Top tabs' onPress={()=> {}}/>
        </View>
        );
        

    }

}


export default Detail;