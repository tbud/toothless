'use strict';

import React, {
  Component,
} from 'react';

// import scale from 'toothless_scale';

class TInput extends Component {
  constructor(props) {
    super(props);
  }

  // static defaultProps = {
  //   style: {},
  //   onPress: ()=> {
  //   }
  // };
  //
  // static propTypes = {
  //   value: PropTypes.string,
  //   disabled: PropTypes.bool,
  //   onPress: PropTypes.func
  // }

  render() {
    const {
      style,
      ...other
    } = this.props;

    return (
      <div>input</div>
    )
  }
}

module.exports = TInput;