
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput ,TouchableOpacity, Dimensions,Platform} from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import BackIcon from '../../assets/images/back.png'
import Stellar from '../../assets/images/stellar.png'
import Klay from '../../assets/images/klay.png'
import Right from '../../assets/images/right.png'

const d = Dimensions.get('window')
const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))


class Swap3 extends Component{
  render(){
    return(
        // <LinearGradient
        // colors={['#4A00E0', '#8E2DE2']}
        // style={{ flex: 1 }}>
        <View style={styles.container}>
            <LinearGradient
         colors={['#4A00E0', '#8E2DE2']}
         style={{ height:140 , justifyContent:'center', alignItems:'center'}}>
             <TouchableOpacity
            style={styles.LeftBtn}
            onPress={()=> this.props.navigation.navigate('Onboarding1')}>
            <Image
              source={BackIcon}
              style={[styles.LeftIcon, styles.LeftIconBack]}
            />
          </TouchableOpacity>
             <Text style={{ color:'#ffffff', fontSize:18,fontWeight:'bold', marginBottom:10}}>SWAP</Text>

         </LinearGradient>

         <View style={{ backgroundColor:'#FFFFFF', borderWidth:2,borderColor:'#7D7D7D15',borderRadius:10,width:340,height:94, flex:1, alignSelf:'center', position:'absolute', marginTop:95}}>
     
            <View style={{ flexDirection:'row'}}>
                 <View style={{ width:170, height: 100, justifyContent:'center'}} >
                  <Image
                        source={Stellar}
                          style={{alignSelf:'center' , width:'38%',height:'50%'}} />
                          <Text  style={{alignSelf:'center' , color:'#484848',fontSize:10,marginTop:10}} >SIX on Stellar</Text>
                </View>
                <View style={{flexDirection:'column',height:92, alignItems:'center',justifyContent:'center'}}>
                <View style={{width:2,height:92, backgroundColor:'#7D7D7D15'}}></View>
                    <View style={{ position:'absolute'}} >
                        <Image source={Right}/>
                    </View>
                </View>

                <View style={{ width:170, height: 100, justifyContent:'center'}} >
                    <Image source={Klay} style={{alignSelf:'center', width:'38%',height:'50%'}} />
                    <Text  style={{alignSelf:'center' , color:'#484848',fontSize:10, marginTop:10}} >SIX on Stellar</Text>
                </View>
            </View>
                          
    
         </View>
         <View style={{ padding:16,}}>
         <Text style={{ fontSize:14, color:'#7D7D7D' ,marginBottom:10, marginTop:50}}>You are swapping SIX on Stellar to this Klaytn address</Text>
         <View style={{ height:50, width:'100%',backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
                        <TextInput style={{ height:50 ,padding:8}} ></TextInput>
                        </View>
                        <Text style={{ fontSize:14, color:'#7D7D7D', marginTop:10,marginBottom:10 }}>Please transfer SIX on Stellar to:</Text>
                        <View style={{ height:50, width:'100%',backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
                        <TextInput style={{ height:50 ,padding:8}} ></TextInput>
                        </View>
                        <Text style={{ fontSize:14, color:'#7D7D7D', marginTop:10,marginBottom:10 }}>Memo type : Text</Text>
                        <View style={{ height:50, width:'100%',backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
                        <TextInput style={{ height:50 ,padding:8}} ></TextInput>
                        </View>
                       <Text style={{ fontSize:14, color:'#7D7D7D', marginBottom:10, marginTop:20}}>Remarks : The amount will equal to SIX</Text>
                       
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
                                onPress={()=> this.props.navigation.navigate('Swapconfirm')}
                            />
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

export default Swap3;
