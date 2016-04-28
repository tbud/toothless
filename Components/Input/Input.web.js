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
"use strict";

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './InputDefaultStyles';

class TInput extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        style: {},
        placeholder: '请输入',
        onPress: ()=> {
        }
    };

    render() {
        const {
            children,
            style,
            placeholder,
            ...other
        } = this.props;

        let target = {};
        Object.assign(target, Scale.getStyle(TInput.name, 'inputStyle', defaultStyles), style, {flex: 1});


        //打印到console Todo del
        // console.log(placeholder);

        return (
            <div style={{display:'flex'}}>
                <input type="text" style={target} {...other} placeholder={placeholder}/>
            </div>
        )
    }
}

module.exports = TInput;