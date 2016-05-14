/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TList
 * @flow
 */
'use strict';

//引入组件
import React, {
    Text,
    Component,
    ListView,
    View,
    PropTypes,
    Image,
    TouchableOpacity,
} from 'react-native';

//引入皮肤
import {Scale} from 'toothless_scale';

//引入默认皮肤
import defaultStyles from './ListDefaultStyles';

class TList extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemRadio:false,
        lastLine:false,
        style: {},
        onPress: ()=> {
        }
    };

    static propTypes = {
        type: PropTypes.oneOf['primary', 'flat', 'default'],
        title: PropTypes.string.isRequired,
        itemRadio: PropTypes.bool,
        lastLine: PropTypes.bool,
        onPress: PropTypes.func
    };

    render() {
        const {
            style,
            icon, //左边的图标,默认使用iconfont
            imageIcon, //左边的图标,使用图片
            title, //行内标题
            itemValue, //右边为文字时
            itemIcon, //右边是图标
            itemImageIcon, //右边是图片图标
            itemRadio, //右边是选择框
            onPress,
            lastLine,
            ...other,
        } = this.props;

        let iconContent;
        if (icon == undefined){
            iconContent
        }else {
            iconContent = (<Text style={[Scale.getStyle(TList.name, 'listIcon', defaultStyles), style]}>{icon}</Text>);
        }

        let imageIconContent;
        if (imageIcon == undefined){
            imageIconContent
        }else {
            imageIconContent = (<Image style={[Scale.getStyle(TList.name, 'listImageIcon', defaultStyles), style]} source={imageIcon} />);
        }

        let itemValueContent;
        if (itemValue == undefined){
            itemValueContent
        }else {
            itemValueContent = (<Text style={[Scale.getStyle(TList.name, 'listItemValue', defaultStyles), style]}>{itemValue}</Text>);
        }

        let itemIconContent;
        if (itemIcon == undefined){
            itemIconContent
        }else {
            itemIconContent = (<Text style={[Scale.getStyle(TList.name, 'listItemIcon', defaultStyles), style]}>{itemIcon}</Text>);
        }


        let itemImageIconContent;
        if (itemImageIcon == undefined){
            itemImageIconContent
        }else {
            itemImageIconContent = (<Image style={[Scale.getStyle(TList.name, 'listItemImageIcon', defaultStyles), style]} source={itemImageIcon} />);
        }

        //Todo 复选框的List还没做

        let lastLineStyle;
        let lastLineStyleView;
        if (lastLine){
            lastLineStyle=Scale.getStyle(TList.name, 'lastLineStyle', defaultStyles)
            lastLineStyleView=Scale.getStyle(TList.name, 'lastLineStyleView', defaultStyles)
        }else {
            lastLineStyle=Scale.getStyle(TList.name, 'notLastLineStyleView', defaultStyles)
        }

        console.log('This is true!')

        //style={[Scale.getStyle(TList.name, 'listIcon', defaultStyles), style]}

        return (
                <TouchableOpacity onpress activeOpacity={1} style={[,Scale.getStyle(TList.name, 'listTouchableOpacity', defaultStyles), lastLineStyle,style]}>
                    <View style={[lastLineStyleView, Scale.getStyle(TList.name, 'listView', defaultStyles), style]}>
                        {iconContent}
                        {imageIconContent}
                        <Text style={[Scale.getStyle(TList.name, 'listTitle', defaultStyles), style]}>{title}</Text>
                        {itemValueContent}
                        {itemIconContent}
                        {itemImageIconContent}
                    </View>
                </TouchableOpacity>
        );
    }
}

module.exports = TList;