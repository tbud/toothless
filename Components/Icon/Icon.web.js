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
    align:'center'
  };

  render() {
    const {
        style,
        className,
        ...other,
    } = this.props;

    return (
        <i className={className} aria-hidden="true" style={style} {...other}></i>
    );
  }
}

module.exports = TIcon;
