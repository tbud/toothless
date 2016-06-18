/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TSearchBar
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './SearchBarDefaultStyles';


let colseModal = {}


// import scale from 'toothless_scale';

class TSearchBar extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
    align:'center',
      title:'标题',
      intro:'这里是正文',
      okText:"OK",
      onCancel:"closeModal",
  };

    render() {
    const {
        children,
        cs,
        style,
        title,
        content,
        okText,
        cancelText,
        onOK,
        onCancel,
        visible,
        ...other,
    } = this.props;

    // let target = {};
    // Object.assign(target,{margin:0, lineHeight:1.44, textAlign:'center', flex:1, '-webkit-overflow-scrolling': 'touch'} ,Scale.getStyle(TText.name, cs, defaultStyles), style);

    return (
        <div style={{flex:1, backgroundColor:"#efefef", paddingLeft:8, paddingRight:8, height:36, alignItems:"center", justifyContent:"center", display:"flex", position:"relative"}} className="SearchBar">
            <div style={{width:"100%", height:25, backgroundColor:"#fff", borderRadius:6,textAlign:"center", paddingTop:5, color:"#999"}} ><i className="ed ed-search" style={{fontSize:12,}}></i>&nbsp;搜索</div>
        </div>
    );
  }
}

module.exports = TSearchBar;