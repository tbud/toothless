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
'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native';

//引入皮肤
import {Scale} from 'toothless_scale';

//引入默认皮肤
import defaultStyles from './ViewDefaultStyles';

class TView extends Component {
  constructor(props) {
    super(props);

    this._responder = {
      onStartShouldSetResponder: this._onStartShouldSetResponder,
      onResponderRelease: this._onResponderRelease,
    };
  }

    static defaultProps = {
        direction: "column",
        onPress: ()=> {
        }
    };

    static propTypes = {
        direction: PropTypes.oneOf(["row", "column",]),
        onPress: PropTypes.func
    }

  render() {
    const {
      children,
      style,
      direction,
      ...other,
    } = this.props;

    return (
      <View style={[Scale.getStyle(TView.name, 'normal', defaultStyles),{flexDirection:direction}, style]}
        {...this._responder}
        {...other}>
        {children}
      </View>
    );
  }

  _onStartShouldSetResponder = (e) => {
    var onPress = this.props.onPress;
    return onPress ? true : false;
  }

  _onResponderRelease = (e) => {
    var onPress = this.props.onPress;
    onPress && setTimeout(onPress.bind(this), 0);
  };
}

module.exports = TView;