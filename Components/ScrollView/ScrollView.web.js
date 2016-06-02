/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TScrollView
 * @flow
 */
'use strict';

import React, {Component} from 'react';

class TScrollView extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    horizontal: false,
  };


  render() {
    const {
        children,
        style,
        horizontal,
        ...other,
    } = this.props;

    let horizontalsStyle;
    if (horizontal){
      horizontalsStyle={'overflow-x':'auto', 'overflow-y':'hidden'}
    } else {
      horizontalsStyle={'overflow-x':'hidden', 'overflow-y':'auto'}
    }

    let target = {};
    Object.assign(
        target,
        {flex:1,position:'relative',width:'100%',height:'100%','-webkit-overflow-scrolling' : 'touch' },horizontalsStyle,style
    )


    return (
      <div style={target}>
        {children}
      </div>
    );
  }
}

module.exports = TScrollView;
