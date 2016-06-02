/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TIconText
 * @flow
 */
'use strict';


// Todo https://github.com/oblador/react-native-vector-icons

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './IconTextDefaultStyles';

// import scale from 'toothless_scale';

class TIconText extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
    align:'center'
  };

  render() {
    const {
        children,
        cs,
        style,
        align,
        ...other,
    } = this.props;

    let target = {};
    Object.assign(target,{margin:0, lineHeight:1.44, textAlign:align,}, Scale.getStyle(TText.name, cs, defaultStyles), style);

    //打印到console Todo del
    // console.log(target);

    return (
      <p style={target}>{children}</p>
    );
  }
}

module.exports = TIconText;