import React from 'react';
import './App.css';
import Map from './components/Map';
import useSWR from 'swr';
import fetcher from './utils/fetcher';
import Search from './components/Search';
import './index.css';
import IntroParagraph from './components/IntroParagraph'
import { Layout } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const { data, err } = useSWR(`https://ncovi.vnpt.vn/canhbaovungdich`, fetcher, { focusThrottleInterval: 60000 })
  // const {data2, err2} = useSWR(`https://code.junookyo.xyz/api/ncov-moh/data.json`, fetcher, {focusThrottleInterval: 60000})
  const total = { "success": true, "data": { "global": { "cases": "140081", "deaths": "5123", "recovered": "70733" }, "vietnam": { "cases": "48", "deaths": "0", "recovered": "16" } } }
  const points = data ? (data.data || []) : []
  return (
    <>

      <div className="container">
        <div style={{position: 'absolute', top:0, left: 0, width: '100%', height: '100%'}}>
          <Map points={points} />
        </div>
        <div style={{display: 'block', position: 'fixed', backgroundColor: "white", top: 12, left: 12, borderRadius: '10px'}} width='250'>
          {total ? <IntroParagraph data={total.data} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
