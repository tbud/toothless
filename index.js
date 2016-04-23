"use strict";

import React from 'react';
import {Scale, StyleSheet} from 'toothless_scale';

module.exports = {
  Scale: Scale,
  StyleSheet: StyleSheet,

  Button: require('./Components/Button'),
  Text: require('./Components/Text'),
  View: require('./Components/View'),
  Input: require('./Components/Input'),
  Image: require('./Components/Image'),

  ...React,
};
