/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TAnimated
 * @flow
 */
"use strict";

import React, {
  Component
} from 'react';

class TAnimated extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;


    return (
        <div>
          {children}
        </div>
    )
  }
}

module.exports = TAnimated;
