import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Dashboard = ({ route: { params }, navigation }) => {
    const { gitRes } = params;

    console.log(gitRes)

    const profileDetailHandler = () => {
        navigation.navigate('PROFILE',{gitRes:gitRes});
    };

    const repoHandler = () => {
        navigation.navigate('REPOSITORIES',{gitRes:gitRes})
    };

    const notesHandler = () => {
        navigation.navigate('NOTES',{gitRes:gitRes})
    };


    return (
        <View style={styles.container}>
            <View style={styles.image} >
                <Image style={styles.image}
                    source={{
                        uri: `${gitRes.avatar_url}`,
                    }}
                />
            </View>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.blue} onPress={profileDetailHandler} >Profile Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.pink} onPress={repoHandler} >Repositories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.purple} onPress={notesHandler}>Notes</Text>
            </TouchableOpacity>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
    },
    blue: {
        backgroundColor: 'powderblue',
    },
    purple: {
        backgroundColor: 'violet'
    },
    pink: {
        backgroundColor: 'pink'
    }
});
export default Dashboard;