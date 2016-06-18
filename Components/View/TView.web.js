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
"use strict";

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './ViewDefaultStyles';

class TView extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        direction: "column",
        onPress: ()=> {
        }
    };

    render() {
        const {
            children,
            style,
            direction,
            ...other,
        } = this.props;

        let target = {};
        Object.assign(target,{'overflow-x':'hidden', display:"flex" ,flexDirection:direction}, Scale.getStyle(TView.name, 'normal', defaultStyles), style);

        return (
            <div className="view" style={target} {...other}>
                {children}
            </div>
        );
    }
}

module.exports = TView;

//传递参数说明
//direction 排列方向