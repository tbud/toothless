'use strict';

import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
} from 'react-native';

import {Scale} from 'toothless_scale';

class TText extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    cs: 'normal',
  };

  static propTypes = {
    cs: PropTypes.string,
  }

  render() {
    const {
      children,
      cs,
      style,
      ...other,
    } = this.props;

    return (
      <Text style={[defaultStyles[cs], Scale.getStyle(TText.name)[cs], style]}
        {...other}>
        {children}
      </Text>
    );
  }
}

const defaultStyles = {
  normal: {
    fontFamily: 'Cochin',
    fontSize: 14,
    fontWeight: 'bold',
    color:'#333',
  },
}

module.exports = TText;
