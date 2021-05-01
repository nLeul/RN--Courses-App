import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Separator from 'components/Separator';
import Badge from 'components/Badge';

const ProfileDetails = ({ route: { params } }) => {
    const detailsArr = ['company', 'location', 'followers', 'following', 'email', 'bio'];
    const { avatar_url, name, login,company, location,followers,following,email,bio} = params.gitRes
    {console.log(avatar_url)}
    return (
        <View>
            <Badge userInfo={avatar_url, name, login} />
           detailsArr.map(data=>{
         return (<View>
               <View style={styles.rowContainer}>
                 <Text style={styles.rowTitle}>{data.toUpperCase()}</Text> 
                    <Text style={styles.rowContent}>{params.data[`${data}`]}</Text> 
                </View>
                <Separator />
              </View>
                );
  });
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});
export default ProfileDetails;