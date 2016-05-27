/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TInput
 * @flow
 */
'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

//引入皮肤
import {Scale} from 'toothless_scale';

//引入默认皮肤
import defaultStyles from './InputDefaultStyles';

class TInput extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    style: {},
    placeholder: '请输入',
    disabled: false,
    singleLine: false,
    error: false,
    onPress: ()=> {
    }
  };

  static propTypes = {
    // value: PropTypes.string,
    disabled: PropTypes.bool,
    singleLine: PropTypes.bool,
    error: PropTypes.bool,
    onPress: PropTypes.func,
  };

  render() {
    const {
      style,
      disabled,
      singleLine,
      error,
      ...other
    } = this.props;

    return (

      <View style={[
            singleLine ? Scale.getStyle(TInput.name, 'inputBox_singleline',defaultStyles)  : Scale.getStyle(TInput.name, 'inputBox', defaultStyles),
            error ? Scale.getStyle(TInput.name, 'inputBox_error',defaultStyles)  : {},
            disabled ? Scale.getStyle(TInput.name, 'inputBox_disabled', defaultStyles) : {},
            style
            ]}>
        <TextInput style={[
            singleLine ? Scale.getStyle(TInput.name, 'inputText_singleline',defaultStyles)  : Scale.getStyle(TInput.name, 'inputText', defaultStyles),
            disabled ? Scale.getStyle(TInput.name, 'inputText_disabled', defaultStyles) : {},
            style
            ]}
                   autoCapitalize='none'
                   defaultValue=''
                   keyboardType='numeric'
                   editable={!disabled}
          {...other}
        />
      </View>
    )
  }
}


module.exports = TInput;