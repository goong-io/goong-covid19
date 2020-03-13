import React from 'react';
import './App.css';
import Map from './components/Map';
import useSWR from 'swr';
import fetcher from './utils/fetcher';
import Search from './components/Search';

import IntroParagraph from './components/IntroParagraph'
import Listing from './components/Listing';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Sider, Content, Footer } = Layout;
// Use at the root of your app

function App() {
  const { data, err } = useSWR(`https://ncovi.vnpt.vn/canhbaovungdich`, fetcher, { focusThrottleInterval: 60000 })
  // const {data2, err2} = useSWR(`https://code.junookyo.xyz/api/ncov-moh/data.json`, fetcher, {focusThrottleInterval: 60000})
  const total = { "success": true, "data": { "global": { "cases": "140081", "deaths": "5123", "recovered": "70733" }, "vietnam": { "cases": "47", "deaths": "0", "recovered": "16" } } }
  const points = data ? (data.data || []) : []
  return (
    <>

      <Layout style={{ minHeight: "100vh"}}>
        <Sider style={{ backgroundColor: "white" }} width='300'>
          {total ? <IntroParagraph vnCases={total.data.vietnam.cases} worldCases={total.data.global.cases} /> : null}
          <Listing data={total.data} />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <Map points={points} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
