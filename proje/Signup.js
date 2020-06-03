import React from 'react';
import { StyleSheet, View, Text, Button, Image,Dimensions, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { globalStyle } from '../styles/global'
import Icon from 'react-native-vector-icons/EvilIcons'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default function Login({ navigation }) {
    return (
        <View style={{backgroundColor:'#FAFAFA', height:screenHeight,}}>
            <View style={styles.topBar} >
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}                        
                >
                    <Icon name="close" size={30} color="#8c8c8c"  style={styles.topIcon}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}                        
                >
                    <Text style={styles.topText}>Log In</Text>
                </TouchableOpacity>           
            </View>
            <View style={styles.smallContainer}>
                <Image style={styles.smallImg} source={require('./Blue2.png')}/>
                <Text style={styles.LogInText}>Sign Up</Text>
            </View>
            <View style={styles.loginContainerOuter}>
                <View style={styles.loginContainer}>
                    <TextInput style={styles.textInput} placeholder='Email'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Password'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Re-type Password'></TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Dashboard')}
                        
                        >
                        <View style={styles.logIn}>
                        
                        
                        <Text style={styles.logInText}>Sign Up</Text>
                                        
                        </View>
                    </TouchableOpacity>
                    <View style={styles.forgotPassword} >
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                        >
                        <Text style={styles.forgotPasswordText} >Already have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.version}>Version 1.0.0</Text>
            </View>
        </View>
    )   
}

const styles=StyleSheet.create({
    topBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    topIcon:{
        marginLeft:10,
    },
    topText:{
        fontSize:15,
        color:'#8c8c8c',
        marginRight:10,

    },
    smallContainer:{
        width:screenWidth,
        alignItems:'center',
    },
    smallImg:{
        width:80,
        height:80,
    },
    loginContainerOuter:{
        alignItems:'center',
        marginTop:50,
    },
    loginContainer:{
        width:'80%',
        alignItems:'center',
        backgroundColor:'white',
    },
    LogInText:{
        color:'#2F7AE1',
        fontSize:20,
    },
    logIn:{
        backgroundColor:'#0066ff',
        width:230,
        padding:10,
        borderRadius:20,
        alignItems:'center',
        marginVertical:10,
      },
      logInText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
      },
      forgotPasswordText:{
        color:'#8c8c8c',
        fontWeight:'bold',
        marginBottom:20,
      },
      textInput:{
        width:'80%',
      },
      version:{
          fontSize:12,
          color:'#cccccc',
      },

})