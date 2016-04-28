/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TText
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './TextDefaultStyles';

// import scale from 'toothless_scale';

class TText extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
  };

  render() {
    const {
        children,
        cs,
        style,
        ...other,
    } = this.props;

    let target = {};
    Object.assign(target, defaultStyles[cs], Scale.getStyle(TText.name)[cs], style);

    //打印到console Todo del
    // console.log(target);

    return (
      <span style={target}>{children}</span>
    );
  }
}

module.exports = TText;
