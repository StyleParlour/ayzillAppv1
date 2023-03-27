import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Image, TextInput } from 'react-native'
import React from 'react'
import MultiSteps from 'react-native-multi-steps';
import { StatusBar } from 'expo-status-bar';


export default function Singup({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{ width: "100%", display: 'flex' }}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                    <MultiSteps
                        containerButtonStyle={styles.containerButtonStyle}
                        buttonStyle={styles.buttonStyle}
                        buttonLabelStyle={styles.btnText}
                        onMoveNext={function (data) { console.log("next", data) }}
                        onMovePrevious={function (data) { console.log("previous", data) }}
                        onSubmit={function () { navigation.navigate('Home') }}
                        
                        config ={{
                             submitButtonLabel: 'Signup'
                         }}
                        >
                        <View style={{ display: 'flex', alignItems: 'center', }}>
                            <View style={styles.inputWarpper}>
                                <Text style={styles.label}>Name</Text>
                                <TextInput inputMode='text' style={styles.input} placeholder='John Doe'></TextInput>
                            </View>

                            <View style={styles.inputWarpper}>
                                <Text style={styles.label}>Phone </Text>
                                <TextInput inputMode='tel' style={styles.input} placeholder='9090909090'></TextInput>
                            </View>
                        </View>

                        <View style={{ display: 'flex', alignItems: 'center', }}>
                            <View style={styles.inputWarpper}>
                                <Text style={styles.label}>Address</Text>
                                <TextInput inputMode='text' style={styles.input} placeholder='123 Street '></TextInput>
                            </View>
                            <View style={styles.inputWarpper}>
                                <Text style={styles.label}>Pincode</Text>
                                <TextInput inputMode='tel' style={styles.input} placeholder='400067'></TextInput>
                            </View>
                        </View>

                        <View style={{ display: 'flex', alignItems: 'center', }}>
                            <View style={styles.inputWarpper}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput secureTextEntry={true} style={styles.input} placeholder='p@ssword'></TextInput>
                            </View>

                            <View style={styles.inputWarpper}>
                                <Text style={styles.label}>Re-Password</Text>
                                <TextInput secureTextEntry={true} style={styles.input} placeholder='p@ssword'></TextInput>
                            </View>
                        </View>

                    </MultiSteps>
                    <StatusBar style='light' />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
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

    containerButtonStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingRight: 30,
    },
    buttonStyle: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        marginRight: 10,
    },

    logo: {
        width: 250,
        height: 100,
        resizeMode: "contain",
        marginTop: "20%",
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

    btnText: {
        color: '#171963'
    }
});