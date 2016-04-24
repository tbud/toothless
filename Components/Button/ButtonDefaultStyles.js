"use strict";

import {StyleSheet} from 'toothless_scale';

//默认样式的色彩方案使用Flat UI的Color Swatches (http://www.bootcss.com/p/flat-ui)
module.exports = StyleSheet.create({
  buttonStyle: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
    margin: 4,
    borderRadius: 2,
    backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize:14,
    color: '#fff',
    textAlign:'center',
  },
  //不能点击
  buttonDisable:{
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
    margin: 4,
    borderRadius: 2,
    backgroundColor: '#BDC3C7',
  },
  //危险操作
  buttonDanger: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
    margin: 4,
    borderRadius: 2,
    backgroundColor: '#e74c3c',
  }
});