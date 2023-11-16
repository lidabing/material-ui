import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import Section from 'docs/src/layouts/Section';
import Container from '@mui/material/Container';
import UpcomingAdjustBonds from './upcoming_adjust_bonds';


function BondsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
    <div>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="将符合下修条件" />
        <Tab label="重算日即将到期" />
        <Tab label="已经提议下修" />
        <Tab label="待发转债" />
        <Tab label="强赎|到期 预警" />
      </Tabs>
      {selectedTab === 0 && <UpcomingAdjustBonds />}
      {selectedTab === 1 && <UpcomingAdjustBonds />}
     </div>
     </Container>
  );
 
}

export default BondsTabs;
