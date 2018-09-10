import React, { Component } from 'react';
import "../assets/css/Mcenter.css"
import "../assets/css/index.css"
import "../assets/css/footer.css"

class User extends Component {
  render() {
    return (
      <React.Fragment>
            <div className="mcenter">
                <span className="membername">会员名称12345</span>
                <p><a className="icon_1" href="javascript:;"></a><a className="icon_2" href="javascript:;"><i>20</i></a></p>
                <a className="bg"><img src="images/Mcenter/bg.png" alt=""/></a>
                <span className="member">
                    <a className="headimg" href="javascript:;"><i></i></a>
                    <span>会员名称12345<br/><b> 预存款余额：10005.00</b></span>
                    <a className="gl" href="javascript:;">账户管理></a>
                    <div className="clearx"></div>
                </span>
            </div>
            <div className="clearx" style={{height:"170px",display:"none"}}></div>
            <article className="member">
                <h3>我的订单<a href="javascript:;">查看更多订单></a></h3>
                <span>
                    <a className="mcon_1" href="javascript:;"><span>待付款</span></a>
                    <a className="mcon_2" href="javascript:;"><span>待发货</span></a>
                    <a className="mcon_3" href="javascript:;"><span>待收货</span></a>
                    <a className="mcon_4" href="javascript:;"><span>待评价</span></a>
                    <a className="mcon_5" href="javascript:;"><span>退换售后</span></a>
                    <div className="clearx"></div>
                </span>
            </article>
            <article className="member custom">
                <h3>客户服务</h3>
                <span>
                    <a href="javascript:;"><b>4516456</b><span>收藏商品</span></a>
                    <a href="javascript:;"><b>23242</b><span>收藏店铺</span></a>
                    <a href="javascript:;"><b>23432</b><span>浏览记录</span></a>
                    <a className="mcon_6" href="javascript:;"><span>客服中心</span></a>
                    <div className="clearx"></div>
                </span>
            </article>

            <div className="ad">
                <img src="images/Mcenter/ad_img.jpg" alt=""/>
            </div>
            {/* <!--为您推荐--> */}
            <div className="guess">
                <div className="tit5"><h3>为您推荐</h3></div>
            <ul>
                    <li>
                        <a href="javascript:;"><img src="images/index/guess_1.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                        
                    </li>
                    <li>
                        <a href="javascript:;"><img src="images/index/guess_1.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                        
                    </li>
                    <li>
                        <a href="javascript:;"><img src="images/index/guess_1.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                        
                    </li>
                    <li>
                        <a href="javascript:;"><img src="images/index/guess_1.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                        
                    </li>
                    <div className="clearx"></div>
                </ul>    
            </div>
            <div className="clearx" style={{height:"12rem"}}></div>

            {/* <!--底部--> */}
            <footer>
                <a href="javascript:;" className="pick">
                    <i className="icon-f1"></i>
                    首页
                </a>
                <a href="javascript:;">
                    <i className="icon-f2"></i>
                    分类
                </a>
                <a href="javascript:;">
                    <i className="icon-f3"></i>
                    好货
                </a>
                <a href="javascript:;">
                    <i className="icon-f4"></i>
                    购物车
                </a>
                <a href="javascript:;">
                    <i className="icon-f5"></i>
                    我的农芯乐
                </a>
            </footer>
      </React.Fragment>
    );
  }
}

export default User;
