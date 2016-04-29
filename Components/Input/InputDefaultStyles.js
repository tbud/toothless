"use strict";

import {StyleSheet} from 'toothless_scale';

module.exports = StyleSheet.create({
    inputBox: {
        height: 40,
        borderColor: '#efefef',
        borderWidth: 1,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 2,
        backgroundColor: '#efefef',
        borderStyle: 'solid',
    },
    inputText: {
        height: 40,
        color: '#333',
        fontSize: 14,
        flex:1,
        paddingLeft: 8,
        paddingRight: 8,
    },

    inputBox_singleline: {
        height: 40,
        borderColor: '#efefef',
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 0,
        backgroundColor: '#fff',
        borderStyle: 'solid',
    },
    inputText_singleline: {
        height: 40,
        color: '#333',
        fontSize: 14,
        flex:1,
    },

    inputBox_disabled: {
        borderColor: '#fff',
        backgroundColor: '#fff',
    },
    inputText_disabled: {
        color: '#bbb',
    },

    inputBox_error: {
        borderColor: '#ff0040',
    }
    //Todo add placeholder style
});