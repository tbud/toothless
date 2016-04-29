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
  PropTypes,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {Scale} from 'toothless_scale';
import defaultStyles from './ButtonDefaultStyles';


class TButton extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    type: 'default',
    value: 'OK',
    disabled: false,
    block: false,
    style: {},
    onPress: ()=> {
    }
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'flat', 'default']),
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    block: PropTypes.bool,
    onPress: PropTypes.func
  }

  render() {
    const {
      type,
      value,
      disabled,
      block,
      style,
      ...other,
    } = this.props;

    let boxStyle = [
      Scale.getStyle(TButton.name, `buttonBox_${type}`, defaultStyles),
      disabled ? Scale.getStyle(TButton.name, `buttonBox_${type}${disabled ? '_disabled' : ''}`, defaultStyles) : {},
      style.buttonBox,
    ];

    let textStyle = [
      Scale.getStyle(TButton.name, `buttonText_${type}`, defaultStyles),
      disabled ? Scale.getStyle(TButton.name, `buttonText_${type}${disabled ? '_disabled' : ''}`, defaultStyles) : {},
      style.buttonText,
    ];

    let context = (<View style={boxStyle} {...other}><Text style={textStyle}>{value}</Text></View>);
    let buttonContext;

    if (disabled) {
      buttonContext = context;
    } else {
      buttonContext = (
        <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
          {context}
        </TouchableOpacity>
      )
    }

    return (
      <View style={block ? {flexDirection: 'column'} : {flexDirection: 'row'}}>
        {buttonContext}
      </View>
    )
  }
}

module.exports = TButton;
