
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput ,TouchableOpacity, Dimensions,Platform} from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import BackIcon from '../../assets/images/back.png'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

const d = Dimensions.get('window')
const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))

var radio_props = [
    { label: 'I accept this Terms and Conditions.', value: 0 },
    { label: 'I’m sure that I have this Klaytn wallet’s private key.', value: 1 }
];


class Swap2 extends Component{
    
  render(){
    return(
        <View style={styles.container}>
            <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
        style={{ height:96 , alignItems:'center', justifyContent:'flex-end'}}>
             <TouchableOpacity
            style={styles.LeftBtn}
            onPress={()=> this.props.navigation.navigate('Onboarding1')}>
            <Image
              source={BackIcon}
              style={[styles.LeftIcon, styles.LeftIconBack]}
            />
          </TouchableOpacity>
             <Text style={{ color:'#ffffff', fontWeight:'bold', marginBottom:25}}>SWAP</Text>
        </LinearGradient>
         <View style={{ flex: 1, backgroundColor: '#F5F5F8' }}>
                        <View style={{ marginTop: 20, marginLeft: 16, marginRight: 16 }}>
                            <Text style={{ fontSize: 14, color: '#7D7D7D' }}>Klaytn wallet address</Text>
                            <View style={{ height: 20 }}></View>
                            <View style={{ height: 50, backgroundColor: '#FFFFFF', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1 }}>
                                <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                            </View>
                            <View style={{ height: 20 }}></View>
                            <Text style={{ fontSize: 14, color: '#7D7D7D' }}>Terms and Conditions</Text>
                            <View style={{ height: 20 }}></View>
                            <View style={{ height: 300, backgroundColor: '#FFFFFF', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1 }}>
                                <TextInput style={{ height: 300, padding: 8 }}></TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 20, marginTop: 30 }}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                buttonInnerColor={'#fffff'}
                                labelColor={'#7D7D7D'}
                                buttonColor={'#7D7D7D'}
                                buttonSize={10}
                                buttonOuterSize={20}
                                selectedButtonColor={'#7D7D7D'}
                                selectedLabelColor={'#000000'}
                                labelStyle={{ fontWeight: '600', fontSize: 12 }}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />

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
                                title="Next"
                                onPress={()=> this.props.navigation.navigate('Swap3')}
                            />
                        </View>
                    </View> 
                    </View>
        
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

export default Swap2;
