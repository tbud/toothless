/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TStatusBar
 * @flow
 */
'use strict';

import React, {Component} from 'react';

// import scale from 'toothless_scale';

class TStatusBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
        children,
        style,
        ...other,
    } = this.props;

    return (
        <div></div>
    );
  }
}

module.exports = TStatusBar;
