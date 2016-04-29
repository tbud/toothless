/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TInput
 * @flow
 */
'use strict';

//引入组件
import React, {
    Component,
    StyleSheet,
    TextInput,
    PropTypes,
    View,
} from 'react-native';

//引入皮肤
import {Scale} from 'toothless_scale';

//引入默认皮肤
import defaultStyles from './InputDefaultStyles';

class TInput extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        style: {},
        placeholder: '请输入',
        disabled: false,
        onPress: ()=> {
        }
    };

    static propTypes = {
        value: PropTypes.string,
        disabled: PropTypes.bool,
        onPress: PropTypes.func,
    };

    render() {
        const {
            style,
            disabled,
            ...other
        } = this.props;

        return (
            <TextInput style={[Scale.getStyle(TInput.name, 'inputStyle', defaultStyles), disabled ? Scale.getStyle(TInput.name, 'inputStyle_disabled', defaultStyles) : {}, style]}
                       autoCapitalize='none'
                       defaultValue=''
                       keyboardType='numeric'
                {...other} editable={!disabled}/>
        )
    }
}


module.exports = TInput;