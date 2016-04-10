'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TouchableOpacity,
} from 'react-native';

import scale from 'toothless_scale';

class TButton extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    value: 'ok',
    disabled: false,
    style: {},
    onPress: ()=> {
    }
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
  }

  render() {
    const {
      value,
      disabled,
      style,
      ...other
    } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[defaultStyles.buttonStyle, scale.getStyle(TButton.name).buttonStyle, style.buttonStyle]}
          {...other}>
          <Text
            style={[defaultStyles.buttonText, scale.getStyle(TButton.name).buttonText, style.buttonText]}>{value}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const defaultStyles = StyleSheet.create({
  buttonStyle: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 4,
    borderRadius: 2,
  },
  buttonText: {}
});

module.exports = TButton;