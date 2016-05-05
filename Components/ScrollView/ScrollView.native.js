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

import React, {
  Component,
  PropTypes,
  StyleSheet,
  ScrollView,
} from 'react-native';

class TText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      style,
      ...other,
    } = this.props;

    return (
      <ScrollView style={[{flex:1},style]}
        {...other}>
        {children}
      </ScrollView>
    );
  }
}

module.exports = TText;
