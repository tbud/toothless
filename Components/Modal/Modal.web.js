/**
 * Copyright (c) 2015-present, tbud, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TModal
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Scale} from 'toothless_scale';
import defaultStyles from './ModalDefaultStyles';


let colseModal = {}


// import scale from 'toothless_scale';

class TModal extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        cs: 'normal',
        align:'center',
        title:'标题',
        intro:'这里是正文',
        okText:"OK",
        onCancel:"closeModal",
    };


    render() {
        const {
            children,
            cs,
            style,
            title,
            content,
            okText,
            cancelText,
            onOK,
            onCancel,
            visible,
            ...other,
        } = this.props;

        // let target = {};
        // Object.assign(target,{margin:0, lineHeight:1.44, textAlign:'center', flex:1, '-webkit-overflow-scrolling': 'touch'} ,Scale.getStyle(TText.name, cs, defaultStyles), style);

        //Todo

        let closeModal = function () {
            this.setState({visible: false})
        };

        let modalCancel;

        //取消按钮
        if (cancelText !=undefined && cancelText != null){
            if (onCancel == "closeModal"){
                modalCancel= (
                    <div style={{flex:1,height:49, lineHeight:"49px", fontSize:17, textAlign:"center", "text-decoration":"none",color:"#333"}} onClick={closeModal}>{cancelText}</div>
                )
            } else {
                modalCancel =(
                    <div style={{flex:1,height:49, lineHeight:"49px", fontSize:17, textAlign:"center", "text-decoration":"none",color:"#333"}} onClick={onCancel}>{cancelText}</div>
                )
            };
        }

        //内容区域
        let modalContent;
        if (content != undefined && content != null) {
            if (content.length < 30) {
                modalContent = (
                    <div style={{paddingLeft:24, paddingRight:24, fontSize:13, linHeight:1.16, marginBottom:24, textAlign:"center"}}>
                        {content}
                    </div>
                )
            }else{
                modalContent = (
                    <div style={{paddingLeft:24, paddingRight:24, fontSize:13, linHeight:1.16, marginBottom:24, "word-break":"break-all"}}>
                        {content}
                    </div>
                )

            }
        }

        let modalStyle;
        if (visible){
            modalStyle = ({position:'absolute', top:0 ,left:0, width:"100%", height:"100%", display:'flex', justifyContent:"center", alignItems:"center",})
        } else {
            modalStyle = ({position:'absolute', top:0 ,left:0, width:"100%", height:"100%", display:'none', justifyContent:"center", alignItems:"center",})
        }

        console.log(modalStyle);

        return (
            <div id="Modal" style={modalStyle}>
                <div style={{position:'absolute', top:0 ,left:0, width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,.5)"}} onClick={this.closeModal}></div>
                <div style={{width:300, backgroundColor:"#fff", position:"relative", borderRadius:10,}}>
                    <div style={{textAlign:"center",fontSize:17,lineHeight:1.4, marginTop:24, marginBottom:16, paddingLeft:24, paddingRight:24,fontWeight:"bold"}}>
                        {title}
                    </div>
                    {modalContent}
                    <div style={{marginTop:24, display:"flex"}}>
                        {modalCancel}
                        <div style={{flex:1,height:49, lineHeight:"49px", fontSize:17, textAlign:"center", "text-decoration":"none",color:"#333"}}>{okText}</div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = TModal;
