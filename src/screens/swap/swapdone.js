
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import Complete from '../../assets/images/completestatus.png'


class Swapdone extends Component{
  render(){
    return(
        <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
        style={{ flex: 1, padding:16, alignItems:'center', paddingTop:100 }}>
            <View style={{alignItems:'center'}} >
                <View style={{ backgroundColor:'#ffffff', width:'100%',height:500, marginTop:25, borderRadius:4}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484848', textAlign: 'center',marginTop:40 }}>Your token swap is on process.</Text>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED', borderBottomStyle: 'dashed', paddingBottom: 20}}></View>
                <View style={{paddingBottom:40, paddingRight:20, paddingLeft:20}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', textAlign: 'center', marginTop: 20 }}>
                                Ticket ID : XXXXXX
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', textAlign: 'center', marginTop: 10 }}>
                                Please use the following information
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', textAlign: 'center' }}>
                                to transfer SIX on Stellar
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848',  marginTop: 30 }}>
                                Name-Surname
                            </Text>
                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', marginTop: 10 }}>
                                Win Pollert
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848',  marginTop: 30 }}>
                                To
                            </Text>
                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', marginTop: 10 }}>
                                uswwldslddss92928wspcwk298agjzjcsskjs2
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848',  marginTop: 30 }}>
                                Memo type : Text
                            </Text>

                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848',  marginTop: 10 }}>
                                SwappingSIX
                            </Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 14, color: '#484848',  marginTop: 30 }}>
                                    Date
                                </Text>
                                <Text style={{ fontSize: 14, color: '#484848',  marginTop: 30 }}>
                                    Time
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848',  marginTop: 10 }}>
                                    20 June 2018
                                </Text>
                                <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848',  marginTop: 10 }}>
                                    9:30 AM
                                </Text>
                            </View>
                           </View>

                </View>
               <Image style={{width:54,height:54, borderRadius:50, position:'absolute'}} source={Complete}></Image>
               <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 200 }}>
                        <Button
                            buttonStyle={{
                                width: 270,
                                height: 50,
                                backgroundColor: "#ffd76a",
                                borderRadius: 25,
                            }}
                            titleStyle={{
                                color: '#484848',
                                fontSize: 18
                            }}
                            title="Home"
                            onPress={()=> this.props.navigation.navigate('Feed')}
                        />
                    </View>
            </View>
     
                 </LinearGradient>
                )}
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
                
                });

export default Swapdone;
