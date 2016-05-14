"use strict";

import {StyleSheet} from 'toothless_scale';

module.exports = StyleSheet.create({
    listTouchableOpacity: {
    },
    listView: {
        height:44, borderStyle:'solid', borderBottomWidth:0.5, borderBottomColor:'#efefef', flexDirection:'row',alignItems:'center',paddingRight:16
    },
    listTitle: {
        fontSize:16,flex:1, color:'#333'
    },
    listIcon: {
        width:24,height:24, fontSize:16, marginRight:16,
    },
    listImageIcon: {
        width:24,height:24, marginRight:16,
    },
    listItemValue: {
        fontSize:16,flex:1,textAlign:'right', color:'#808080',
    },
    listItemIcon: {
        fontSize:16,flex:1,textAlign:'right', color:'#808080',
    },
    listItemImageIcon: {
        width:24,height:24
    },
    lastLineStyle:{
        marginBottom:10,
    },
    lastLineStyleView:{
        paddingLeft:16
    },
    notLastLineStyleView:{
        paddingLeft:16
    }
});
