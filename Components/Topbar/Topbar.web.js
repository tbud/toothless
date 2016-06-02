/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TTopbar
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './TopbarDefaultStyles';

// import scale from 'toothless_scale';

class TTopbar extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
  };

  render() {
    const {
        children,
        style,
        title,
        backIcon,
        backIconAndText,
        btnText,
        backOnPress,
        btnIcon,
        btnImageIcon,
        btnOnPress,
        ...other,
    } = this.props;

    let backContent;
    if (backIconAndText) {
      backContent = (
          <TouchableOpacity onPress={backOnPress}>
            <Text>&lt; 返回</Text>
          </TouchableOpacity>
      );
    } else if (backIcon) {
      backContent = (
          <TouchableOpacity onPress={backOnPress}>
            <Text>&lt;</Text>
          </TouchableOpacity>
      );

    }


    // console.log(target);

    return (
        <div 
            {...other}>

          <div style={{flex:2}}>
            {backContent}
          </div>

          <div style={{flex:3}}>
            <Text style={{textAlign:'center',fontSize:16, fontWeight:'bold'}}>{title}</Text>
          </div>

          <div style={{flex:2}}>
            <div onPress={btnOnPress}>
              <p style={{textAlign:'right',}}>设置</p>
            </div>
          </div>

        </div>
    );
  }
}

module.exports = TTopbar;
