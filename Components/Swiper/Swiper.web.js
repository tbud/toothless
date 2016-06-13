/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TSwiper
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './SwiperDefaultStyles';

// import scale from 'toothless_scale';

class TSwiper extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
    align:'center'
  };

  render() {
    const {
        children,
        cs,
        style,
        align,
        inline,
        ...other,
    } = this.props;

    let demo = children[1];
    console.log(demo);

    let target = {};
    Object.assign(target,{margin:0, lineHeight:1.44, textAlign:'center', flex:1, '-webkit-overflow-scrolling': 'touch'} ,Scale.getStyle(TSwiper.name, cs, defaultStyles), style);


    return (
      <div style={target} className="text">{children}</div>
    );
  }
}

module.exports = TSwiper;
