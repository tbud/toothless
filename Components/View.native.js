'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  PropTypes,
  Image
} from 'react-native';

import Scale from 'toothless_scale';

class TView extends Component {
  constructor(props) {
    super(props);

    this._responder = {
      onStartShouldSetResponder: this._onStartShouldSetResponder,
      onResponderRelease: this._onResponderRelease,
    };
  }

  render() {
    const {
      children,
      style,
      ...other,
    } = this.props;

    return (
      <View style={[defaultStyles.normal, Scale.getStyle(TView.name).normal, style]}
        {...this._responder}
        {...other}>
        {children}
      </View>
    );
  }

  _onStartShouldSetResponder = (e) => {
    var onPress = this.props.onPress;
    return onPress ? true : false;
  }

  _onResponderRelease = (e) => {
    var onPress = this.props.onPress;
    onPress && setTimeout(onPress.bind(this), 0);
  };
}

const defaultStyles = StyleSheet.create({
  normal: {
    // position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
  }
});

module.exports = TView;