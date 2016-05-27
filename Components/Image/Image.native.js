/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TImage
 * @flow
 */
"use strict";

import React, {
  Component,
  PropTypes
} from 'react';

import {
  Image,
} from 'react-native';


class TImage extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    resizeMode: 'contain',
    onPress: ()=> {
    }
  };

  render() {
    const {
      children,
      style,
      resizeMode,
      source,
      ...other,
    } = this.props;

    console.log(source);

    return (
      <Image style={[{},style]} source={source} resizeMode={resizeMode} {...other} >
        {children}
      </Image>

    );
  }
}

module.exports = TImage;