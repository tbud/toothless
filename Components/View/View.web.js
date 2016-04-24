/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TView
 * @flow
 */
"use strict";

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';

import defaultStyles from './ViewDefaultStyles';

class TView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      style,
      ...other,
    } = this.props;

    var divStyle = {
      backgroundColor: 'rgba(0, 255, 255, 1.0)',
    };

    return (
      <div style={[defaultStyles.normal, Scale.getStyle(TView.name).normal, style]}
        {...other}>
        {children}
      </div>
    );
  }
}

module.exports = TView;