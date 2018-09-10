import React, { Component } from 'react';
import "../assets/css/car.css"
import "../assets/css/index.css"
import { NavLink } from "react-router-dom"

class Car extends Component {
  render() {
    return (
      <React.Fragment>
            {/* <!--头部导航--> */}
            <header className="he1">
                购物车（10）
                <a href="javascript:window.history.go(-1)" className="return_btn"></a>
                <a href="javascript:;" className="redE">编辑</a>
                <span className="dropD2"></span>
            </header>
            <div className="clearx" style={{height:"5rem"}}></div>
            <div className="cartform">
                <div className="null">
                    <p><em></em>您的购物车里还没有商品</p>
                    <p><NavLink to="/home">马上去购物 ></NavLink></p>
                </div>
            </div>

        {/* <!--为您推荐--> */}
        <div className="guess">
            <div className="tit5"><h3>为您推荐</h3></div>
        <ul>
                <li>
                    <a href="javascript:;"><img src="images/index/guess_1.jpg"/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <li>
                    <a href="javascript:;"><img src="images/index/guess_1.jpg"/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <li>
                    <a href="javascript:;"><img src="images/index/guess_1.jpg"/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <li>
                    <a href="javascript:;"><img src="images/index/guess_1.jpg"/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <div className="clearx"></div>
            </ul>    
        </div>
        <div className="clearx" style={{height:"5rem"}}></div>

       
        {/* <!--参数选择--> */}
        {/* <div className="opSortbox">
            <div className="opSortbox-bg"></div>
            <div className="opSortcontent">
                <div className="opSort-offbtn"><img src="images/merchandise/icon_4.png"/></div>
                <div className="opSortcontent-one">
                    <div className="opSimg"><img src="images/merchandise/pic_2.jpg"/></div>
                    <div className="opStex">
                        <span><em>￥</em>3750.00</span>
                        <span className="smaltex">库存123456件</span>
                    </div>
                </div>
                <div className="opSortlabel">
                    <div className="opSortcontent-two">
                        <h3>颜色分类</h3>
                        <div className="clearx" style={{height:"1rem"}}></div>
                        <a className="active">红色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <a>黄色</a>
                        <a>蓝色</a>
                        <div className="clearx"></div>
                    </div>
                    <div className="opSortcontent-two three">
                        <h3>数量</h3>
                        <div className="clearx" style={{height:"1rem"}}></div>
                        <span><a className="minus">-</a><a className="plus">+</a><input value="1" type="text"/></span>
                        <div className="clearx"></div>
                    </div>
                </div>
                <div className="opSbtn fn">
                    <a className="btn_fini" href="javascript:;">完成</a>
                </div>
            </div>
        </div> */}
      </React.Fragment>                          
    )
  }
}
export default Car;
