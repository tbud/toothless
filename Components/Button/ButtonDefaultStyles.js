"use strict";

import {StyleSheet} from 'toothless_scale';

module.exports = StyleSheet.create({
    buttonBox: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
        borderRadius: 2,
        backgroundColor: '#000',
    },
    buttonText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 8,
        paddingRight: 8
    },
    //幽灵按钮
    buttonFlatBox: {
        backgroundColor: 'rgba(0,0,0,0)',

    },
    buttonFlatText: {
        color: '#000',
    },
    //不可点击
    buttonDisableBox: {
        opacity: 0.1,
    }
});