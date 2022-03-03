'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Component,
  SectionList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import ViewDetails from './components/ViewDetails';

export default class Info extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            poster: null
        }

    }

    componentDidMount() {
        this.setState({posterData: this.props.poster});
    }

    render() {
         return (
            <ViewDetails posterData={this.state.posterData} />
         )
    }

}

