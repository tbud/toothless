/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TButton
 * @flow
 */
'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TouchableOpacity,
} from 'react-native';

import {Scale} from 'toothless_scale';

import defaultStyles from './ButtonDefaultStyles';

class TButton extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    value: 'ok',
    disabled: false,
    style: {},
    onPress: ()=> {
    }
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
  }

  render() {
    const {
      value,
      disabled,
      style,
      ...other
    } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={[defaultStyles.buttonStyle, Scale.getStyle(TButton.name).buttonStyle, style.buttonStyle]}
          {...other}>
          <Text
            style={[defaultStyles.buttonText, Scale.getStyle(TButton.name).buttonText, style.buttonText]}>{value}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

module.exports = TButton;
