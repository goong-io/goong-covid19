import React from "react";
import "antd/dist/antd.css";
import { Card, List, Layout } from "antd";
class IntroParagraph extends React.Component {
    state = {
        key: "tab1",
        noTitleKey: "app",
        data: null
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
        const vn = this.props.data.vietnam;
        const global = this.props.data.global;
      
        const contentList = {
            tab1: (
                <p>
                    <List
                        size="small"
                        dataSource={this._item(vn)}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </p>
            ),
            tab2: (
                <p>
                    <List
                        size="small"
                        dataSource={this._item(global)}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </p>
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
}
export default IntroParagraph;
