'use strict';

import React, {
  Component,
} from 'react';

// import scale from 'toothless_scale';

class TButton extends Component {
  constructor(props) {
    super(props);
  }

  // static defaultProps = {
  //   value: 'ok',
  //   disabled: false,
  //   style: {},
  //   onPress: ()=> {
  //   }
  // };
  //
  // static propTypes = {
  //   // value: PropTypes.string.isRequired,
  //   disabled: PropTypes.bool,
  //   onPress: PropTypes.func
  // }

  render() {
    const {
      value,
      disabled,
      style,
      ...other
    } = this.props;
    return (
      <div>button</div>
    )
  }
}


module.exports = TButton;