import React from 'react';
const userInfoUrl = "http://tester.woxihuan.live/";
// const userInfoUrl = "http://api.loveeapp.club/";
export default class BtnWrap extends React.Component {
    constructor(props) {
        super(props);
        this.mackAnchorClick = this.mackAnchorClick.bind(this);
        this.shareClick = this.shareClick.bind(this);
        this.state = {};
    }
    render() {
        return (<div className="btn-wrap">
            <div className="btns btn-make-anchor" onClick={this.mackAnchorClick}>Torne-se Modelo</div>
            <div className="btns btn-share" onClick={this.shareClick}>Recomendar Modelo</div>
        </div>)
    }
    mackAnchorClick() {
        console.log("make anchor")
    }
    shareClick() {
        console.log('share')
    }
}