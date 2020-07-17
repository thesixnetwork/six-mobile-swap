import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { fetchData } from './actions'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import { Button, colors, Divider } from 'react-native-elements';

class App extends Component {

    render() {
        const {
            container,
            header,
            title,
            image,
            content
        } = styles

        props = this.props

        return (
            <LinearGradient
                colors={['#4A00E0', '#8E2DE2']}
                style={{ flex: 1 }}
            >
                <View style={container}>
                    {/* <Image resizeMethod='center' style={image}/> */}
                    {/* <Text style={header}>Redux Example</Text> */}
                    {/* <View style={{ flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <Button  
                buttonStyle={{
                    width:270,
                    height:50,
                    backgroundColor: "#FFD76A",
                    borderRadius: 25
                }} 
                titleStyle={{
                    color:'#484848'
                }}
                title="Swap"
                />
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
                title="Check Swap Status"
                />
                </View>
            
                <Button title='Load' onPress={()=> props.fetchData()}/>

                <View style={content}>
                    {
                        props.fetchReducer.isFetching && <Text>Loading</Text>
                    }
                    {
                        !props.fetchReducer.isFetching && props.fetchReducer.data.length ?(
                            props.fetchReducer.data.map((person, i)=>{
                                return <View key={i}>
                                    <Text style={title}>Name: {person.name}</Text>
                                    <Text>Position: { person.position}</Text>
                                </View>
                            })
                        ): null
                    }

                </View> */}



                    {/* <View style={{ flex:1,backgroundColor: '#ffffff', borderRadius:10 ,marginTop:100 , marginBottom: 30 , paddingTop:40}}>
                <Image style={{  justifyContent:'center',alignItems:'center' , height: 167, width:283,  marginLeft:40}} ></Image>
                <View style={{flexDirection:'row', paddingLeft: 16, justifyContent:'space-between'}}>
                    <Text style={{ color:'#8E2DE2', fontWeight:'bold', fontSize:12, marginLeft:12}}>Stellar Lumen</Text>
                    <Text style={{ color:'#8E2DE2', fontWeight:'bold', fontSize:12, marginRight:48}}>Klaytn</Text>
                </View>
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
                /></View> */}



                    {/* <View style={{ flex:1,backgroundColor: '#ffffff', borderRadius:10 ,marginTop:100 , marginBottom: 30 , paddingTop:40}}>
             <View style={{ height:121}}></View>
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
                /></View> */}




                    {/* <View style={{flex:1, flexDirection:'column', alignItems:'center', marginTop:100}}>
                <View >
                <Text style={{ fontSize:16, color:'#FFFFFF'}}>Please enter your information</Text>
                </View>
                <View style={{ height:40}}></View>
                <View style={{ height:210,backgroundColor: '#ffffff', borderRadius:4 ,width:'100%'}}>
                <View style={{ flex:1,flexDirection:'row'}}>
                <View style={{ width:6, backgroundColor:'#EBBE44', borderRadius:4}}>
                </View>

                <View style={{ flexDirection:'column', width:'100%'}}>
                <Text style={{ fontSize:12, color:'#7D7D7D' , paddingLeft:14, paddingTop:14}}>Name</Text>
                <TextInput style={{ fontSize:18, fontWeight:'bold', color:'#484848', paddingLeft:14,  paddingBottom:14, marginTop:6}}>XXXXXXXX</TextInput>
                <View style={{ width: '100%', backgroundColor:'#7D7D7D15' ,height:1}}></View>

                <Text style={{ fontSize:12, color:'#7D7D7D', paddingLeft:14, paddingTop:14}}>Lastname</Text>
                <TextInput style={{ fontSize:18, fontWeight:'bold', color:'#484848', paddingLeft:14,  paddingBottom:14, marginTop:6}}>XXXXXXXX</TextInput>
                <View style={{ width: '100%', backgroundColor:'#7D7D7D15' ,height:1}}></View>
                <Text style={{ fontSize:12, color:'#7D7D7D', paddingLeft:14, paddingTop:14}}>Mobile number</Text>
                <TextInput style={{ width:'100%',fontSize:18, fontWeight:'bold', color:'#484848',paddingLeft:14, marginTop:6}}>XXX-XXX-XXXX</TextInput>
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
                title="Next"
                />
               </View>
               <View style={{ alignItems:'center', flexDirection:'column'}}>
               <Text style={{ color:'#ffffff'}}>Powered by</Text></View>
                */}





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






                    {/* <View style={{ flex:1,backgroundColor:'#F5F5F8'}}>
            <View style={{ marginTop:100, marginLeft:16, marginRight:16}}>
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
                title="Verify"
                />
                </View>
                <View style={{ height:40}}></View>
            </View> */}








                    {/* <View style={{ flex:1,backgroundColor: '#ffffff', borderRadius:10 ,marginTop:50  , paddingTop:40}}>
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
        <View style={{ height:320}}></View> */}





                    {/* <View style={{ flex:1,backgroundColor:'#F5F5F8'}}>
            <View style={{ marginTop:100, marginLeft:16, marginRight:16}}>
            <Text style={{ fontSize: 14, color:'#7D7D7D'}}>Klaytn wallet address</Text>
            <View style={{ height:20}}></View>
            <View style={{ height:50, backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
            <TextInput style={{ height:50 ,padding:8}} ></TextInput>
            </View>
            <View style={{ height:20}}></View>
            <Text style={{fontSize:14,color:'#7D7D7D' }}>Terms and Conditions</Text>
            <View style={{ height:20}}></View>
            <View style={{ height:300, backgroundColor:'#FFFFFF', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1}}>
            <TextInput style={{height:300, padding:8}}></TextInput>
            </View>
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
                title="Next"
                />
                </View>
                <View style={{ height:40}}></View>
                <Text style={{ fontSize:12, color:'#7D7D7D'}}>I accept this
                <Text style={{ fontSize:12, fontWeight:'bold',color:'#7D7D7D'}}> Terms and Conditions.</Text></Text>
                <Text style={{ fontSize:12, color:'#7D7D7D'}}>I’m sure that I have this
                <Text style={{ fontSize:12, fontWeight:'bold',color:'#7D7D7D'}}> Klaytn wallet’s private key.</Text></Text>
            </View>
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
                title="Next"
             /> */}





                    {/* <View style={{ flex:1,backgroundColor:'#F5F5F8'}}>
                        <View style={{ width:158, height:93 ,borderRadius:10, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center'}}>
                        </View>
                        <Text style={{ fontSize:14, color:'#7D7D7D'}}>You are swapping SIX on Stellar to this Klaytn address</Text>
                        <View style={{ height:50, backgroundColor:'#C1C1C115', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
                        <TextInput style={{ height:50 ,padding:8}} ></TextInput>
                        </View>
                        <Text style={{ fontSize:14, color:'#7D7D7D'}}>Please transfer SIX on Stellar to:</Text>
                        <View style={{ height:50, backgroundColor:'#C1C1C115', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
                        <TextInput style={{ height:50 ,padding:8}} ></TextInput>
                        </View>
                        <Text style={{ fontSize:14, color:'#7D7D7D'}}>Memo type : Text</Text>
                        <View style={{ height:50, backgroundColor:'#C1C1C115', borderRadius:8, borderColor:'#7D7D7D25' , borderWidth:1 }}>
                        <TextInput style={{ height:50 ,padding:8}} ></TextInput>
                        </View>
                        <Text style={{ fontSize:14, color:'#7D7D7D'}}>Remarks : The amount will equal to SIX</Text>
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
                        title="Next"
                    />
                    </View> */}







                    {/* <View style={{ flex: 1, backgroundColor: '#F5F5F8' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#484848' }}>Swap confirmation</Text>
                        <Text style={{ fontSize: 14, color: '#484848' }}>Please transfer SIX on Stellar to:</Text>
                        <View style={{ height: 50, backgroundColor: '#C1C1C115', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1 }}>
                            <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                        </View>
                        <Text style={{ fontSize: 14, color: '#7D7D7D' }}>Memo type : Text</Text>
                        <View style={{ height: 50, backgroundColor: '#C1C1C115', borderRadius: 8, borderColor: '#7D7D7D25', borderWidth: 1 }}>
                            <TextInput style={{ height: 50, padding: 8 }} ></TextInput>
                        </View>

                        <Text style={{ fontSize: 14, color: '#484848' }}>Remarks : The swap has been initiated and will be completed within 7 days.</Text>
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
                        />
                    </View> */}




<<<<<<< HEAD
                    <View style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: 4, marginTop: 100, marginLeft: 20, marginRight: 20, paddingTop: 40, height: 60 }}>
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED', borderBottomStyle: 'dashed', paddingBottom: 20, marginLeft: 20, marginRight: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484848', textAlign: 'center', }}>Your token swap is on process.</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484848', textAlign: 'center', marginTop: 20 }}>
                                Ticket ID : XXXXX
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', textAlign: 'center', marginTop: 10 }}>
                                Please use the following information
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', textAlign: 'center' }}>
                                to transfer SIX on Stellar
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', paddingLeft: 20, marginTop: 30 }}>
                                Name-Surname
                            </Text>
                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', paddingLeft: 20, marginTop: 10 }}>
                                Win Pollert
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', paddingLeft: 20, marginTop: 30 }}>
                                To
                            </Text>
                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', paddingLeft: 20, marginTop: 10 }}>
                                uswwldslddss92928wspcwk298agjzjcsskjs2
                            </Text>
                            <Text style={{ fontSize: 14, color: '#484848', paddingLeft: 20, marginTop: 30 }}>
                                Memo type : Text
                            </Text>

                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', paddingLeft: 20, marginTop: 10 }}>
                                SwappingSIX
                            </Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginRight: 20 }}>
                                <Text style={{ fontSize: 14, color: '#484848', paddingLeft: 20, marginTop: 30 }}>
                                    Date
                                </Text>
                                <Text style={{ fontSize: 14, color: '#484848', paddingLeft: 20, marginTop: 30 }}>
                                    Time
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginRight: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', paddingLeft: 20, marginTop: 10 }}>
                                    20 June 2018
                                </Text>
                                <Text style={{ fontSize: 14, fontWeight: '800', color: '#484848', paddingLeft: 20, marginTop: 10 }}>
                                    9:30 AM
                                </Text>
                            </View>
=======
                    {/* <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50 }}>
>>>>>>> 31a8e8a586e792732376eb59124e8cbc099fe98a

                        </View>
                    </View>

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
                        />
                    </View> */}




              {/* <View style={{flex:1, flexDirection:'column', alignItems:'center', marginTop:100}}>
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
                />
               </View>
               <View style={{ alignItems:'center', flexDirection:'column'}}>
               <Text style={{ color:'#ffffff' , marginBottom:20}}>Powered by</Text></View> */}





               {/* <View style={{flex:1, backgroundColor:'#111558'}}>

               <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
               <View style={{ height:72,backgroundColor: '#ffffff', borderRadius:4 ,width:295,height:205}}>
                   <View style={{ flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                       <View style={{ width:67,height:60,backgroundColor:'#484848',marginBottom:20}}></View>
                   <Text style={{ fontSize:14, color:'#484848'}}>Your token swap is </Text>
                   <Text style={{ fontSize:18, fontWeight:'bold',color:'#484848'}}>Completed</Text>
                </View>
               </View>
               <View style={{height:20}}>

               </View>
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
                title="OK"
                />
               </View>
               </View> */}




               <View style={{flex:1, backgroundColor:'#111558'}}>

               <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
               <View style={{ height:72,backgroundColor: '#ffffff', borderRadius:4 ,width:295,height:205}}>
                   <View style={{ flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                       <View style={{ width:67,height:60,backgroundColor:'#484848',marginBottom:20}}></View>
                   <Text style={{ fontSize:14, color:'#484848'}}>Your token swap is </Text>
                   <Text style={{ fontSize:18, fontWeight:'bold',color:'#484848'}}>On process</Text>
                </View>
               </View>
               <View style={{height:20}}>

               </View>
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
                title="OK"
                />
               </View>
               </View>





                </View>
            </LinearGradient >
        )
    }

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

})


//use to add reducer's state into the props
const mapStateToProps = (state) => ({
    fetchReducer: state.fetchReducer

})
// Use add action
const mapDispatchToProps = {
    fetchData



}

// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App)
