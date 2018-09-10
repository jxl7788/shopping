import React, { Component } from 'react';
import "../assets/css/merchandise.css"


class Details extends Component {
  render() {
    return (
      <React.Fragment>
            <a href="#hd" className="Totop" ></a>
            <div className="Evalu">
                <span className="EvaluTag">
                    <span>
                        <a className="active">全部评价<br/><i>15648156</i></a>
                        <a>好评<br/><i>52145</i></a>
                        <a>中评<br/><i>10</i></a>
                        <a>差评<br/><i>1</i></a>
                        <a>晒图<br/><i>50</i></a>
                        <div className="clearx"></div>
                    </span>
                </span>
            </div>
            {/* <!--头部导航--> */}
            <header className="favor-header-bar1">
                <a className="return_btn1" href="javascript:window.history.go(-1)"></a>
                <ul className="tabs">
                    <li className="default"><a href="javascript:void(0);" id="btn1" hidefocus="true">商品</a></li>
                    <li><a href="javascript:void(0);" id="btn2" hidefocus="true">详情</a></li>
                    <li><a href="javascript:void(0);" id="btn3" hidefocus="true">评价</a></li>
                </ul>
                <a className="cartbtn" href="javascript:;"></a>
                <span className="dropD1">
                    <span className="dropdiv">
                        <span className="flag"></span>
                        <a className="hicon1" href="javascript:;">首页</a>
                        <a className="hicon2" href="javascript:;">消息</a>
                        <a className="hicon4" href="javascript:;">我的收藏</a>
                        <a className="hicon3" href="javascript:;">分享</a>
                    </span>
                </span> 
            </header>

            <div className="clearx" id="hd" style={{height:"4rem"}}></div>
            <div className="swiper-container favor-list">
                <div className="swiper-wrapper">
                    <div className="swiper-slide xq">
                        <div>
                            <div className="slidebox"><img src="images/merchandise/pic_1.jpg" alt="" /></div>
                            <article className="mercText">
                                <a href="javascript:;">MEISINI美行米字旗拉杆箱24寸旅行登机箱大放送旅行登机等发光点蛋箱男女行李包</a>
                                <p className="ad">
                                    <a>2017就要iPhone！暖春开学季，就要“焕”新装！</a>
                                    <a>2017就要iPhone！暖春开学季</a>
                                </p>
                                <b><em>￥</em>3750.00<i></i><b><a>佣金</a><i>￥</i>60.00</b></b>
                                <div className="clearx"></div>
                                <p className="merP_1"><a>快递：00.00</a><a>销量12345件</a><a className="num">山西太原</a></p>
                                <span className="sales">
                                    <label>促销</label>
                                    <span>
                                        <p><a>满减</a>满198立减10元</p>
                                        <p><a>加价购</a>满19.8另加9.9，即可在购物车换购</p>
                                        <p><a>限制</a>此价格不与套装优惠同时享受</p>
                                        <p><a>限制</a>此价格不与套装优惠同时享受</p>
                                    </span>
                                    <a className="more"></a>
                                    <div className="clearx"></div>
                                </span>
                            </article>
                            <article className="mercOption">
                                <a className="opSort" href="#"><span>规格：千兆48口</span><i className="more"></i></a>
                                <a className="addr" href="#"><span>送至<span><em>山西省</em>><em>太原市</em>><em>杏花岭区</em>><em>城区</em></span><b className="redT">现货</b></span><i></i></a>
                            </article>
                            <article className="mercHouse">
                                <span className="houseimg"><img src="images/merchandise/house.jpg"/></span>
                                <span className="housetex">
                                    <h3>平遥供销特色馆</h3>
                                    <p>主营商品：厨房电器 生活电器 智能家居 日用百货 化妆品</p>
                                </span>
                                <div className="clearx" style={{height:"1.5rem"}}></div>
                                <div className="mercHdata">
                                    <span><b>123456</b><b className="mH_1">全部宝贝</b></span>
                                    <span><b>4561564815</b><b className="mH_1">关注人数</b></span>
                                    <span className="btn"><a href="#">进店逛逛</a></span>
                                    <div className="clearx"></div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="swiper-slide margin19">
                        <div>
                            <div className="imgbox">
                                <img src="images/shop/pic_1.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div>
                            <div className="clearx" style={{height:"6rem"}}></div>
                            <article className="evalue">
                                <div className="wrapevalue" >
                                    <span className="ev_name"><i></i>gfhffgh12345<b>2017-03-15</b></span>
                                    <div className="clearx" style={{height:"0.8rem"}}></div>
                                    <p className="eva"><a className="like"></a><a className="like"></a><a className="nolike"></a><a className="nolike"></a><a className="nolike"></a></p>
                                    <p className="evContex">外形高端大气上档次，操作简便，一看就会！很喜欢推荐购买！外形高端
                    大气上档次，操作简便，一看就会！很喜欢推荐购买！</p>
                                    <div className="ev_img">
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <div className="clearx"></div>
                                    </div>
                                <p className="buy_time">购买日期：2017-03-01<a className="zan">1</a></p>
                                </div>
                            </article>
                            <article className="evalue">
                                <div className="wrapevalue" >
                                    <span className="ev_name"><i></i>gfhffgh12345<b>2017-03-15</b></span>
                                    <div className="clearx" style={{height:"0.8rem"}}></div>
                                    <p className="eva"><a className="like"></a><a className="like"></a><a className="nolike"></a><a className="nolike"></a><a className="nolike"></a></p>
                                    <p className="evContex">外形高端大气上档次，操作简便，一看就会！很喜欢推荐购买！外形高端
                    大气上档次，操作简便，一看就会！很喜欢推荐购买！</p>
                                    <div className="ev_img">
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <a><img src="images/merchandise/eva_1.jpg"/></a>
                                        <div className="clearx"></div>
                                    </div>
                                    <span className="message">
                                        <i></i>
                                        <p>卖家回复：非常的感谢亲爱的对special 的支持与鼓励喔~~咱们每周四下午2点都有新品准时上新喔~~~您可以随时的过来选选喔~~~我们会做的越来越好噢~~~~希望亲能够见证我们的成长喔~~~亲亲么么</p>
                                    </span>
                                    <p className="buy_time">购买日期：2017-03-01<a className="zan">1</a></p>
                                </div>
                            </article>
                        </div>
                    </div>  
                </div>
            </div>
 
            {/* <!--选择分类-->  */}
            <div className="opSortbox">
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
                        <a className="btn_fini" href="#">完成</a>
                    </div>
                </div>
            </div>
            <div className="clearx" style={{height:"5rem"}}></div>  
            <footer>
                <div className="footCon">
                    <a className="icons_kf" href="#"><em></em><span>客服</span></a>
                    <a className="icons_dp" href="#"><em></em><span>店铺</span></a>
                    <a className="icons_sc" href="#"><em></em><span>收藏</span></a>
                </div>
                <div className="footbtn">
                    <a href="#" className="car">加入购物车</a>
                    <a href="#" className="buy">立即购买</a>
                </div>
                <div className="clearx"></div>
            </footer>
      </React.Fragment>
    );
  }
}

export default Details;