/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TListView
 * @flow
 */
'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  ListView,
  View,
  Image,
} from 'react-native';

//引入皮肤
import {Scale} from 'toothless_scale';

//引入默认皮肤
import defaultStyles from './ListViewDefaultStyles';

class TListView extends Component {
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
      <ListView
        style={[Scale.getStyle(ListView.name, 'normal', defaultStyles), style]}
        {...other}>
        {children}
      </ListView>
    );
  }
}

TListView.DataSource = ListView.DataSource;

module.exports = TListView;