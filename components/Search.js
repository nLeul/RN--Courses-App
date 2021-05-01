import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

const Search = ({ navigation }) => {
    const [data, setData] = useState({ username: '', loading: false, error: null });


    const inputHandler = (text) => {
        setData((prevdata) => ({ ...prevdata, username: text }))
    }


    const searchHandler = async () => {

        setData({ ...data, username: '', loading: true, error: null });
        const response = await fetch(`https://api.github.com/users/${data.username}`);
        const res = await response.json();
        if (res.message) {
            setData({ ...data, username: '', loading: false, error: res.message });
        } else {
            setData({ ...data, username: '', loading: false, error: null });
            navigation.navigate('DASHBOARD', { gitRes: res })
        }


    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Search for a GitHub user </Text>
            <TextInput style={styles.searchInput}
                placeholder="Github username"
                onChangeText={inputHandler}
                value={data.username}
            />
            <TouchableOpacity style={styles.button} >
                <Button style={styles.buttonText} title="Search"
                    // onPress={(navigation.navigate('DASHBOARD'))}
                    onPress={searchHandler}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48BBEC',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    searchInput: {
        height: 50,
        padding: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
});
export default Search;