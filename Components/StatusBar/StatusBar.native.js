/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TStatusBar
 * @flow
 */
'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

class TStatusBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      style,
        bgcolor,
      ...other,
    } = this.props;

    return (
        <View style={[{height:20},bgcolor]}>
          <StatusBar style={style}
            {...other}>
            {children}
          </StatusBar>
        </View>
    );
  }
}

module.exports = TStatusBar;
