import React from 'react';
import { List, Badge } from 'antd';
import groupBy from "lodash/groupBy"
const axios = require('axios');


export default class Listing extends React.Component {
    componentDidMount() {
        axios.get("https://us-central1-goong-v2.cloudfunctions.net/vietnam")
            .then(response => {
                // handle success
                let data = response.data
                const grouped = groupBy(data, 'address');
                const groups = Object.keys(grouped).map(d => {
                    return {
                        address: d,
                        recovered: grouped[d].reduce((acc, cur) => acc + parseInt(cur.recovered || 0), 0),
                        doubt: grouped[d].reduce((acc, cur) => acc + parseInt(cur.doubt || 0), 0),
                        number: grouped[d].reduce((acc, cur) => acc + parseInt(cur.number || 0), 0),
                        lat: grouped[d].reduce((acc, cur) => (cur.Lat || 0), 0),
                        lon: grouped[d].reduce((acc, cur) => (cur.Lng || 0), 0),
                        updated: grouped[d].reduce((acc, cur) => (cur.date || 0), 0),
                        items: grouped[d].sort((a, b) => a.number < b.number),
                    }
                })
                this.setState({ data: groups })
            })
            .catch(err => {
                console.log(err);
            })
    }
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    render() {
        return (
            <div>
                <p></p>
                {this.state.data ?
                    <List
                        header={<b>Chi tiết</b>}
                        size="small"
                        bordered
                        dataSource={this.state.data}
                        renderItem={item => <List.Item>{item.address} <Badge count={item.number} /> <Badge count={item.recovered} style={{ backgroundColor: 'green' }}></Badge></List.Item>}
                    /> : null}
            </div>
        )
    }
}



