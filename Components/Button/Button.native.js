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


//引入组件
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    PropTypes,
    TouchableOpacity,
} from 'react-native';

//引入皮肤
import {Scale} from 'toothless_scale';

//引入默认皮肤
import defaultStyles from './ButtonDefaultStyles';


class TButton extends Component {
    constructor(props) {
        super(props);
    }

    //默认状态
    static defaultProps = {
        value: 'OK',
        disabled: false,
        flat: false,
        style: {},
        onPress: ()=> {
        }
    };

    //类型声明
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        flat: PropTypes.bool,
        onPress: PropTypes.func
    }

    //渲染
    render() {
        //调用
        const {
            value,
            disabled,
            style,
            flat,
            ...other,
        } = this.props;

        //设置样式
        let boxStyle = [
            defaultStyles.buttonBox,
            Scale.getStyle(TButton.name).buttonBox,
            style.buttonBox,

            flat ? defaultStyles.buttonFlatBox : {},
            flat ? Scale.getStyle(TButton.name).buttonFlatBox : {},
            flat ? style.buttonFlatBox : {},

            disabled ? defaultStyles.buttonDisableBox : {},
            disabled ? Scale.getStyle(TButton.name).buttonDisableBox : {},
            disabled ? style.buttonDisableBox : {}
        ];

        let textStyle = [
            defaultStyles.buttonText,
            Scale.getStyle(TButton.name).buttonText,
            style.buttonText,

            flat ? defaultStyles.buttonFlatText : {},
            flat ? Scale.getStyle(TButton.name).buttonFlatText : {},
            flat ? style.buttonFlatText : {}
        ];

        //默认结构
        const context = (<View style={boxStyle} {...other}>
            <Text style={textStyle}>{value}</Text>
        </View>);

        //判断是否可以点击
        let buttonContext;
        if (disabled) {
            buttonContext = context;
        } else {
            buttonContext = (
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
                    {context}
                </TouchableOpacity>
            )
        }

        //界面
        return (
            <View>
                {buttonContext}
            </View>
        )
    }
}

module.exports = TButton;
