/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule View
 * @flow
 */
"use strict";

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './ViewDefaultStyles';

class View extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.oneOf['primary', 'flat', 'default'],
    };

    render() {
        const {
            children,
            style,
            ...other,
        } = this.props;

        let target = {};
        Object.assign(target,{flex:1, overflow:'hidden'}, Scale.getStyle(TView.name, 'normal', defaultStyles), style);

        return (
            <div style={target} {...other}>
                {children}
            </div>
        );
    }
}

module.exports = View;