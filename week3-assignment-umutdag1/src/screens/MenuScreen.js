/* Fundamentals */
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function MenuScreen(props) {

    const params = props?.route?.params; // Navigator Params From Parent
    const navigation = props?.navigation; // Navigation Instance From Parent

    const { width, height } = Dimensions.get('window'); // Get Screen Width and Height
    const { scale, verticalScale, moderateScale } = props?.scales; // scale Methods From Parent

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
            justifyContent: "space-evenly",
            alignItems: "center",
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
        button: {
            backgroundColor: "#eeeeee",
            textAlign: "center",
            width: "50%",
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
                <Text style={styles.mainText}>MENU</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Layout', {
                        screen: 'Data',
                        params: {
                            request: {
                                name: "users",
                                method: "GET"
                            }
                        },
                    })}
                >
                    <Text style={styles.buttonText}>USERS LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Layout',{
                        screen: 'Data',
                        params: {
                            request: {
                                name: "posts",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>POSTS LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Layout',{
                        screen: 'Data',
                        params: {
                            request: {
                                name: "albums",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>ALBUMS LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Layout',{
                        screen: 'Data',
                        params: {
                            request: {
                                name: "comments",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>COMMENTS LIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}