"use strict";

import React from 'react';
import {Scale, StyleSheet} from 'toothless_scale';

module.exports = {
  Scale: Scale,
  StyleSheet: StyleSheet,

  // Components
  get Button() {return require('TButton')},
  get Text() {return require('TText')},
  get View() {return require('TView')},
  get Input() {return require('TInput')},
  get Image() {return require('TImage')},
  get Navigator() {return require('TNavigator')},
  get ScrollView() {return require('TScrollView')},
  get StatusBar() {return require('TStatusBar')},

  ...React,
};
