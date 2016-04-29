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
"use strict";

import React, {Component, PropTypes} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './InputDefaultStyles';

class TInput extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    style: {},
    keyboardType: 'default',
    password: false,
    disabled: false,
    inline: false,
    error: false,
    placeholder: 'please input',
    onPress: ()=> {
    }
  };

  static propTypes = {
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
    value: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inline: PropTypes.bool,
    onPress: PropTypes.func,
  };

  render() {
    const {
      children,
      keyboardType,
      style,
      password,
      error,
      disabled,
      singleLine,
      ...other
    } = this.props;

    let targetBox = {};
    let targetText = {};
    Object.assign(
        targetBox,
        {flex:1},
        singleLine ? Scale.getStyle(TInput.name, 'inputBox_singleline', defaultStyles) : Scale.getStyle(TInput.name, 'inputBox', defaultStyles),
        style,
        error ? Scale.getStyle(TInput.name, 'inputBox_error',defaultStyles)  : {},
        disabled ? Scale.getStyle(TInput.name, 'inputBox_disabled', defaultStyles) : {}
    );
    Object.assign(
        targetText,
        singleLine ? Scale.getStyle(TInput.name, 'inputText_singleline', defaultStyles) : Scale.getStyle(TInput.name, 'inputText', defaultStyles),
        style,
        {width:'100%', display:'block'},
        disabled ? Scale.getStyle(TInput.name, 'inputText_disabled', defaultStyles) : {}
    );

    let type = keyboardType;
    switch (keyboardType) {
      case "email-address":
        type = "email";
        break;
      case "numeric":
        type = "number";
        break;
      case "phone-pad":
        type = "tel";
        break;
      default:
        type = "text";
    }
    
    if (password) {
      type = 'password';
    }

    return (
      <div style={targetBox}>
        <input type={type} style={targetText} {...other} disabled={disabled}/>
      </div>
    )
  }
}

module.exports = TInput;