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

import React, {
  Component,
  StyleSheet,
  PropTypes,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Scale} from 'toothless_scale';
import defaultStyles from './ImageButtonDefaultStyles';


class TImageButton extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    type: 'default',
    value: 'OK',
    disabled: false,
    block: false,
    style: {},
    resizeMode:'contain',
    source:'',
    onPress: ()=> {
    }
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'flat', 'default']),
    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    block: PropTypes.bool,
    style: PropTypes.func,
    onPress: PropTypes.func
  //  Todo 添加 source的属性
  }

  render() {
    const {
      type,
      value,
      disabled,
      block,
      style,
      source,
      resizeMode,
      ...other,
    } = this.props;

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

    // let context = (
    //     <View style={boxStyle} {...other}><Text style={textStyle}>{value}</Text></View>
    // );
    // let buttonContext;

    // if (disabled) {
    //   buttonContext = context;
    // } else {
    //   buttonContext = (
    //     <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
    //       {context}
    //     </TouchableOpacity>
    //   )
    // }

    return (
        //Todo 是否需要添加View
      <TouchableOpacity style={style}  {...other} onPress={this.props.onPress} activeOpacity={0.8}>
         <Image style="flex:1" resizeMode={resizeMode} source={source}></Image>
      </TouchableOpacity>
    )
  }
}

module.exports = TImageButton;
