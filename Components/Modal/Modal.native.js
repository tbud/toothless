/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TModal
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
} from 'react-native';

import {Scale} from 'toothless_scale';

import defaultStyles from './ModalDefaultStyles';

class TModal extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
    align: 'center'
  };

  static propTypes = {
    cs: PropTypes.string,
    align: PropTypes.oneOf(['auto', 'justify', 'left', 'center', 'right']),
  };

  render() {
    const {
      children,
      cs,
      style,
      align,
      ...other,
    } = this.props;

    return (
      <Text style={[Scale.getStyle(TText.name, cs, defaultStyles), {textAlign:align},style]}
        {...other}>
        {children}
      </Text>
    );
  }
}

module.exports = TModal;
