/* Fundamentals */
import { Platform, Dimensions, StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
/* Externals */
import Jhr from '../libs/Jhr'; // This Library Uses An Axios Object as It's classed.

export default function DataScreen(props) {

    const params = props?.route?.params; // Navigator Params From Parent

    const { width, height } = Dimensions.get('window'); // Get Screen Width and Height
    const { scale, verticalScale, moderateScale } = props?.scales; // scale Methods From Parent

    const request = { // Craeting Request Object To Get Data That are Wanted
        name: params?.request?.name, // Coming From One of Menu Screen's Button Where Called to Navigate Method
        method: params?.request?.method // Coming From One of Menu Screen's Button Where Called to Navigate Method
    };

    const [data, updateData] = useState(null); // Initiliaze State Data in Functional Programming

    // It is used both ComponentDidMount and ComponentUnMount instead
    // It'll be Run If and Only If request.name is Changed
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/" + request.name; // Initiliaze url
        const myJhr = new Jhr(url, request.method ? request.method : 'undefined'); // Creating Http Request Instance

        // It is Called After Request Method is Checked.
        const callUpdateData = async () => {
            const result = await myJhr.fetchResponse(); // Calling One of Http Request Instance's Method To Get Data
            updateData(result.data); // Updating State Data and Render The Component Again
        }

        // Handling Http Request Instance Depending On Request Method
        if (request.method === 'GET') { // It'll be Runing If Requested Method is GET
            callUpdateData();
        }
        
    }, [request.name]);

    const isDataEmpty = data && data.length > 0; // Setting Rule For Responsive Settings are Executed

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
            justifyContent: isDataEmpty ? "space-evenly" : "center",
            alignItems: isDataEmpty ? "stretch" : "center",
            backgroundColor: "#4A6572",
        },
        dataContainer: {
            width: "95%",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
            backgroundColor: "#eeeeee",
            borderRadius: 10,
            marginVertical: 8
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
        keyText: {
            color: "#666666",
            marginLeft: 6,
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
            fontWeight: "bold",
        },
        dataText: {
            color: "#aaaaaa",
            marginLeft: 6,
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30), // Responsive Style
            fontWeight: "bold",
            flexShrink: 1,
        }
    });

    // It's Created For FlatList Render Property To Render a Data View Which will be Appended In FlatList 
    const DataItem = ({ data }) => (
        <View style={[styles.dataContainer]}>
            {
                Object.keys(data).map((key, index) => {
                    return (
                        <View style={{ flexDirection: "row" }} key={`${data.id}_${index}`}>
                            <Text style={styles.keyText}>{key}</Text>
                            <Text style={styles.keyText}>:</Text>
                            <Text style={styles.dataText}>
                                {
                                    typeof data[key] !== 'object' ? // Converting to String if Data is an Object
                                        data[key] :
                                        (
                                            // Because of Text is Out of Box On Web, It Checks if OS is either ios or android
                                            ['android', 'ios'].includes(Platform.OS) ?
                                                JSON.stringify(data[key]) :
                                                data[key].toString()
                                        )
                                }
                            </Text>
                        </View>
                    )
                })
            }
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>{request.name ? request.name.toUpperCase() : "UNDEFINED"}</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                {
                    isDataEmpty ? // For Rendering a Component Depending On Obtained Data From HttpRequest
                        (
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <DataItem data={item}></DataItem>}
                                numColumns={data.length}
                                key={data.length}
                                columnWrapperStyle={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            />
                        ) :
                        (
                            <View style={styles.dataContainer}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.keyText}>error</Text>
                                    <Text style={styles.keyText}>:</Text>
                                    <Text style={styles.dataText}>{request.name ? "No Data" : "Click a Menu's Button"}</Text>
                                </View>
                            </View>
                        )
                }
            </View>
        </View>
    );
}

