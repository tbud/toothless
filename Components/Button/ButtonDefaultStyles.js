"use strict";

import {StyleSheet} from 'toothless_scale';

module.exports = StyleSheet.create({
    //默认按钮
    buttonBox_deafult: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 2,
        backgroundColor: '#31353D',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
    },
    buttonText_deafult: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    //默认按钮Disable
    buttonBox_deafult_disabled: {
        backgroundColor:'#e8e8e8',
    },
    buttonText_deafult_disabled: {
    },

    //主要按钮
    buttonBox_primary:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 2,
        backgroundColor: '#0D7EFF',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
    },
    buttonText_primary:{
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    //主要按钮Disable
    buttonBox_primary_disabled: {
        backgroundColor:'#e8e8e8',
    },
    buttonText_primary_disabled: {
    },

    //幽灵按钮
    buttonBox_flat: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 2,
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
    },
    buttonText_flat: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    //幽灵按钮Disable
    buttonBox_flat_disabled: {
    },
    buttonText_flat_disabled: {
        color:'#e8e8e8',
    },
});