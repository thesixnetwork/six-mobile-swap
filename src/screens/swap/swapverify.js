
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';


class Swapverify extends Component{
  render(){
    return(
        // <LinearGradient
        // colors={['#4A00E0', '#8E2DE2']}
        // style={{ flex: 1 }}>
        
        <View style={{flex: 1,padding:20,flexDirection: 'column', backgroundColor: '#111558'}}>
             {this.state.text.length === 4 &&
             this.props.navigation.navigate('Swap2')
          }
        <View style={{ flex:1,backgroundColor: '#ffffff', borderRadius:10 ,marginTop:50  , paddingTop:40}}>
            <View style={{ height:50}}></View>
            <View style={{ flexDirection:'column', padding:16}}>
            <Text style={{ fontSize:14, fontWeight:'bold' ,color:'#484848'}}>Waring</Text>
            <View style={{ height:10}}></View>
            <Text style={{ fontSize:14 , color:'#484848'}}>Both Klaytn wallet and Klip wallet are for Klay 
                    and KCT tokens. Please make sure<Text style={{ fontSize:14,fontWeight:'bold', color:'#8E2DE2'}}>YOU HAVE THE PRIVATE KEY</Text> 
                    <Text  style={{ fontSize:14 , color:'#484848'}}> to access this wallet address
                    or else you will lose all of your SIX-KCT tokens.</Text></Text>
             <View style={{ height:10}}></View>
            <Text  style={{ fontSize:14 , color:'#484848'}}>Please note that SIX Network is not
                responsible for the loss of your private key and
                the SIX-KCT tokens.</Text>
            </View>
            <View style={{ height:50, backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1, margin:16 }}>
            <TextInput style={{ height:50 ,padding:8}} ></TextInput>
            <View style={{ justifyContent:'center', alignItems:'center'}}>
            <View style={{ height:40}}></View>
            <Text  style={{ fontSize:14 , color:'#484848', }}>Please type your</Text>
            <Text  style={{ fontSize:14 , color:'#484848', fontWeight:'bold'}}>last 4-digit of your Klaytn address</Text>
            <View style={{ height:20}}></View>
            <View style={{  flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8, borderColor:'#7D7D7D15', borderWidth:1}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8, borderColor:'#7D7D7D15', borderWidth:1}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8,borderColor:'#7D7D7D15', borderWidth:1}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8, borderColor:'#7D7D7D15', borderWidth:1}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
            </View>
            </View>
            </View>
        </View>
        <View style={{ height:320}}></View>
                </View>
                // </LinearGradient>
                )}
            }


const styles = StyleSheet.create({
                    container: {
                        flex: 1,
                        padding:20,
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
                
                });

export default Swapverify;
