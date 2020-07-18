
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput , TouchableOpacity, Dimensions,Platform} from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import BackIcon from '../../assets/images/back.png'
import Onboarding from '../../assets/images/onboarding2.png'

const d = Dimensions.get('window')
const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))

class Onboarding2 extends Component{
  render(){
    return(
        <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
        style={{ flex: 1 }}>
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.LeftBtn}
            onPress={()=> this.props.navigation.navigate('Onboarding1')}>
            <Image
              source={BackIcon}
              style={[styles.LeftIcon, styles.LeftIconBack]}
            />
          </TouchableOpacity>
        <View style={{ flex:1,backgroundColor: '#ffffff', borderRadius:10 ,marginTop:100 , marginBottom: 30 , paddingTop:40}}>
             {/* <View style={{ height:121}}></View> */}
             <Image
                                                  style={{  justifyContent:'center',alignItems:'center' , height: 121, width:283,  marginLeft:40}}
                                                  source={Onboarding}/>
             <View style={{ flex:1,padding:16, flexDirection:'column', justifyContent:'space-between'}}>
             <Text style={{fontSize:14, fontWeight:'bold', color:'#484848'}}>Important Notes <Text style={{fontSize:14, fontWeight:'bold', color:'#8E2DE2'}}>(Please read carefully - 
                DO NOT SKIP this page!)</Text></Text>
            <Text style={{ color:'#484848', fontSize:14}}>1. If you wish to swap SIX-Stellar to SIX-KCT, 
                please make sure you have both Klaytn’s
                public and private address on hand. You can
                generate a new wallet address on Klaytn in
                either https://scope.klaytn.com/ or KLIP wallet
                on Kakao. Please DO NOT LOSE THE PRIVATE
                KEY. SIX Network is not responsible for the
                loss of your own private key.</Text>
            <Text style={{ color:'#484848', fontSize:14}}>2. Before the end of migration, SIX tokens are on
                both Stellar Lumen and Klaytn. Any time that
                you wish to make SIX transactions, please
                make sure that the wallet address is on the
                same blockchain as the tokens you are
                sending to.</Text>
            <Text style={{ color:'#484848', fontSize:14}}>3. Please be REMINDED again that once the
                swap is initiated, you cannot swap the tokens
                on Klaytn back to Stellar Lumen.</Text>
        </View>
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
                title="Done"
                onPress={()=> this.props.navigation.navigate('Informationinput')}
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

export default Onboarding2;
