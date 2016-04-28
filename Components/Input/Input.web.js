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

    render() {
        const {
            children,
            style,
            ...other
        } = this.props;

        let inputwebreset = {
            flex: 1,/* android 4.4 */
        }

        let target = {};
        Object.assign(target,inputwebreset, defaultStyles.inputStyle, Scale.getStyle(TInput.name).inputStyle, style);


        //打印到console Todo del
        // console.log(defaultStyles.inputStyle,style);
        
        return (
            <div>
                <input type="text" style={target} {...other} placeholder="测试"/>
            </div>
        )
    }
}

module.exports = TInput;