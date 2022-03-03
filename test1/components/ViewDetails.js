'use strict';

import React, {PureComponent} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SectionList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class ViewDetails extends React.PureComponent {

    constructor(props) {
      super(props);
    }

    render() {

        const {posterData} = this.props;

        if(posterData == undefined) {

            return (
                <SafeAreaView style={{backgroundColor: '#cccccc'}}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{
                            height: 200,
                            height: Dimensions.get('window').width/2,
                            width: Dimensions.get('window').width,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 24,
                                color: '#000000',
                            }}>Loading, please wait...</Text>
                        </View>
                    </View>
                </SafeAreaView>
            )
       }

       return (

            <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1,}}>

              <ScrollView style={styles.scrollView}>
                <View style={{flexDirection: 'column'}}>

                    <View style={{
                        height: Dimensions.get('window').width,
                        //width: Dimensions.get('window').width,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image
                          style={styles.stretch_new}
                          source={{uri: posterData.posterUrl}}
                        />
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: '#cccccc', marginTop: 5, paddingBottom: 50,}}>

                        <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 0.5, borderStyle: 'dashed' }}>
                            <Text style={{flex: 1, fontSize: 24, fontWeight: 'bold'}}>{posterData.title}</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 0.5, borderStyle: 'dashed'}}>
                            <Text style={{fontSize: 18, fontWeight: 'normal', marginRight: 10, width: 70}}>Genres:</Text>
                            <Text style={{flex: 1, fontSize: 18, fontWeight: 'normal'}}>{posterData.genres.join(', ')}</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 0.5, borderStyle: 'dashed'}}>
                            <Text style={{fontSize: 18, fontWeight: 'normal', marginRight: 10, width: 70}}>Director:</Text>
                            <Text style={{flex: 1, fontSize: 18, fontWeight: 'normal'}}>{posterData.director}</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 0.5, borderStyle: 'dashed'}}>
                            <Text style={{fontSize: 18, fontWeight: 'normal', marginRight: 10, width: 70}}>Actors:</Text>
                            <Text style={{flex: 1, fontSize: 18, fontWeight: 'normal'}}>{posterData.actors}</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <Text style={{flex: 1, fontSize: 18, fontWeight: 'normal'}}>{posterData.plot}</Text>
                        </View>

                    </View>

                </View>
             </ScrollView>

            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
  stretch_new: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width - 50,
    resizeMode: 'contain',
  },
  scrollView: {
    marginVertical: 0,
  },
});


