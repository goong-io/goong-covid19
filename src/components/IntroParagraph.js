import React, { Component } from "react"
import { Card, Button } from 'antd';


class IntroParagraph extends React.Component {
    render() {
        return (
            <div className="site-card-border-less-wrapper">

                <Card title="Tracking Coronavirus - COVID-19" bordered={false}>
                    <p>
                        Ca nhiễm Corunavirus đầu tiên được ghi nhận vào 31 tháng 12 tại Vũ Hán - Trung Quốc (
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target='_blank'>
                            {"WHO"}
                        </a>                        
                        ).
                        <p></p>
                         Tính đến nay, đã có {this.props.worldCases} ca nhiễm trên toàn thế giới, {this.props.vnCases} ca nhiễm ở Việt Nam. Trang web này hiển thị thông tin số ca nhiễm cập nhật liên tục từ 
        <a href="https://ncov.moh.gov.vn">
                            {"Bộ Y Tế. "}
                        </a>
                        <p></p>
                        {`Thông tin trên bản đồ hiển thị các khu vực có nguy cơ lây nhiễm cao! `}
                        <p></p>
                        {`Tìm hiểu thêm cách chúng tôi xây dựng bản đồ này `}
                        <a href="https://blog.goong.io"
                        >
                            {"Xây dựng bản đồ Coronavirus với Goong Maps"}
                        </a>
                    </p>
                </Card>
            </div>
        )
    }



}
export default IntroParagraph
