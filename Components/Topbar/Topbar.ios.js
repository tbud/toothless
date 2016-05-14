/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TTopbar
 * @flow
 */
'use strict';

import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {Scale} from 'toothless_scale';

import defaultStyles from './TopbarDefaultStyles';

class TTopbar extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    title:'标题',
  };

  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const {
      children,
      style,
      title,
      leftBack,
      rightText,
      rightIcon,
      rightIamgeIcon,
      ...other,
    } = this.props;

    return (
      <View style={[Scale.getStyle(TTopbar.name, 'topbarViewIOS', defaultStyles), style]}
        {...other}>

        <View style={{flex:2}}>
          <TouchableOpacity onpress="">
            <Text>返回</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:3}}>
          <Text style={{textAlign:'center',fontSize:16, fontWeight:'bold'}}>{title}</Text>
        </View>

        <View style={{flex:2}}>
          <TouchableOpacity>
            <Text>设置</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

module.exports = TTopbar;
