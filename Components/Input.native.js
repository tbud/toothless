'use strict';

import React, {
  Component,
  StyleSheet,
  TextInput,
  PropTypes,
  View,
} from 'react-native';

import {Scale} from 'toothless_scale';

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
        {...other}/>
    )
  }
}

const defaultStyles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: 'red',
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

module.exports = TInput;