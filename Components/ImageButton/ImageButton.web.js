/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TImageButton
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './ImageButtonDefaultStyles';

class TImageButton extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    disabled: false,
    style: {},
    resizeMode:'contain',
    source:'',
    //Todo 需要做一张默认的按钮的图片\
    onPress: ()=> {
    }
  };

  static propTypes = {
    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
    disabled: PropTypes.bool,
    style: PropTypes.func,
    onPress: PropTypes.func
    //  Todo 添加 source的属性
  };

  render() {
    const {
      type,
      disabled,
      style,
      source,
      resizeMode,
      ...other,
    } = this.props;

    //Todo 提取source的图片相对和绝对地址

    let boxStyle = [
      Scale.getStyle(TImageButton.name, `buttonBox_${type}`, defaultStyles),
      disabled ? Scale.getStyle(TImageButton.name, `buttonBox_${type}${disabled ? '_disabled' : ''}`, defaultStyles) : {},
      style.buttonBox,
    ];

    let textStyle = [
      Scale.getStyle(TImageButton.name, `buttonText_${type}`, defaultStyles),
      disabled ? Scale.getStyle(TImageButton.name, `buttonText_${type}${disabled ? '_disabled' : ''}`, defaultStyles) : {},
      style.buttonText,
    ];

    return (
      <div  style={style} onClick={this.props.onPress}>
        <img style="flex:1" src={source} alt=""/>
      </div>
    //    Todo 还没做Web版本的
    )
  }
}


module.exports = TImageButton;