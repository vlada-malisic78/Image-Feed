import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class NavigationBar extends Component {
    static PropTypes = {
        title: PropTypes.string,
        leftText:PropTypes.string,
        onPressLeftText: PropTypes.func
    }
    static defaultProps = {
        title: '',
        leftText: '',
        onPressLeftText: () => {}
    }
    state = {  }
    render() { 
        return ( 
            <View>
                <TouchableOpacity>
                    <Text>{leftText}</Text>
                </TouchableOpacity>
                <Text style={}>{title}</Text>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        height:40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        fontWeight: 'bold',
    },
    leftText: {
        position: 'absolute',
        left:20,
        top: 0
    }
});
 
export default NavigationBar;