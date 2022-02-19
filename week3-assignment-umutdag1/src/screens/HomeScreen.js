/* Fundamentals */
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HomeScreen(props) {

    const params = props?.route?.params; // Navigator Params From Parent
    const outerParams = props?.outerParams; // One of Component Prop Being Named as outerParams From Parent
    const navigation = props?.navigation; // Navigation Instance From Parent

    const { width, height } = Dimensions.get('window'); // Get Screen Width and Height
    const { scale, verticalScale, moderateScale } = props?.scales; // scale Methods From Parent

    const fullName = outerParams?.fullName; // One of Component Prop Being Named as fullName From Parent

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
        textContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: "#eeeeee",
            textAlign: "center",
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: width > height ? scale(height / width * 20) : verticalScale(width / height * 40) // Responsive Style
        },
        button: {
            backgroundColor: "#eeeeee",
            textAlign: "center",
            width: "40%",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
            borderRadius: 10
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
                <Text style={styles.mainText}>HOME</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Hello,</Text>
                    <Text style={styles.text}>{fullName}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button]}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Main')}
                    >
                        <Text style={styles.buttonText}>SIGN OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}