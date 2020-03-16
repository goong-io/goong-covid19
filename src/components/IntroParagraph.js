import React from "react";
import "antd/dist/antd.css";
import { Card, List, Layout } from "antd";
import Listing from './Listing';

const axios = require('axios');

class IntroParagraph extends React.Component {
    componentDidMount() {
        axios.get("https://us-central1-goong-v2.cloudfunctions.net/covid")
            .then(response => {
                this.setState({ data: response.data.data })
            })
    }
    constructor(props) {
        super(props);
        this.state = {
            key: "tab1",
            noTitleKey: "app",
            data: null
        };
    }


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
        const vn = this.state.data ? this.state.data.vietnam : null;
        const global = this.state.data ? this.state.data.global : null;

        const contentList = {
            tab1: (
                <List
                    size="small"
                    dataSource={vn ? this._item(vn) : []}
                    renderItem={item => <List.Item style={{ fontWeight: 'bold' }}>{item}</List.Item>}
                />
            ),
            tab2: (
                <List
                    size="small"
                    dataSource={global ? this._item(global) : []}
                    renderItem={item => <List.Item style={{ fontWeight: 'bold' }}>{item}</List.Item>}
                />
            )
        };

        return (
            <div style={{ overflow: 'auto', maxHeight: '95vh' }}>
                <Card
                    style={{ width: "100%", backgroundColor: "white" }}
                    title="Vietnam COVID 19 TRACKING"
                    headStyle={{
                        border: 0,
                        color: "#424242",
                        fontWeight: "bold",
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
                    {this.state.data ? contentList[this.state.key] : 'Loading...'}
                    <Listing />
                    <br />

                    <Layout style={{ color: "darkGray", backgroundColor: "white" }}>
                        <p>
                            Last updated on {new Date().toLocaleDateString("vi-VN")} from {" "}
                            <a href="https://ncov.moh.gov.vn" target='_blank' rel="noopener noreferrer"> <br />Ministry Of Health</a>
                        </p>
                        <p>&copy; Goong.io 2019</p>
                    </Layout>
                </Card>
            </div>
        );
    }
}

export default IntroParagraph;
