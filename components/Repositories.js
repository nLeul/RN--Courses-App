import React from 'react';
import {
    StyleSheet, View,ScrollView,TouchableOpacity,Text
} from 'react-native';

import Separator from 'components/Separator';
import Badge from 'components/Badge';

function Repositories({ navigation, route:{params} }) {
    const [state , setState] =React.useState({list:[], loading:false, error:null});
;

     React.useEffect(async()=>{
        let fetchObj=await  fetch(`${params.data.repos_url}`)
        let jsonObj =await fetchObj.json();
        setState(prev=>({...prev,list:jsonObj}));
     },[]);

    const webViewHandler = (obj)=>{

        navigation.navigate('RepositoriesDetail',{url:obj.html_url});
    }

    const store = null;
    store = state.list.map(obj=>{
             return (<View>
                 <TouchableOpacity style={styles.rowContainer} onPress={()=>webViewHandler(obj)}>
                      <Text style={styles.name}>{obj.name}</Text>
                      <Text style={styles.description}>{obj.description}</Text>
                 </TouchableOpacity>
                 <Separator />
                 </View>
             )
         });

    return (
        <View style={styles.container}>
            <Badge userInfo={params.data}/>
            <Separator />
            <ScrollView >
               {store}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default Repositories;