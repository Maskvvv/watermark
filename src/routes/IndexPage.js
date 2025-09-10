import React from "react";
import GitHup from "./GitHup";
import Block from "dxc-flex";
import Main from "./Main/Main";
// import Donation from "./Donation/Donation";
import qqShare from "qq-share";
qqShare({
  title: "身份证盗用所造成的损失，你想象不到！",
  desc: "这是一款最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。",
  imgUrl: "https://oss.tuobacco.com/wop2/2018-06-01/5b10dde28a12d.jpg"
});
export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-container">



 
        {/* 已移除外部新闻链接与捐助模块，保证页面简洁与无广告 */}
        <Main />
        {/* <Donation /> */}
      </div>
    );
  }
}
