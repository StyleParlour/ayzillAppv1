import { View, Text, StyleSheet, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Login({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{width:"100%"}} >
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />

                    <View style={styles.inputWarpper}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput inputMode='tel' style={styles.input} placeholder='8369088360'></TextInput>
                    </View>

                    <View style={styles.inputWarpper}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder='p@ssword'></TextInput>
                    </View>

                    <View style={styles.inputWarpper}>
                        <TouchableOpacity style={styles.btn}
                      
                        >
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputWarpper}>
                        <TouchableOpacity style={styles.btn}
                          onPress={()=>{
                            navigation.navigate('Signup')
                        }}
                        >
                            <Text style={styles.btnText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                    <StatusBar style='light' />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#171963',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 100,
        resizeMode: "contain",
        marginTop:"20%",
    },
    heading: {
        fontSize: 20,
        color: "#fff",
        width: 200,

    },

    label: {
        color: "#fff",
        fontSize: 18,
    },
    input: {
        backgroundColor: '#fff',
        color: "#171963",
        fontSize: 18,
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
    },

    inputWarpper: {
        width: '80%',
        marginTop: 15,

    },

    btn:{
        backgroundColor:'#fff',
        color:'#171963',
        borderRadius:'100%',
        textAlign:'center',
        padding:15,
        marginTop:10,
    },

    btnText:{
        color:'#171963',
        fontSize:18,
        textAlign:'center',
    }
});
