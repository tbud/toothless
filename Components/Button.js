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
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={[defaultStyles.buttonStyle, scale.getStyle(TButton.name).buttonStyle, style.buttonStyle]}
          {...other}>
          <Text
            style={[defaultStyles.buttonText, scale.getStyle(TButton.name).buttonText, style.buttonText]}>{value}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

//默认样式的色彩方案使用Flat UI的Color Swatches (http://www.bootcss.com/p/flat-ui)

const defaultStyles = StyleSheet.create({
  buttonStyle: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
    margin: 4,
    borderRadius: 2,
    backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize:14,
    color: '#fff',
    textAlign:'center',
  },
  //不能点击
  buttonDisable:{
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
    margin: 4,
    borderRadius: 2,
    backgroundColor: '#BDC3C7',
  },
  //危险操作
  buttonDanger: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
    margin: 4,
    borderRadius: 2,
    backgroundColor: '#e74c3c',
  }
});

module.exports = TButton;