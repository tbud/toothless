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

import React, {
  Component,
} from 'react';

// import scale from 'toothless_scale';

class TButton extends Component {
  constructor(props) {
    super(props);
  }

  // static defaultProps = {
  //   value: 'ok',
  //   disabled: false,
  //   style: {},
  //   onPress: ()=> {
  //   }
  // };
  //
  // static propTypes = {
  //   // value: PropTypes.string.isRequired,
  //   disabled: PropTypes.bool,
  //   onPress: PropTypes.func
  // }

  render() {
    const {
      value,
      disabled,
      style,
      ...other
    } = this.props;
    return (
      <div>button</div>
    )
  }
}


module.exports = TButton;