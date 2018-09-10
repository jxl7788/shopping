import React, { Component } from 'react';

import "../assets/css/index.css"



class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home-header">
        <div id="header">
            <a className="logo" href="javascript:;"><img src="images/index/logo.png" alt=""/></a>
            <span className="selectinput"><input type="text" /><i className="icon_sel"></i></span>
            <a className="message"><span>消息</span></a>
            <div className="clearx"></div>
	      </div>
      </header>
                 {/* <!--轮播图--> */}
        <div className="m-slider" id="slider">
            <div className="ks_dbox ks_ts">
                <div className="ks_wrap">
                    <img src="images/index/banner1.jpg" alt=""/>
                </div>
                <div className="ks_wrap">
                  <img src="images/index/banner1.jpg" alt=""/>
                </div>
                <div className="ks_wrap">
                    <img src="images/index/banner1.jpg" alt=""/>
                </div>
            </div>
            <div className="ks-circles"><ul className="ks_wt"></ul></div>
        </div>

        {/* <!--导航图标--> */}
        <nav>
            <div className="nav-box">
                <a href="javascript:;"><img src="images/index/nav01.png" alt=""/><span>赶集</span></a>
                <a href="javascript:;"><img src="images/index/nav02.png" alt=""/><span>分类</span></a>
                <a href="javascript:;"><img src="images/index/nav03.png" alt=""/><span>预告</span></a>
                <a href="javascript:;"><img src="images/index/nav04.png" alt=""/><span>优品</span></a>
                <a href="javascript:;"><img src="images/index/nav05.png" alt=""/><span>特卖</span></a>	
                <div className="clearx"></div>
            </div>
        </nav>

                {/* <!--滚动图片--> */}
        <div className="scrollpic">
            <div className="tit1"><img src="images/index/tit1.jpg" alt=""/></div>
            <div className="scrollul">
                <ul>
                    <li><a href="javascript:;">
                        <img src="images/index/pic1.jpg" alt=""/>
                        <span><nobr>迷你创意垃圾桶</nobr></span>
                        <b>￥9.9</b>
                        </a>
                    </li>
                    <li><a href="javascript:;">
                        <img src="images/index/pic1.jpg" alt=""/>
                        <span><nobr>迷你创意垃圾桶</nobr></span>
                        <b>￥9.9</b>
                        </a>
                    </li>
                    <li><a href="javascript:;">
                        <img src="images/index/pic1.jpg" alt=""/>
                        <span><nobr>迷你创意垃圾桶</nobr></span>
                        <b>￥9.9</b>
                        </a>
                    </li>
                    <div className="clearx"></div>
                </ul>
            </div>
            <div className="clearx"></div>
        </div>

            {/* <!--活动--> */}
        <div className="activity">
            <div className="tit2"><img src="images/index/tit2.jpg" alt=""/></div>
            <div className="PicDiv1">
                <div className="halfpic"><a href="javascript:;"><img src="images/index/activ_1.jpg" alt=""/></a></div>
                <div className="halfpic"><a href="javascript:;"><img src="images/index/activ_2.jpg" alt=""/></a></div>
                <div className="clearx" style={{height:"0.5rem"}}></div>
                <div className="thirdpic"><a href="javascript:;"><img src="images/index/activ_3.jpg" alt=""/></a></div>
                <div className="thirdpic"><a href="javascript:;"><img src="images/index/activ_4.jpg" alt=""/></a></div>
                <div className="thirdpic"><a href="javascript:;"><img src="images/index/activ_5.jpg" alt=""/></a></div>
                <div className="clearx"></div>
            </div>
        </div>

            {/* <!--优品--> */}
        <div className="ypdiv">
            <div className="tit3"><img src="images/index/tit3.jpg" alt=""/></div>
            <div className="picbox">
                <div className="pic_L"><a href="javascript:;"><img src="images/index/yp_1.jpg" alt=""/></a></div>
                <div className="pic_R"><a href="javascript:;"><img src="images/index/yp_2.jpg" alt=""/></a></div>
                <div className="pic_R"><a href="javascript:;"><img src="images/index/yp_2.jpg" alt=""/></a></div>
                <div className="clearx"></div>
            </div>
            <div className="picbox">
                <div className="pic_L"><a href="javascript:;"><img src="images/index/yp_1.jpg" alt=""/></a></div>
                <div className="pic_R"><a href="javascript:;"><img src="images/index/yp_2.jpg" alt=""/></a></div>
                <div className="pic_R"><a href="javascript:;"><img src="images/index/yp_2.jpg" alt=""/></a></div>
                <div className="clearx"></div>
            </div>
        </div>


        {/* <!--好店--> */}
        <div className="hdiv">
            <div className="tit4"><img src="images/index/tit4.jpg" alt=""/></div>
            <div className="pic_L"><a href="javascript:;"><img src="images/index/hd_1.jpg" alt=""/><span><nobr>[太原市中科云谷商贸有限公司]</nobr></span></a></div>
            <div className="pic_R"><a href="javascript:;"><img src="images/index/hd_1.jpg" alt=""/><span><nobr>[太原市中公司]</nobr></span></a></div>
            <div className="clearx"></div>
        </div>

                {/* <!--猜你喜欢--> */}
        <div className="guess">
            <div className="tit5"><img src="images/index/tit5.jpg" alt=""/></div>
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
        <div className="clearx"  style={{height:"6rem"}}></div>
    </React.Fragment>
    );
  }
}

export default Home;
