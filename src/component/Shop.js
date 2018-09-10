import React, { Component } from 'react';
import "../assets/css/shop.css"


class Shop extends Component {
  render() {
    return (
      <React.Fragment>
            <header className="header-bar">
                <a className="return_btn" href="javascript:window.history.go(-1)"></a>
                <span className="selbox"><input type="search" placeholder="搜索店内商品"/><a href="javascript:;" className="search"></a></span>
                <span className="dropD">
                    <span className="dropdiv">
                        <span className="flag"></span>
                        <a className="hicon1" href="javascript:;">首页</a>
                        <a className="hicon2" href="javascript:;">消息</a>
                        <a className="hicon3" href="javascript:;">分享</a>
                        <a className="hicon4" href="javascript:;">我的收藏</a>
                    </span>
                </span>     
            </header>

            <div className="clearx" style={{height:"4rem"}}></div>
            <div className="shop-headcontent">
                <div className="shop-layer"></div>
                <span className="shop-Shead">
                    <a href="javascript:;" className="shop-Shome"><img src="images/shop/Shead.jpg" alt=""/><span>阳光家居有限公司</span></a>
                    <span className="shead_R">
                        <b>70021050<br/><i>人关注</i></b>
                        <a className="scbtn">收藏</a>
                        <div className="clearx"></div>
                    </span>
                </span>
            </div>

            <div className="favor-header-bar">
                <ul className="tabs">
                    <li className="default"><em className="btn1"></em><a href="javascript:void(0);" id="btn1" hidefocus="true">店铺首页</a></li>
                    <li><em className="btn2"></em><a href="javascript:void(0);" id="btn2" hidefocus="true">全部商品</a></li>
                    <li><em className="btn3"></em><a href="javascript:void(0);" id="btn3" hidefocus="true">商品热销</a></li>
                    <li><em className="btn4"></em><a href="javascript:void(0);"  id="btn4" hidefocus="true">新品上架</a></li>
                    <div className="clearx"></div>
                </ul>
                {/* <!--全部商品选择项--> */}
                <div className="allLabels">
                    <a className="current" href="javascript:;">综合</a><a href="javascript:;">销量</a><a href="javascript:;">新品</a><a className="idb4" href="javascript:;">价格<i></i></a>
                    <div className="clearx"></div>
                </div>
            </div>

            <div className="swiper-container favor-list">
                <div className="swiper-wrapper">
                    <div className="swiper-slide xq">
                        <div className="guess g1">
                            <img src="images/shop/pic_1.jpg" alt=""/>
                            <div className="clearx" style={{height:"10px"}}></div>
                            <span className="Gtit">推荐好货</span>
                            <ul>
                                <li>
                                    <a href="javascript:;"><img src="images/shop/pic_2.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>

                                </li>
                                <li>
                                    <a href="javascript:;"><img src="images/shop/pic_2.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                                    
                                </li>
                                <li>
                                    <a href="javascript:;"><img src="images/shop/pic_2.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                                    
                                </li>
                                <li>
                                    <a href="javascript:;"><img src="images/shop/pic_2.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                                    
                                </li>
                                <div className="clearx"></div>
                            </ul>    
                        </div>
                    </div>
                    <div className="swiper-slide margin19">
                        <div className="guess">
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
                    </div>
                    <div className="swiper-slide">
                            <div className="guess">
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
                    </div>
                    <div className="swiper-slide">
                        <div className="guess">
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
                                    <a href="javascript:"><img src="images/index/guess_1.jpg" alt=""/><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                                    
                                </li>
                                <div className="clearx"></div>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearx" style={{height:"4rem"}}></div>
            {/* a */}
      </React.Fragment>
    );
  }
}

export default Shop;