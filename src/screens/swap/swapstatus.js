
import React, { Component,PureComponent } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors} from 'react-native-elements';
import Swap1 from './swap1'
import Overlay from 'react-native-modal-overlay';
import Warning from '../../assets/images/warning.png'
import Logo2 from '../../assets/images/logo2.png'


class Swapstatus extends PureComponent{
    state = {modalVisible: false}

    showOverlay() {
        this.setState({modalVisible: true})
      }
    
      hideOverlay() {
        this.setState({modalVisible: false})
      }

    goToAlert = () =>{
         return(
            //  <View style={{ flex:1, alignItems:'center', justifyContent:'center', fontSize:100}}>
            //  <Text>snjfjshfuhreigetgthrth</Text>

            // </View>
            <Swap1></Swap1>
         )
    }

  render(){
    return(
         <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
         style={{ flex: 1 }}>
        {/* <View style={{flex: 1,padding:20,flexDirection: 'column', backgroundColor: '#111558'}}> */}
        <View style={{flex:1, flexDirection:'column', alignItems:'center', marginTop:100, padding:16}}>
                <View >
                <Text style={{ fontSize:16, color:'#FFFFFF'}}>Please enter your ticket ID</Text>
                </View>
                <View style={{ height:40}}></View>
                <View style={{ height:72,backgroundColor: '#ffffff', borderRadius:4 ,width:'100%'}}>
                <View style={{ flex:1,flexDirection:'row'}}>
                <View style={{ width:6, backgroundColor:'#EBBE44', borderRadius:4}}>
                </View>

                <View style={{ flexDirection:'column', width:'100%'}}>
                <Text style={{ fontSize:12, color:'#7D7D7D' , paddingLeft:14, paddingTop:14}}>Ticket ID</Text>
                <TextInput style={{ fontSize:18, fontWeight:'bold', color:'#484848', paddingLeft:14,  paddingBottom:14, marginTop:6}}>XXXXXX</TextInput>
                <View style={{ width: '100%', backgroundColor:'#7D7D7D15' ,height:1}}></View>
                </View>
                </View>
                </View>
                <View style={{ height:40}}></View>
                
                <Button  
                    buttonStyle={{
                    width:270,
                    height:50,
                    backgroundColor: "#FFD76A",
                    borderRadius: 25,
                }} 
                titleStyle={{
                    color:'#484848'
                }}
                title="Check"
                onPress={this.showOverlay.bind(this)}
                />
               </View>

               <Overlay visible={this.state.modalVisible} closeOnTouchOutside animationType="zoomIn"
            containerStyle={{backgroundColor: '#11155895'}} 
            childrenWrapperStyle={{backgroundColor: '#1115580',width:'100%',height:205, borderRadius:10}} >
                 <View style={{width:'100%',height:205, backgroundColor:'#ffffff', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                  <Image
                        source={Warning}
                        />
                   <Text style={{ fontSize:14, color:'#484848'}}>Your token swap is </Text>
                   <Text style={{ fontSize:18, fontWeight:'bold',color:'#484848'}}>On process</Text>
                   </View>
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
                title="OK"
                 onPress={this.hideOverlay.bind(this)}
                />
          </Overlay>
                {/* </View> */}
                <View style={{ alignItems:'center', flexDirection:'column', paddingBottom:20}}>
               {/* <Text style={{ color:'#ffffff'}}>Powered by</Text> */}
                <Image
              source={Logo2}
            //   style={[styles.LeftIcon, styles.LeftIconBack]}
            />
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

export default Swapstatus;
