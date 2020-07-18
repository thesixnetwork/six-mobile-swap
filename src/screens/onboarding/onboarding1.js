
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import Onboarding from '../../assets/images/onboarding1.png'


class Onboarding1 extends Component{
  render(){
    return(
        <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
        style={{ flex: 1 }}>
        <View style={styles.container}>
     <View style={{ flex:1,backgroundColor: '#ffffff', borderRadius:10 ,marginTop:100 , marginBottom: 30 , paddingTop:40, padding:16}}>
            <Image
                                                  style={{  justifyContent:'center',alignItems:'center' , height: 167, width:283,  marginLeft:20}}
                                                  source={Onboarding}
                                                />
                {/* <Image style={{  justifyContent:'center',alignItems:'center' , height: 167, width:283,  marginLeft:40}} ></Image> */}
                {/* <View style={{flexDirection:'row', paddingLeft: 16, justifyContent:'space-between'}}>
                    <Text style={{ color:'#8E2DE2', fontWeight:'bold', fontSize:12, marginLeft:12}}>Stellar Lumen</Text>
                    <Text style={{ color:'#8E2DE2', fontWeight:'bold', fontSize:12, marginRight:48}}>Klaytn</Text>
                </View> */}
                    <Text style={{paddingLeft:16 ,paddingRight:16,paddingTop:40, color: '#484848', fontWeight:'bold', fontSize:14}}>Here are the 3 reasons SIX Network migrates into Klaytn blockchain network.</Text>

                            <Text style={{ paddingLeft:16,paddingRight:16 , paddingTop:16, color: '#484848', fontSize: 14}}>1. Klaytn’s vision to trigger the mass adoption in 
                                blockchain space aligns with SIX Network’s.</Text>

                            <Text style={{ paddingLeft:16,paddingRight:16 , paddingTop:16,color: '#484848', fontSize: 14}}>2. Technology from Klaytn enables us to not only
                            provide the best payment service but also the
                            best media management provider.</Text>

                            <Text style={{ paddingLeft:16,paddingRight:16 ,paddingTop:16,color: '#484848', fontSize: 14}}>3. SIX Network’s current and potential user range
                            matches with Kakao’s current and potential
                            user range.</Text>
                </View>
               <View style={{ justifyContent:'center', alignItems:'center'}}>
                <Button  
                    buttonStyle={{
                    width:270,
                    height:50,
                    backgroundColor: "#FFD76A",
                    borderRadius: 25,
                    marginBottom:80
                }} 
                titleStyle={{
                    color:'#484848'
                }}
                title="Next"
                onPress={()=> this.props.navigation.navigate('Onboarding2')}
                /></View>
                </View>
                </LinearGradient>
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

export default Onboarding1;
