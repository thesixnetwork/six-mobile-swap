
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput ,TouchableOpacity, Dimensions,Platform} from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import BackIcon from '../../assets/images/back.png'

const d = Dimensions.get('window')
const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))


class Swapconfirm extends Component{
  render(){
    return(
        // <LinearGradient
        // colors={['#4A00E0', '#8E2DE2']}
        // style={{ flex: 1 }}>
        <View style={styles.container}>
            <LinearGradient
         colors={['#4A00E0', '#8E2DE2']}
         style={{height:96 , justifyContent:'center', alignItems:'center'}}>
             <TouchableOpacity
            style={styles.LeftBtn}
            onPress={()=> this.props.navigation.navigate('Onboarding1')}>
            <Image
              source={BackIcon}
              style={[styles.LeftIcon, styles.LeftIconBack]}
            />
          </TouchableOpacity>
              <Text style={{ color:'#ffffff', fontSize:18,fontWeight:'bold',marginTop:20}}>SWAP</Text>
         </LinearGradient>
       <View style={{ flex: 1, backgroundColor: '#F5F5F8' , padding:16}}>
           <View style={{ alignItems:'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#484848' }}>Swap confirmation</Text></View>
                        <Text style={{ fontSize: 14, color: '#484848', marginTop:10, marginBottom:10 }}>Please transfer SIX on Stellar to:</Text>
                        <View style={{ height: 50, backgroundColor: '#C1C1C115', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1 }}>
                            <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                        </View>
                        <Text style={{ fontSize: 14, color: '#7D7D7D', marginBottom:10, marginTop:10 }}>Memo type : Text</Text>
                        <View style={{ height: 50, backgroundColor: '#C1C1C115', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1 }}>
                            <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                        </View>

                        <Text style={{ fontSize: 14, color: '#484848' , marginTop:10, marginBottom:10}}>Remarks : The swap has been initiated and will be completed within 7 days.</Text>
                        {/* <View style={{ flex:1, flexDirection:'column', alignItems:'center', justifyContent:'flex-end'}}>
                        <Button
                            buttonStyle={{
                                width: 270,
                                height: 50,
                                backgroundColor: "#4A00E0",
                                borderRadius: 25,
                            }}
                            titleStyle={{
                                color: '#ffffff',
                                fontSize: 18
                            }}
                            title="Confirm"
                            onPress={()=> this.props.navigation.navigate('Swapdone')}
                        /></View> */}
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 40 }}>
                            <Button
                                buttonStyle={{
                                    width: 270,
                                    height: 50,
                                    backgroundColor: "#4A00E0",
                                    borderRadius: 25,
                                }}
                                titleStyle={{
                                    color: '#ffffff',
                                    fontSize: 18
                                }}
                                title="Confirm"
                                onPress={()=> this.props.navigation.navigate('Swapdone')}
                            />
                        </View>
                </View>
                // </LinearGradient>
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
                    LeftBtn: {
                        position: 'absolute',
                        top: isX ? 50 : 28,
                        paddingVertical: 4,
                        paddingRight: 50,
                        left: 20,
                        alignSelf: 'flex-start',
                        width: 100,
                        height: 50,
                      },
                      LeftIcon: {
                        width: 20,
                        height: 20,
                      },
                      LeftIconBack: {
                        width: 10,
                        height: 15,
                        marginBottom: 2,
                      },
                
                });

export default Swapconfirm;
