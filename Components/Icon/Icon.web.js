/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TIcon
 * @flow
 */
'use strict';


// Todo https://github.com/oblador/react-native-vector-icons

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './IconDefaultStyles';

// import scale from 'toothless_scale';

class TIcon extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
    align:'center',
    size:'normal'
  };

  render() {
    const {
        style,
        className,
        size,
        ...other,
    } = this.props;

    let iconSize;
    if (size == "big") {
      iconSize = "scale(1.2,1.2)"
    } else if (size == "small") {
      iconSize  = "scale(0.8,0.8)"
    } else {
      iconSize = "scale(1,1)"
    }

    let target = {};
    Object.assign(
        target,
        {display:"inline-block","transform":iconSize,"-webkit-transform":iconSize},
        style
    )

    return (
        <i className={className} aria-hidden="true" style={target} {...other}></i>
    );
  }
}

module.exports = TIcon;
