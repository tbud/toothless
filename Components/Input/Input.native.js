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
        onPress: ()=> {
        }
    };

    static propTypes = {
        value: PropTypes.string,
        disabled: PropTypes.bool,
        onPress: PropTypes.func
    }

    render() {
        const {
            style,
            ...other
        } = this.props;

        return (
            <TextInput style={[defaultStyles.inputStyle, Scale.getStyle(TInput.name).inputStyle, style]}
                       autoCapitalize='none'
                       defaultValue=''
                       keyboardType='numeric'
                {...other}/>
        )
    }
}


module.exports = TInput;