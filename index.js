"use strict";

import React from 'react';
import {Scale, StyleSheet} from 'toothless_scale';

module.exports = {
  Scale: Scale,
  StyleSheet: StyleSheet,

  // components
  get Button() {return require('TButton')},
  get Text() {return require('TText')},
  get View() {return require('TView')},
  get Input() {return require('TInput')},
  get Image() {return require('TImage')},
  get ImageButton() {return require('TImageButton')},
  get Navigator() {return require('TNavigator')},
  get ScrollView() {return require('TScrollView')},
  get StatusBar() {return require('TStatusBar')},
  get TouchableOpacity() {return require('TTouchableOpacity')},
  get Topbar() {return require('TTopbar')},
  get Icon() {return require('TIcon')},
  get ListView() {return require('TListView')},
  get List() {return require('TList')},
  get Modal() {return require('TModal')},
  get SearchBar() {return require('TSearchBar')},

  ...React,
};
