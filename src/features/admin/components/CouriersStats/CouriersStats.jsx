import React from 'react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

import './CouriersStats.scss';

function CouriersStats() {
  return (
    <div className="couriers-stats">
      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total orders delivered</StatLabel>
        <StatNumber>2023</StatNumber>
        <StatHelpText>Partner since Feb 2018</StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Delivered in February</StatLabel>
        <StatNumber>450</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          9.05%
        </StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total revenue</StatLabel>
        <StatNumber>8123 EUR</StatNumber>
        <StatHelpText>Partner since Feb 2018</StatHelpText>
      </Stat>

      <Stat
        className="couriers-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Revenue in February</StatLabel>
        <StatNumber>1450 EUR</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          12%
        </StatHelpText>
      </Stat>
    </div>
  );
}

export default CouriersStats;
