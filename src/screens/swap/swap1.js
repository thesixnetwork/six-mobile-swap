
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import Keyboard from 'react-native-keyboard'
import Swapverify from '../../assets/images/swapverify.png'
import { onChange } from 'react-native-reanimated';

let model = {
    _keys: [],

    _listeners: [],

    addKey(key) {
        this._keys.push(key);
        this._notify();
    },

    delKey() {
        this._keys.pop();
        this._notify();
    },

    clearAll() {
        this._keys = [];
        this._notify();
    },

    getKeys() {
        return this._keys;
    },

    onChange(listener) {
        if (typeof listener === "function") {
            this._listeners.push(listener);
        }
    },

    _notify() {
        this._listeners.forEach(listner => {
            listner(this);
        });
    }
};


class Swap1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            modalVisible: false
        };
    }

    

    componentDidMount() {
        model.onChange(model => {
            this.setState({ text: model.getKeys().join("") });
        });

           
            
          
    }

    _handleClear() {
        model.clearAll();
    }

    _handleDelete() {
        model.delKey();
    }

    _handleKeyPress(key) {
        model.addKey(key);
    }
   

    showOverlay() {
        this.setState({modalVisible: true})

        if (this.state.text.length === 4){
        this.hideOverlay.bind(this)
        }
      }
    
      hideOverlay  ()  {
        // this.props.navigation.navigate('Swap2')
          this.setState({modalVisible: false})
      }
  render(){
    return(
        // <LinearGradient
        // colors={['#4A00E0', '#8E2DE2']}
        // style={{ flex: 1 }}>
        <View style={styles.container}>
            {this.state.text.length === 4 ?
            // this.hideOverlay
             this.props.navigation.navigate('Swap2')
            :
            <Overlay visible={this.state.modalVisible} closeOnTouchOutside animationType="zoomIn"
            containerStyle={{backgroundColor: '#11155895'}} 
            childrenWrapperStyle={{backgroundColor: '#1115580', borderRadius:10}} >
                <View style={{width:'100%',height:524, backgroundColor:'#ffffff', borderRadius:10, alignItems:'center' ,marginBottom:150}}>
                    <Image source={Swapverify} style={{ width:209, height:108, marginTop:20}}></Image>
                    <View style={{ flexDirection: 'column', padding: 16 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#484848' }}>Waring</Text>
                            <View style={{ height: 10 }}></View>
                            <Text style={{ fontSize: 14, color: '#484848' }}>Both Klaytn wallet and Klip wallet are for Klay
                    and KCT tokens. Please make sure<Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8E2DE2' }}>YOU HAVE THE PRIVATE KEY</Text>
                                <Text style={{ fontSize: 14, color: '#484848' }}> to access this wallet address
                    or else you will lose all of your SIX-KCT tokens.</Text></Text>
                            <View style={{ height: 10 }}></View>
                            <Text style={{ fontSize: 14, color: '#484848' }}>Please note that SIX Network is not
                                responsible for the loss of your private key and
                the SIX-KCT tokens.</Text>

                <View style={{ height: 50, backgroundColor: '#FFFFFF', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1, margin: 16 }}>
                            <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 40 }}></View>
                                <Text style={{ fontSize: 14, color: '#484848', }}>Please type your</Text>
                                <Text style={{ fontSize: 14, color: '#484848', fontWeight: 'bold' }}>last 4-digit of your Klaytn address</Text>
                                <View style={{ height: 20 }}></View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[0]}</TextInput>
                                        </View>
                                    </View>
                                    <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[1]}</TextInput>
                                        </View>
                                    </View>
                                    <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[2]}</TextInput>
                                        </View>
                                    </View>
                                    <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[3]}</TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 50 }}></View>
                    <View >
                        <Keyboard
                            keyboardType='number-pad'
                            onClear={this._handleClear.bind(this)}
                            onDelete={this._handleDelete.bind(this)}
                            onKeyPress={this._handleKeyPress.bind(this)}
                        />
                    </View>
                        </View>
                        </View>
                </View>
            
                    
            
          </Overlay>
          }
        <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
        style={{ height:96 , alignItems:'center', justifyContent:'flex-end'}}>
            <Text style={{ color:'#ffffff', fontWeight:'bold', marginBottom:10}}>SIX SWAP</Text>
        </LinearGradient>
        <View style={{ flex:1,backgroundColor:'#F5F5F8'}}>
            <View style={{ marginTop:10, marginLeft:16, marginRight:16}}>
            <Text style={{ fontSize: 14, color:'#7D7D7D'}}>Please enter your Klaytn wallet address</Text>
            <View style={{ height:20}}></View>
            <View style={{ height:50, backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
            <TextInput style={{ height:50 ,padding:8}} ></TextInput>
            </View>
            <View style={{ height:20}}></View>
            <Text style={{fontSize:14,color:'#8E2DE2',textDecorationLine: 'underline' }}>How to create Klaytn wallet</Text>
            </View>
            <View style={{ flex:1 , flexDirection:'column', alignItems:'center', justifyContent:'flex-end'}}>
            <Button  
                    buttonStyle={{
                    width:270,
                    height:50,
                    backgroundColor: "#4A00E0",
                    borderRadius: 25,
                }} 
                titleStyle={{
                    color:'#ffffff',
                    fontSize:18
                }}
                onPress={this.showOverlay.bind(this)}
                title="Verify"
                />
                </View>
                <View style={{ height:40}}></View>
            </View>

            
           {/* {this.state.text.length === 4 &&
             this.hideOverlay.bind(this)
          } */}


            {/* <Overlay visible={this.state.modalVisible} closeOnTouchOutside animationType="zoomIn"
            containerStyle={{backgroundColor: '#11155895'}} 
            childrenWrapperStyle={{backgroundColor: '#1115580', borderRadius:10}} >
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
                <View style={{width:'100%',height:524, backgroundColor:'#ffffff', borderRadius:10, alignItems:'center' ,marginBottom:150}}>
                    <Image source={Swapverify} style={{ width:209, height:108, marginTop:20}}></Image>
                    <View style={{ flexDirection: 'column', padding: 16 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#484848' }}>Waring</Text>
                            <View style={{ height: 10 }}></View>
                            <Text style={{ fontSize: 14, color: '#484848' }}>Both Klaytn wallet and Klip wallet are for Klay
                    and KCT tokens. Please make sure<Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8E2DE2' }}>YOU HAVE THE PRIVATE KEY</Text>
                                <Text style={{ fontSize: 14, color: '#484848' }}> to access this wallet address
                    or else you will lose all of your SIX-KCT tokens.</Text></Text>
                            <View style={{ height: 10 }}></View>
                            <Text style={{ fontSize: 14, color: '#484848' }}>Please note that SIX Network is not
                                responsible for the loss of your private key and
                the SIX-KCT tokens.</Text>

                <View style={{ height: 50, backgroundColor: '#FFFFFF', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1, margin: 16 }}>
                            <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 40 }}></View>
                                <Text style={{ fontSize: 14, color: '#484848', }}>Please type your</Text>
                                <Text style={{ fontSize: 14, color: '#484848', fontWeight: 'bold' }}>last 4-digit of your Klaytn address</Text>
                                <View style={{ height: 20 }}></View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[0]}</TextInput>
                                        </View>
                                    </View>
                                    <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[1]}</TextInput>
                                        </View>
                                    </View>
                                    <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[2]}</TextInput>
                                        </View>
                                    </View>
                                    <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                                    <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#7D7D7D15', borderWidth: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput maxLength={1} keyboardType="default" style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[3]}</TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 50 }}></View>
                    <View >
                        <Keyboard
                            keyboardType='number-pad'
                            onClear={this._handleClear.bind(this)}
                            onDelete={this._handleDelete.bind(this)}
                            onKeyPress={this._handleKeyPress.bind(this)}
                        />
                    </View>
                        </View>
                        </View>
                </View>
            
                    
            
          </Overlay> */}
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
                
                });

export default Swap1;
