import React from 'react';
import './App.css';
import Map from './components/Map';
import useSWR from 'swr';
import fetcher from './utils/fetcher';
import Search from './components/Search';
import { ThemeProvider } from "@chakra-ui/core";
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/core"
import IntroParagraph from './components/IntroParagraph'
import Listing from './components/Listing';
// Use at the root of your app

function App() {
  const { data, err } = useSWR(`https://ncovi.vnpt.vn/canhbaovungdich`, fetcher, { focusThrottleInterval: 60000 })
  // const {data2, err2} = useSWR(`https://code.junookyo.xyz/api/ncov-moh/data.json`, fetcher, {focusThrottleInterval: 60000})
  const total = {
    "success": true,
    "data": {
      "global": {
        "cases": "134930",
        "deaths": "4990",
        "recovered": "70396"
      },
      "vietnam": {
        "cases": "44",
        "deaths": "0",
        "recovered": "16"
      }
    }
  }
  const points = data ? (data.data || []) : []
  return (
    <>
      <ThemeProvider>
        <Box
          display={"block"}
          position="fixed"
          top="5"
          left="5"          
          bottom="20"
          zIndex={999999}
          borderTop="0.25rem solid #2196f3"
          width={["100%", null, "25rem", "20rem"]}
          boxShadow="lg"
          overflow="scroll"
          bg="white"
          pb="5rem"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Box px="1.25rem" pt="1.25rem">
            <Heading fontSize={["1.5rem", "2rem", null, "1.5rem"]} lineHeight={1.125} mb="1.25rem">
              <Text mr="0.75rem" as="span">
                {"Tracking Coronavirus"} <br />
                {"COVID-19"}
              </Text>
            </Heading>
            {total ? <IntroParagraph vnCases={total.data.vietnam.cases} worldCases={total.data.global.cases} /> : null}
            <Listing data={total.data} />
          </Box>
        </Box>
        <Box position="absolute" display="block" width={["50%", null, "25rem", "20rem"]}><Map points={points} /></Box>
        
      </ThemeProvider>
    </>
  );
}

export default App;
