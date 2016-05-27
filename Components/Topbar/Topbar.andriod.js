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

import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  Text,
  ToolbarAndroid,
} from 'react-native';

import {Scale} from 'toothless_scale';

import defaultStyles from './TopbarDefaultStyles';

class TTopbar extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
  };

  static propTypes = {
    cs: PropTypes.string,
  }

  render() {
    const {
      children,
      cs,
      style,
      ...other,
    } = this.props;

    return (
      <ToolbarAndroid style={[Scale.getStyle(TText.name, cs, defaultStyles), style]}
        {...other}>
        {children}
      </ToolbarAndroid>
    );
  }
}

module.exports = TTopbar;
