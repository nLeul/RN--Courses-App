import React, { useState } from 'react';
import {
    StyleSheet,View,ScrollView,TextInput,Text,TouchableOpacity, Button
} from 'react-native';

import Badge from 'components/Badge';
import Separator from 'components/Separator';



function Notes({route: {params} }) {

    const [state,setState] = useState([]);
    const [Inputext,setInputext] = useState('');

    const submitHandler = ()=>{
        setState(prev=>[...prev, Inputext])

    }
    const noteTemp = null;
    noteTemp=state.map(data=>{
           return (<View>
                 <View style={styles.rowContainer}>
                   <Text >{data}</Text>                     
                  </View>
                  <Separator />
                </View>
                  );
    });

    return (
        <View style={styles.container}>
            <Badge userInfo={params.data}/>
            <Separator />
            <ScrollView>
             {noteTemp}
            </ScrollView>
       
         <TextInput style={styles.searchInput} placeholder="New Note" onChangeText={txt=>{setInputext(txt)}}/>
         <TouchableOpacity style={styles.button} onPress={submitHandler}>
         <Text style={styles.buttonText}>Submit</Text>
         </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Notes;