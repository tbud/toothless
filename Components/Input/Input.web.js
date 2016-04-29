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
    placeholder: 'please input',
    onPress: ()=> {
    }
  };

  static propTypes = {
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
  };

  render() {
    const {
      children,
      keyboardType,
      style,
      password,
      disabled,
      ...other
    } = this.props;

    let target = {};
    Object.assign(
        target,
        Scale.getStyle(TInput.name, 'inputStyle', defaultStyles),
        style,
        {flex: 1},
        disabled ? Scale.getStyle(TInput.name, 'inputStyle_disabled', defaultStyles) : {}
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
      <div style={{display:'flex'}}>
        <input type={type}  style={target} {...other} disabled={disabled}/>
      </div>
    )
  }
}

module.exports = TInput;