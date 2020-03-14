import React from 'react';
import './App.css';
import Map from './components/Map';
import useSWR from 'swr';
import fetcher from './utils/fetcher';
import './index.css';
import IntroParagraph from './components/IntroParagraph'
import 'antd/dist/antd.css';

function App() {
  const { data, err } = useSWR(`https://ncovi.vnpt.vn/canhbaovungdich`, fetcher, { focusThrottleInterval: 60000 })
  const points = data ? (data.data || []) : []

  return (
    <>
      <div className="container">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Map points={points} />
        </div>
        <div style={{ display: 'block', position: 'fixed', backgroundColor: "white", top: 12, left: 12, borderRadius: '10px' }} width='250'>
          <IntroParagraph />
        </div>
      </div>
    </>
  );
}

export default App;
