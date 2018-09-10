import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "../assets/css/footer.css"


class Footer extends Component {
  render() {
    return (
        <footer>
            
            <NavLink to="/home" activeClassName="active">
                <i className="icon-f1"></i>
                首页
            </NavLink>
            <NavLink to="/shop" activeClassName="active">
                <i className="icon-f2"></i>
                分类
                </NavLink>
            <NavLink to="/details" activeClassName="active">
                <i className="icon-f3"></i>
                好货
             </NavLink>
            <NavLink to="/car" activeClassName="active">
                <i className="icon-f4"></i>
                购物车
            </NavLink>
            <NavLink to="/login" activeClassName="active">
                <i className="icon-f5"></i>
                我的农芯乐
            </NavLink>

        </footer>
    );
  }
}

export default Footer;