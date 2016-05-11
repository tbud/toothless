/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TTouchableOpacity
 * @flow
 */
"use strict";

import React, {
  Component
} from 'react';

class TTouchableOpacity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      value,
      children,
      style,
      source,
      ...other
    } = this.props;


    return (
        <div style={{style}} {...other}>
          {children}
        </div>
    )
  }
}

module.exports = TouchableOpacity;
