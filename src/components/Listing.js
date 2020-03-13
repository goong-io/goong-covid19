import React from "react"
import {
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Stack,
  Divider,
  Heading
} from "@chakra-ui/core"
import render from 'react'
const Listing = ({ data }) => {
  { console.log(data) }
  return (
    <div>
      <Divider />
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab width={1 / 2}>Việt Nam</Tab>
          <Tab width={1 / 2}>Thế Giới</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box rounded="md" px={4} h={8} borderWidth="1px">
              <Text>Số ca nhiễm: {data.vietnam.cases}</Text>
              <Text>Số ca nhiễm: {data.vietnam.deaths}</Text>
              <Text>Số ca nhiễm: {data.vietnam.recovered}</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box rounded="md" px={4} h={8} borderWidth="1px">
              <Text>Số ca nhiễm: {data.global.cases}</Text>
              <Text>Số ca nhiễm: {data.global.deaths}</Text>
              <Text>Số ca nhiễm: {data.global.recovered}</Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div >
  )
}

export default Listing
