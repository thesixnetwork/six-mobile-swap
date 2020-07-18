
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput , TouchableOpacity, Dimensions,Platform} from 'react-native';
// import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors } from 'react-native-elements';
import BackIcon from '../../assets/images/back.png'
import Keyboard from 'react-native-keyboard'

const d = Dimensions.get('window')
const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))

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


class Phoneinput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ""
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
          {this.state.text.length === 6 &&
             this.props.navigation.navigate('Swap1')
          }
        {/* <View style={{flex:1, flexDirection:'column', alignItems:'center', marginTop:100}}>
            <View >
                <Text style={{ fontSize:16, color:'#FFFFFF'}}>Please type your verification code</Text>
            </View>
            <View style={{ height:40}}></View>
            <View style={{  flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>
                <View style={{ width:4, height:55 , borderRadius:8}}></View>
                <View style={{ width:48, height:55 , backgroundColor:'#ffffff', borderRadius:8}}>
                    <View style={{ flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <TextInput style={{fontSize:20, fontWeight:'bold', color:'#484848', justifyContent:'center', alignItems:'center'}}>X</TextInput>
                </View>
                </View>

            </View>
            <View style={{ height:40}}></View>

            <Text style={{ fontSize: 16, color:'#ffffff'}}>Ref No.<Text style={{color:'#ffffff',fontSize:16, fontWeight:'bold'}}> XXXX</Text></Text>
            <View style={{ height:20}}></View>
            <Text style={{ fontSize: 16, color:'#ffffff'}}>Didn’t receive an SMS?<Text style={{color:'#FFD76A',fontSize:16, fontWeight:'bold' ,fontStyle:'italic'}}> Try again</Text></Text>
            </View> */}
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>
                        <View >
                            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Please type your verification code</Text>
                        </View>
                        <View style={{ height: 40 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[0]}</TextInput>
                                </View>
                            </View>
                            <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                            <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[1]}</TextInput>
                                </View>
                            </View>
                            <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                            <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[2]}</TextInput>
                                </View>
                            </View>
                            <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                            <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[3]}</TextInput>
                                </View>
                            </View>
                            <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                            <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[4]}</TextInput>
                                </View>
                            </View>
                            <View style={{ width: 4, height: 55, borderRadius: 8 }}></View>
                            <View style={{ width: 48, height: 55, backgroundColor: '#ffffff', borderRadius: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', justifyContent: 'center', alignItems: 'center' }}>{this.state.text[5]}</TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 40 }}></View>
                        <Text style={{ fontSize: 16, color: '#ffffff' }}>Ref No.<Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}> XXXX</Text></Text>
                        <View style={{ height: 20 }}></View>
                        <Text style={{ fontSize: 16, color: '#ffffff' }}>Didn’t receive an SMS?<Text style={{ color: '#FFD76A', fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' }}> Try again</Text></Text>
                        <View style={{ flex: 1 }}>
                        </View>
                        <Keyboard
                            keyboardType="number-pad"
                            onClear={this._handleClear.bind(this)}
                            onDelete={this._handleDelete.bind(this)}
                            onKeyPress={this._handleKeyPress.bind(this)}
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

export default Phoneinput;
