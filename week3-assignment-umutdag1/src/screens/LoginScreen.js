/* Fundamentals */
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
/* Externals */
import FirebaseConn from '../../firebase';

export default function LoginScreen(props) {

    const params = props?.route?.params; // Navigator Params From Parent
    const navigation = props?.navigation; // Navigation Instance From Parent

    const { width, height } = Dimensions.get('window'); // Get Screen Width and Height
    const { scale, verticalScale, moderateScale } = props?.scales; // scale Methods From Parent

    // Initiliaze user of State Data in Functional Programming
    const [user, setUser] = useState({
        email: 'test@gmail.com', // Assign it to Empty String If You Want
        password: '123456' // Assign it to Empty String If You Want
    });

    // It will be run If Login Button is Clicked
    const loginAuth = async () => {
        // Getting Users From Requested Firebase
        const usersSnapShot = await FirebaseConn.getDocs(
            FirebaseConn.collection(FirebaseConn.db, "users")
        ); 
        // If user is Matched Then Assing it Matched Doc, Else undefined
        const resultDoc = usersSnapShot.docs.find(doc => {
            const docData = doc.data();
            return docData.email === user.email &&
                docData.password === user.password
        }); 
        const result = resultDoc?.data(); // Getting Data From Doc
        if (result) { // If Result is Neither undefined or null
            // Go to Layout Screen With Params of Matched fullName Obtained From Doc
            navigation.navigate({
                name: 'Layout',
                params: {
                    fullName: `${result.name} ${result.surname}`
                },
                merge: true,
            });
        } else {
            // Setting user of State Data to Empty Because of Wrong Email or Password or Both
            setUser({
                email: '',
                password: ''
            });
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#344955"
        },
        topContainer: {
            flex: 2,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#344955",
        },
        bottomContainer: {
            flex: 8,
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#4A6572",
        },
        shadow: {
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 24,
        },
        mainText: {
            color: "#eeeeee",
            marginLeft: "3%",
            fontSize: width > height ? scale(height / width * 35) : verticalScale(width / height * 70), // Responsive Style
            fontWeight: "bold",
        },
        inputContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            backgroundColor: "#dddddd",
            textAlign: "center",
            width: "60%",
            fontSize: width > height ? scale(height / width * 12) : verticalScale(width / height * 24), // Responsive Style
            padding: width > height ? scale(height / width * 10) : verticalScale(width / height * 20), // Responsive Style
            marginVertical: 10
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: width > height ? scale(height / width * 30) : verticalScale(width / height * 60) // Responsive Style
        },
        button: {
            backgroundColor: "#eeeeee",
            textAlign: "center",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
            borderRadius: 10,
            fontWeight: "bold",
            width: "25%",
            marginHorizontal: 12
        },
        buttonText: {
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
            color: "#999999",
            fontWeight: "bold",
            textAlign: "center",
        }
    });

    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>LOGIN</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Email"}
                        onChangeText={email => setUser(prev => ({ ...prev, email }))}
                        value={user.email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        onChangeText={password => setUser(prev => ({ ...prev, password }))}
                        value={user.password}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button]}
                        activeOpacity={0.7}
                        onPress={() => loginAuth()}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button]}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>BACK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}