import React from "react";
import "antd/dist/antd.css";
import { Card, List, Layout } from "antd";


class IntroParagraph extends React.Component {
    
    state = {
        key: "tab1",
        noTitleKey: "app",
        data: {"global":{"cases":"145816","deaths":"5438","recovered":"72550"},"vietnam":{"cases":"49","deaths":"0","recovered":"16"}}
    };

    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    };
    _item = (data) => {
        return (
            ["Số ca nhiễm: " + data.cases,
            "Số ca tử vong: " + data.deaths,
            "Số ca hồi phục: " + data.recovered
            ]
        )
    }
    render() {
       
        const tabList = [
            {
                key: "tab1",
                tab: "Việt Nam"
            },
            {
                key: "tab2",
                tab: "Thế Giới"
            }
        ];
        
        const contentList = {
            tab1: (
                    <List
                        size="small"
                        dataSource={this._item(this.state.data.vietnam)}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
            ),
            tab2: (
                    <List
                        size="small"
                        dataSource={this._item(this.state.data.global)}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
            )
        };

        return (
            <div>
                <Card
                    style={{ width: "100%", backgroundColor: "white" }}
                    title="Vietnam COVID 19 TRACKING"
                    headStyle={{
                        border: 0,
                        color: "#424242",
                        fontWeight: "bold",
                        fontFamily: "Andika"
                    }}
                    bodyStyle={{
                        border: 0,
                        color: "#81c784",
                        fontWeight: "medium"
                    }}
                    tabList={tabList}
                    onTabChange={key => {
                        this.onTabChange(key, "key");
                    }}
                >
                    {contentList[this.state.key]}
                    <Layout style={{ color: "darkGray", backgroundColor: "white" }}>
                        <p>
                            Last updated on 13/3/2020 from{" "}
                            <a href="https://ncov.moh.gov.vn">MOH</a>
                        </p>
                        <p>&copy; Goong Maps 2019</p>
                    </Layout>
                </Card>
            </div>
        );
    }
}                // <p>

export default IntroParagraph;
