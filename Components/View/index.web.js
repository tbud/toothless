"use strict";

import React, {Component} from 'react';

import {Scale, StyleSheet} from 'toothless_scale';

class TView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      style,
      ...other,
    } = this.props;

    var divStyle = {
      backgroundColor: 'rgba(0, 255, 255, 1.0)',
    };

    return (
      <div style={[defaultStyles.normal, Scale.getStyle(TView.name).normal, style]}
        {...other}>
        {children}
      </div>
    );
  }
}

const defaultStyles = StyleSheet.create({
  normal: {
    // position: 'absolute',
    backgroundColor: 'rgba(0, 255, 255, 1.0)',
  }
});

module.exports = TView;