import React from 'react';
import { withRouter } from 'react-router-dom'; 

function Footer(props) { 
    return(
        <footer>
            <div className="footer">
                <div className="container">
                <div className="ft-ct">
                    <div className="item">
                    <p className="name">thông tin Liên hệ</p>
                    <p className="call"><a href="#">0942666222 </a> - <a href="#">0942666222 </a></p>
                    <p className="mail"><a href="#">kientrucsnarthouse@gmail.com</a></p>
                    <p className="address">Trụ sở : 102 Thúy Nguyên, KĐT Ecopark, xã Phụng Công, Huyện Văn Giang, Hưng Yên</p>
                    </div>
                    <div className="item">
                    <p className="name">Về chúng tôi</p>
                    <p><a href="#">Giới thiệu chung</a></p>
                    <p><a href="#">Tầm nhìn sứ mệnh</a></p>
                    <p><a href="#">Giá trị cốt lõi</a></p>
                    <p><a href="#">Tại sao nên chọn chúng tôi</a></p>
                    <p><a href="#">Đội ngũ nhân sự</a></p>
                    </div>
                    <div className="item">
                    <p className="name">Chính sách</p>
                    <p><a href="#">Hướng dẫn mua hàng</a></p>
                    <p><a href="#">Vận chuyển - Lắp đặt</a></p>
                    <p><a href="#">Tạm ứng và thanh toán</a></p>
                    <p><a href="#">Quy định đổi trả</a></p>
                    <p><a href="#">Bảo mật thông tin</a></p>
                    <p><a href="#">Chính sách Bảo hành</a></p>
                    </div>
                    <div className="item">
                    <p className="name">Đăng kí nhận tin</p>
                    <form action>
                        <input type="text" placeholder="Nhập email của bạn" />
                        <button><img src="images/ic-long-right.png" alt="" /></button>
                    </form>
                    <p>Kết nối với chúng tôi:</p>
                    <div className="ct-sca">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-youtube-play" /></a>
                        <a href="#"><i className="fa fa-instagram" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="menu-ft">
                <div className="container">
                <div className="menuft-ct">
                    <div className="menu-left">
                    <a href="#" title>Thiết kế thi công nội thất</a>
                    <a href="#">Xây dựng trọn gói </a>
                    <a href="#">Nội thất</a>
                    <a href="#">Dự án</a>
                    <a href="#">Tin tức</a>
                    <a href="#">Liên hệ</a>
                    </div>
                    <div className="copyright">
                    © T89 SMART HOUSE 2019. All rights reserved.
                    </div>
                </div>
                </div>
            </div>
            </footer>
    )
}
export default withRouter(Footer)