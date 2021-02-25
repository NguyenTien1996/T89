import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'; 
import img01 from '../../image/vnese.png';

function Header(props) { 
    return(
        <header>
            <div className="head-top">
                <div className="container">
                <div className="header-ct">
                    <div className="social">
                    <a href="#" title><i className="fa fa-facebook" /></a>
                    <a href="#" title><i className="fa fa-twitter" /></a>
                    <a href="#" title><i className="fa fa-youtube-play" /></a>
                    <a href="#" title><i className="fa fa-instagram" /></a>
                    </div>
                    <div className="language">
                    <p className="name"><img src={img01} />Tiếng Việt</p>
                    <ul className="menu-language">
                        <li><a href="#"><img src={img01} />Tiếng Việt</a></li>
                        <li><a href="#"><img src="images/english.png" />Tiếng Anh</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="head-middle">
                <div className="container">
                <div className="header-ct">
                    <div className="logo">
                    <a href="#" title>
                        <img src="images/logo.png" alt="" />
                    </a>
                    </div>
                    <div className="form-search">
                    <form action>
                        <input type="text" />
                        <button><img src="images/ic-search.png" alt="" /></button>
                    </form>
                    </div>
                    <div className="contact">
                    <div className="item">
                        <div className="img"><a href="#"><img src="images/ic-callct.png" alt="" /></a></div>
                        <div className="text"><a href="#">0123 123 123</a></div>
                    </div>
                    <div className="item">
                        <div className="img"><a href="#"><img src="images/ic-loginct.png" alt="" /></a></div>
                        <div className="text"><a href="#">Đăng nhập</a></div>
                    </div>
                    <div className="item">
                        <div className="img"><a href="#"><img src="images/ic-ghct.png" alt="" /></a></div>
                        <div className="text"><a href="#">Giỏ hàng <span>(0)</span></a></div>
                    </div>
                    </div>
                    <div className="sticker-menu"><span /></div>
                    <div className="bg-black" />
                </div>
                </div>
            </div>
            <div className="head-bottom">
                <div className="container">
                <div className="header-ct">
                    <ul className="menu-top">
                    <li><a href="#"><img src="images/ic-home.png" alt="" /></a></li>
                    <li><a href="#">Thiết kế thi công nội thất</a></li>
                    <li><a href="#">Xây dựng trọn gói</a></li>
                    <li><a href="#">Nội thất</a></li>
                    <li><a href="#">Dự án</a></li>
                    <li><a href="#">Tin tức</a>
                    </li>
                    <li><a href="#">Liên hệ</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="scroll-fix" />
            </header>
    )
}
export default withRouter(Header)