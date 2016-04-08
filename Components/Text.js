'use strict';

import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
} from 'react-native';

import scale from 'toothless_scale';

class TText extends Component {
  constructor(props) {
    super(props);
  }

  /**
   *
   * @type {{cs: string}} character style
   */
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
      <Text style={[defaultStyles[cs], scale.getStyle(TText.name)[cs], style]}
        {...other}>
        {children}
      </Text>
    );
  }
}

const defaultStyles = {
  normal: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
  },
}

module.exports = TText;
