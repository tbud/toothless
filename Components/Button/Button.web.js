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

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './ButtonDefaultStyles';

class TButton extends Component {
  constructor(props) {
    super(props);
  }

  //默认状态
  static defaultProps = {
    value: 'OK',
    disabled: false,
    flat: false,
    block:false,
    style: {},
    onPress: ()=> {
    }
  };

  render() {
    const {
        value,
        disabled,
        style,
        flat,
        block,
        ...other,
    } = this.props;


    let target = {};
    Object.assign(
        target,
        defaultStyles.buttonBox,
        Scale.getStyle(TButton.name).buttonBox,
        style.buttonBox,

        flat ?  defaultStyles.buttonFlatBox : {},
        flat ?  Scale.getStyle(TButton.name).buttonFlatBox : {},

        block ? {flex:1} : {},

        disabled ? defaultStyles.buttonDisableBox : {},
        disabled ? Scale.getStyle(TButton.name).buttonDisableBox : {},
        disabled ? style.buttonDisableBox : {},

        defaultStyles.buttonText,
        Scale.getStyle(TButton.name).buttonText,
        style.buttonText,

        flat ? defaultStyles.buttonFlatText : {},
        flat ? Scale.getStyle(TButton.name).buttonFlatText : {},
        flat ? style.buttonFlatText : {}
    );

    let context;
    if (flat) {
      context = (
          <button onClick={this.props.onPress} style={target}>{value}</button>
      )
    }else {
      context = (
          <div style={{display:'flex'}}>
            <button onClick={this.props.onPress} style={target}>{value}</button>
          </div>
      )
    }

    return (
        <span>
          {context}
        </span>
    )
  }
}


module.exports = TButton;