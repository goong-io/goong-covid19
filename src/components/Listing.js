import React from "react"
import { Tabs } from 'antd';
const { TabPane } = Tabs;


class Listing extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div style={{ padding: "10px" }} >
        <Tabs size="large" type="card">
          <TabPane tab="Việt Nam" key="1">
            <p>Số ca nhiễm: {data.vietnam.cases}</p>
            <p>Số ca tử vong: {data.vietnam.deaths}</p>
            <p>Số ca hồi phục: {data.vietnam.recovered}</p>
          </TabPane>
          <TabPane tab="Thế Giới" key="2">
          <p>Số ca nhiễm: {data.global.cases}</p>
            <p>Số ca tử vong: {data.global.deaths}</p>
            <p>Số ca hồi phục: {data.global.recovered}</p>
          </TabPane>
        </Tabs>
      </div>
    )
  }

}

export default Listing
