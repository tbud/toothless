/**
 *
 * @providesModule Dimensions
 */
'use strict';

const dimensions = {
  // Not map to real window size, because that map to screen size in native env.
  window: {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    scale: window.devicePixelRatio || 1,
  },
  modalFullscreenView: {
    width: screen.width,
    height: screen.height
  }
};

class Dimensions {

  static get(dim: string): Object {
    return dimensions[dim];
  }
}

module.exports = Dimensions;
