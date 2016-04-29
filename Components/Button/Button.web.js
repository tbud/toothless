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

import React, {Component, PropTypes} from 'react';
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
    type: PropTypes.oneOf['primary', 'flat', 'default'],
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    block: PropTypes.bool,
    onPress: PropTypes.func
  };

  render() {
    const {
      value,
      disabled,
      style,
      type,
      block,
    } = this.props;

    let target = {};
    Object.assign(
      target,
      Scale.getStyle(TButton.name, `buttonBox_${type}`, defaultStyles),
      disabled ? Scale.getStyle(TButton.name, `buttonBox_${type}${disabled ? '_disabled' : ''}`, defaultStyles) : {},
      style.buttonBox,

      Scale.getStyle(TButton.name, `buttonText_${type}`, defaultStyles),
      disabled ? Scale.getStyle(TButton.name, `buttonText_${type}${disabled ? '_disabled' : ''}`, defaultStyles) : {},
      style.buttonText,

      block ? {flex: 1} : {},
    );

    let context = <button onClick={disabled ? null: this.props.onPress} style={target}>{value}</button>;
    if (block) {
      context = (
        <div style={{display:'flex'}}>
          {context}
        </div>
      )
    }

    return (
      <div>{context}</div>
    )
  }
}


module.exports = TButton;