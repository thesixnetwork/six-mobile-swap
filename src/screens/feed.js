import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import Logo2 from '../assets/images/logo2.png'


class Feed extends Component{
    render(){
        return(
            <LinearGradient
                colors={['#4A00E0', '#8E2DE2']}
                style={{ flex: 1 }}>
              <View style={styles.container}>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
              <Button  
                buttonStyle={{
                    width:270,
                    height:50,
                    backgroundColor: "#FFD76A",
                    borderRadius: 25
                }} 
                titleStyle={{
                    color:'#484848'
                }}
                title="Swap"
                onPress={()=> this.props.navigation.navigate('Onboarding1')}
                />
                 <Button  
                buttonStyle={{
                    width:270,
                    height:50,
                    backgroundColor: "#FFD76A",
                    borderRadius: 25,
                    marginTop:20
                }} 
                titleStyle={{
                    color:'#484848'
                }}
                title="Check Swap Status"
                onPress={()=> this.props.navigation.navigate('Swapstatus')}
                />
                 
                  
              </View>
              <View style={{ alignItems:'center', flexDirection:'column', paddingBottom:20}}>
                <Image
              source={Logo2}
            //   style={[styles.LeftIcon, styles.LeftIconBack]}
            />
            </View>
              </View>


                    

                </LinearGradient>
        //     <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        // <Text>Navigation</Text>
        // <Button title='Go to Feed Item' onPress={()=> this.props.navigation.navigate('Detail')}/>
        // </View>
        );
        

    }

}


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


export default Feed;