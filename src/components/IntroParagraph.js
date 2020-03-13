import React from "react"
import { Text, Link, Stack } from "@chakra-ui/core"

const IntroParagraph = ({ vnCases, worldCases }) => {            
    return (
        <Text color="gray.600" mb="1.25rem">

            {`Ca nhiễm Corunavirus đầu tiên được ghi nhận vào 31 tháng 12 tại Vũ Hán - Trung Quốc(`}
            <Link alt="WHO — Novel coronavirus (COVID-19)" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" color="#00AFAA">
                {"WHO"}
            </Link>
            
            { `). Tính đến nay, đã có ${worldCases} ca nhiễm trên toàn thế giới. Trang web này hiển thị thông tin số ca nhiễm cập nhật liên tục từ ` }            
            <Link alt="Bộ Y Tế" href="https://ncov.moh.gov.vn" color="#00AFAA">
                {"Bộ Y Tế. "}
            </Link>            
            
            {`Thông tin trên bản đồ hiển thị các khu vực có nguy cơ lây nhiễm cao! `}
            {`Tìm hiểu thêm cách chúng tôi xây dựng bản đồ này `}
            <Link
                color="#00AFAA"
                alt="Tìm hiểu thêm cách chúng tôi xây dựng bản đồ này"
                href="https://blog.goong.io"
            >
                {"Xây dựng bản đồ Coronavirus với Goong Maps"}
            </Link>
            {"."}
            
        </Text>
    )
}

export default IntroParagraph
